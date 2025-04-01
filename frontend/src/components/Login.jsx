import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import image from '../assets/image.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    if (!email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch('http://localhost:6900/login', { 
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false); // Stop loading

      if (response.ok) {
        // Store token & user info in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ username: data.username, email: data.email }));
        setMessage('Login successful!');
        
        // Redirect after 1 sec
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setMessage(data.msg || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="flex bg-white">
      <div className="w-full md:w-1/2 p-4 flex flex-col">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Log in</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-300"
                placeholder="johndoe@email.com"
                required
              />
            </div>
            
            {/* Password Input */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="block text-gray-700">Password</label>
                <a href="#" className="text-indigo-600 text-sm">Forgot Password?</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-300"
                  placeholder="••••••••••••••"
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full p-3 rounded transition-colors duration-200 mb-4 flex justify-center ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            
            {/* Error Message Display */}
            {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
          </form>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account? <Link to="/signup" className="text-indigo-600">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 h-full bg-gray-200 items-center justify-center p-6">
        <img src={image} alt="Login Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Login;
