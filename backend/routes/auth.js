const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');

// Google Authentication Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in HTTP-only cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    console.log(`📖 DB READ: Google user authenticated -> ${req.user.email}`);

    // Redirect to frontend after login
    res.redirect(`${process.env.CLIENT_URL}/`);
  }
);

// Register (Manual Signup)
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(`📖 DB READ: Checked if user exists -> ${email}`);

    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ 
      username, 
      email, 
      password: await bcrypt.hash(password, 10) 
    });

    await user.save();
    console.log(`📝 DB WRITE: New user registered -> ${email}`);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.json({ message: 'Registration successful' });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Registration failed. See server logs." });
  }
});

// Login (Manual)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(`📖 DB READ: Login attempt -> ${email}`);

    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    if (!user.password) return res.status(400).json({ msg: 'This email is registered via Google. Please log in using Google.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
    });

    //  Send token explicitly in response if frontend requires it
    res.json({ message: 'Login successful', token }); 
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed. See server logs." });
  }
});


// Logout
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.clearCookie('token');
    console.log('✅ User logged out');
    res.json({ message: 'Logged out successfully' });
  });
});

// UPDATE user profile
router.put('/update', authMiddleware, async (req, res) => {
  const { username, email, profilePic } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { username, email, profilePic } },
      { new: true, runValidators: true }
    );

    console.log(`✏️ DB UPDATE: User profile updated -> ${updatedUser.email}`);
    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ error: "Update failed" });
  }
});

// DELETE user account
router.delete('/delete', authMiddleware, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.clearCookie('token');
    console.log(`🗑️ DB DELETE: User account deleted -> ${deletedUser.email}`);
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    console.error("Delete account error:", err);
    res.status(500).json({ error: "Account deletion failed" });
  }
});


module.exports = router;
