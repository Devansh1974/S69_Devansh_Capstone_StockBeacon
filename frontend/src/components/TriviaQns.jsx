// Large pool of static finance-related questions
const financeQuestions = {
  easy: [
    {
      question: "What does IPO stand for?",
      options: [
        "Initial Public Offering",
        "Internal Private Option",
        "International Public Order",
        "Initial Private Offering",
      ],
      answer: "Initial Public Offering",
    },
    {
      question: "What is the purpose of a budget?",
      options: [
        "To plan and track income and expenses",
        "To invest in stocks",
        "To borrow money",
        "To avoid taxes",
      ],
      answer: "To plan and track income and expenses",
    },
    {
      question: "What does GDP stand for?",
      options: [
        "Gross Domestic Product",
        "General Debt Profit",
        "Global Development Plan",
        "Gross Dividend Payment",
      ],
      answer: "Gross Domestic Product",
    },
    {
      question: "Which term refers to money set aside for emergencies?",
      options: ["Savings", "Investment", "Liability", "Revenue"],
      answer: "Savings",
    },
    {
      question: "What is a stock?",
      options: [
        "A share in the ownership of a company",
        "A type of bond",
        "A government loan",
        "A savings account",
      ],
      answer: "A share in the ownership of a company",
    },
    {
      question: "What does ROI mean?",
      options: [
        "Return on Investment",
        "Rate of Interest",
        "Revenue on Income",
        "Risk of Inflation",
      ],
      answer: "Return on Investment",
    },
    {
      question: "What is a dividend?",
      options: [
        "A payment made by a company to its shareholders",
        "A loan from a bank",
        "A tax refund",
        "A stock price increase",
      ],
      answer: "A payment made by a company to its shareholders",
    },
    {
      question: "What is the stock market?",
      options: [
        "A place where stocks are bought and sold",
        "A bank vault",
        "A government office",
        "A type of insurance",
      ],
      answer: "A place where stocks are bought and sold",
    },
    {
      question: "What does NASDAQ stand for?",
      options: [
        "National Association of Securities Dealers Automated Quotations",
        "National Stock Exchange of America",
        "North American Stock Distribution",
        "New Asset Stock Acquisition",
      ],
      answer: "National Association of Securities Dealers Automated Quotations",
    },
    {
      question: "What is a bull market?",
      options: [
        "A market with rising stock prices",
        "A market with falling stock prices",
        "A market with no trading",
        "A market for bonds only",
      ],
      answer: "A market with rising stock prices",
    },
    {
      question: "What is a bear market?",
      options: [
        "A market with falling stock prices",
        "A market with rising stock prices",
        "A market for commodities",
        "A market for real estate",
      ],
      answer: "A market with falling stock prices",
    },
    {
      question: "What is a mutual fund?",
      options: [
        "A pool of money from investors to buy securities",
        "A single stock investment",
        "A government bond",
        "A personal savings account",
      ],
      answer: "A pool of money from investors to buy securities",
    },
    {
      question: "What does NYSE stand for?",
      options: [
        "New York Stock Exchange",
        "National Yield Stock Exchange",
        "New Year Stock Exchange",
        "North American Yield Exchange",
      ],
      answer: "New York Stock Exchange",
    },
    {
      question: "What is an asset?",
      options: [
        "Something of value owned by a person or company",
        "A type of debt",
        "A stock market index",
        "A government tax",
      ],
      answer: "Something of value owned by a person or company",
    },
    {
      question: "What is a liability?",
      options: [
        "A debt or obligation owed by a person or company",
        "A type of asset",
        "A stock dividend",
        "A market index",
      ],
      answer: "A debt or obligation owed by a person or company",
    },
    {
      question: "What is a broker?",
      options: [
        "A person who buys and sells securities for clients",
        "A type of stock",
        "A bank manager",
        "A government official",
      ],
      answer: "A person who buys and sells securities for clients",
    },
    {
      question: "What is a market index?",
      options: [
        "A measure of the performance of a group of stocks",
        "A type of bond",
        "A personal investment",
        "A government regulation",
      ],
      answer: "A measure of the performance of a group of stocks",
    },
    {
      question: "What is a portfolio?",
      options: [
        "A collection of investments held by an individual",
        "A single stock",
        "A bank account",
        "A type of bond",
      ],
      answer: "A collection of investments held by an individual",
    },
    {
      question: "What is a share?",
      options: [
        "A unit of ownership in a company",
        "A type of bond",
        "A loan amount",
        "A bank deposit",
      ],
      answer: "A unit of ownership in a company",
    },
    {
      question: "What is a blue-chip stock?",
      options: [
        "A stock of a large, well-established company",
        "A stock of a new startup",
        "A stock with no value",
        "A stock of a foreign company",
      ],
      answer: "A stock of a large, well-established company",
    },
    {
      question: "What is a penny stock?",
      options: [
        "A low-priced stock with high risk",
        "A stock worth over $100",
        "A government bond",
        "A blue-chip stock",
      ],
      answer: "A low-priced stock with high risk",
    },
    {
      question: "What is a limit order?",
      options: [
        "An order to buy or sell at a specific price",
        "An order to buy any stock",
        "A market-wide order",
        "A stop-loss order",
      ],
      answer: "An order to buy or sell at a specific price",
    },
    {
      question: "What is a market order?",
      options: [
        "An order to buy or sell at the current market price",
        "An order at a fixed price",
        "A stop order",
        "A limit order",
      ],
      answer: "An order to buy or sell at the current market price",
    },
    {
      question: "What is a stock split?",
      options: [
        "Dividing existing shares to increase the number of shares",
        "Merging stocks into one",
        "Selling all stocks",
        "Buying more shares",
      ],
      answer: "Dividing existing shares to increase the number of shares",
    },
    {
      question: "What is a takeover?",
      options: [
        "When one company acquires another",
        "When a stock splits",
        "When a company goes bankrupt",
        "When a stock rises",
      ],
      answer: "When one company acquires another",
    },
    {
      question: "What is a merger?",
      options: [
        "When two companies combine into one",
        "When a company splits",
        "When a stock falls",
        "When a company relocates",
      ],
      answer: "When two companies combine into one",
    },
    {
      question: "What is a short sell?",
      options: [
        "Selling borrowed shares hoping to buy them back cheaper",
        "Buying stocks at a high price",
        "Selling company assets",
        "Lending stocks",
      ],
      answer: "Selling borrowed shares hoping to buy them back cheaper",
    },
    {
      question: "What is a dividend yield?",
      options: [
        "The annual dividend as a percentage of the stock price",
        "The stock price increase",
        "The company profit",
        "The interest rate",
      ],
      answer: "The annual dividend as a percentage of the stock price",
    },
    {
      question: "What is an ETF?",
      options: [
        "Exchange-Traded Fund",
        "Economic Trade Fund",
        "Equity Transfer Fund",
        "Exchange Tariff Fund",
      ],
      answer: "Exchange-Traded Fund",
    },
    {
      question: "What is a bear trap?",
      options: [
        "A false signal that a stock will fall",
        "A stock market crash",
        "A buy signal",
        "A dividend increase",
      ],
      answer: "A false signal that a stock will fall",
    },
    {
      question: "What is a bull trap?",
      options: [
        "A false signal that a stock will rise",
        "A stock market recovery",
        "A sell signal",
        "A dividend cut",
      ],
      answer: "A false signal that a stock will rise",
    },
    {
      question: "What is compound interest?",
      options: [
        "Interest calculated on the initial principal and accumulated interest",
        "Simple interest",
        "Interest on loans only",
        "Interest on bonds only",
      ],
      answer:
        "Interest calculated on the initial principal and accumulated interest",
    },
    {
      question: "What is inflation?",
      options: [
        "A general increase in prices",
        "A decrease in prices",
        "A stock market crash",
        "A type of loan",
      ],
      answer: "A general increase in prices",
    },
    {
      question: "What is deflation?",
      options: [
        "A general decrease in prices",
        "An increase in prices",
        "A stock market rally",
        "A type of bond",
      ],
      answer: "A general decrease in prices",
    },
    {
      question: "What is a credit score?",
      options: [
        "A numerical expression based on an analysis of a person's credit files",
        "A stock price",
        "A loan amount",
        "A bank account balance",
      ],
      answer:
        "A numerical expression based on an analysis of a person's credit files",
    },
    {
      question: "What is a credit report?",
      options: [
        "A detailed report of an individual's credit history",
        "A stock market report",
        "A company's financial statement",
        "A government tax form",
      ],
      answer: "A detailed report of an individual's credit history",
    },
    {
      question: "What is a debit card?",
      options: [
        "A card that deducts money directly from a checking account",
        "A credit card",
        "A gift card",
        "A store loyalty card",
      ],
      answer: "A card that deducts money directly from a checking account",
    },
    {
      question: "What is a credit card?",
      options: [
        "A card that allows you to borrow money for purchases",
        "A debit card",
        "A prepaid card",
        "A discount card",
      ],
      answer: "A card that allows you to borrow money for purchases",
    },
    {
      question: "What is APR?",
      options: [
        "Annual Percentage Rate",
        "Annual Profit Return",
        "Average Price Range",
        "Asset Purchase Rate",
      ],
      answer: "Annual Percentage Rate",
    },
    {
      question: "What is a mortgage?",
      options: [
        "A loan to purchase real estate",
        "A stock investment",
        "A personal loan",
        "A business loan",
      ],
      answer: "A loan to purchase real estate",
    },
    {
      question: "What is a lease?",
      options: [
        "A contract allowing use of an asset for a specified period",
        "A purchase agreement",
        "A stock option",
        "A dividend payment",
      ],
      answer: "A contract allowing use of an asset for a specified period",
    },
    {
      question: "What is a down payment?",
      options: [
        "An initial payment made when buying an expensive item",
        "A loan repayment",
        "A stock investment",
        "A dividend payment",
      ],
      answer: "An initial payment made when buying an expensive item",
    },
    {
      question: "What is collateral?",
      options: [
        "An asset pledged as security for a loan",
        "A dividend payment",
        "A stock price",
        "A bond yield",
      ],
      answer: "An asset pledged as security for a loan",
    },
    {
      question: "What is interest?",
      options: [
        "The cost of borrowing money",
        "A stock dividend",
        "A profit margin",
        "A bond yield",
      ],
      answer: "The cost of borrowing money",
    },
    {
      question: "What is principal?",
      options: [
        "The original sum of money borrowed or invested",
        "A stock price",
        "A dividend payment",
        "A bond yield",
      ],
      answer: "The original sum of money borrowed or invested",
    },
    {
      question: "What is a savings account?",
      options: [
        "A bank account that earns interest",
        "A checking account",
        "A stock account",
        "A bond account",
      ],
      answer: "A bank account that earns interest",
    },
    {
      question: "What is a checking account?",
      options: [
        "A bank account for everyday transactions",
        "A savings account",
        "A stock account",
        "A bond account",
      ],
      answer: "A bank account for everyday transactions",
    },
    {
      question: "What is a CD?",
      options: [
        "Certificate of Deposit",
        "Credit Document",
        "Capital Dividend",
        "Corporate Debt",
      ],
      answer: "Certificate of Deposit",
    },
    {
      question: "What is a money market account?",
      options: [
        "A type of savings account with higher interest rates",
        "A checking account",
        "A stock account",
        "A bond account",
      ],
      answer: "A type of savings account with higher interest rates",
    },
    {
      question: "What is a 529 plan?",
      options: [
        "A savings plan for education expenses",
        "A retirement plan",
        "A stock plan",
        "A bond plan",
      ],
      answer: "A savings plan for education expenses",
    },
    {
      question: "What is a Roth IRA?",
      options: [
        "A retirement savings account with tax-free withdrawals",
        "A taxable retirement account",
        "A stock account",
        "A bond account",
      ],
      answer: "A retirement savings account with tax-free withdrawals",
    },
  ],
  medium: [
    {
      question: "What is a 401(k) plan?",
      options: [
        "A retirement savings plan offered by employers",
        "A type of stock exchange",
        "A government tax relief program",
        "A personal loan scheme",
      ],
      answer: "A retirement savings plan offered by employers",
    },
    {
      question: "What is diversification?",
      options: [
        "Spreading investments among different assets",
        "Investing all in one stock",
        "Borrowing money",
        "Selling assets",
      ],
      answer: "Spreading investments among different assets",
    },
    {
      question: "What is a bond?",
      options: [
        "A debt security where the issuer owes the bondholder",
        "A type of stock",
        "A government grant",
        "A personal loan",
      ],
      answer: "A debt security where the issuer owes the bondholder",
    },
    {
      question: "What does ROI stand for?",
      options: [
        "Return on Investment",
        "Rate of Interest",
        "Revenue on Income",
        "Risk of Inflation",
      ],
      answer: "Return on Investment",
    },
    {
      question: "What is a hedge fund?",
      options: [
        "An investment fund using advanced strategies",
        "A mutual fund",
        "A savings account",
        "A government bond",
      ],
      answer: "An investment fund using advanced strategies",
    },
    {
      question: "What is a derivative?",
      options: [
        "A financial contract based on an underlying asset",
        "A type of stock",
        "A government loan",
        "A savings plan",
      ],
      answer: "A financial contract based on an underlying asset",
    },
    {
      question: "What is a margin account?",
      options: [
        "An account allowing borrowing to buy securities",
        "A savings account",
        "A retirement plan",
        "A stock index",
      ],
      answer: "An account allowing borrowing to buy securities",
    },
    {
      question: "What is a put option?",
      options: [
        "A contract to sell a stock at a specific price",
        "A contract to buy a stock",
        "A stock dividend",
        "A bond payment",
      ],
      answer: "A contract to sell a stock at a specific price",
    },
    {
      question: "What is a call option?",
      options: [
        "A contract to buy a stock at a specific price",
        "A contract to sell a stock",
        "A stock split",
        "A bond yield",
      ],
      answer: "A contract to buy a stock at a specific price",
    },
    {
      question: "What is a capital gain?",
      options: [
        "Profit from selling an asset for more than its purchase price",
        "Loss from selling an asset",
        "A dividend payment",
        "A loan amount",
      ],
      answer: "Profit from selling an asset for more than its purchase price",
    },
    {
      question: "What is a capital loss?",
      options: [
        "Loss from selling an asset for less than its purchase price",
        "Profit from selling an asset",
        "A dividend increase",
        "A stock split",
      ],
      answer: "Loss from selling an asset for less than its purchase price",
    },
    {
      question: "What is a balance sheet?",
      options: [
        "A financial statement showing assets, liabilities, and equity",
        "A stock market report",
        "A profit statement",
        "A tax document",
      ],
      answer: "A financial statement showing assets, liabilities, and equity",
    },
    {
      question: "What is an income statement?",
      options: [
        "A report of a company’s revenues and expenses",
        "A balance sheet",
        "A stock price list",
        "A tax return",
      ],
      answer: "A report of a company’s revenues and expenses",
    },
    {
      question: "What is a cash flow statement?",
      options: [
        "A report of cash inflows and outflows",
        "A stock market index",
        "A profit margin",
        "A dividend schedule",
      ],
      answer: "A report of cash inflows and outflows",
    },
    {
      question: "What is a P/E ratio?",
      options: [
        "Price-to-Earnings ratio",
        "Profit-to-Equity ratio",
        "Price-to-Expense ratio",
        "Profit-to-Earnings ratio",
      ],
      answer: "Price-to-Earnings ratio",
    },
    {
      question: "What is a leverage ratio?",
      options: [
        "A measure of a company’s debt relative to its equity",
        "A stock price ratio",
        "A dividend yield",
        "A profit margin",
      ],
      answer: "A measure of a company’s debt relative to its equity",
    },
    {
      question: "What is a liquidity ratio?",
      options: [
        "A measure of a company’s ability to pay short-term obligations",
        "A stock market index",
        "A profit ratio",
        "A debt ratio",
      ],
      answer: "A measure of a company’s ability to pay short-term obligations",
    },
    {
      question: "What is a yield curve?",
      options: [
        "A graph showing interest rates over different maturities",
        "A stock price chart",
        "A dividend trend",
        "A profit curve",
      ],
      answer: "A graph showing interest rates over different maturities",
    },
    {
      question: "What is a futures contract?",
      options: [
        "An agreement to buy or sell an asset at a future date",
        "A stock option",
        "A bond payment",
        "A savings plan",
      ],
      answer: "An agreement to buy or sell an asset at a future date",
    },
    {
      question: "What is a stop-loss order?",
      options: [
        "An order to sell a stock when it reaches a certain price",
        "An order to buy a stock",
        "A limit order",
        "A market order",
      ],
      answer: "An order to sell a stock when it reaches a certain price",
    },
    {
      question: "What is a market capitalization?",
      options: [
        "The total value of a company’s outstanding shares",
        "The profit of a company",
        "The debt of a company",
        "The revenue of a company",
      ],
      answer: "The total value of a company’s outstanding shares",
    },
    {
      question: "What is a stock exchange?",
      options: [
        "A marketplace where securities are traded",
        "A bank vault",
        "A government office",
        "A type of bond",
      ],
      answer: "A marketplace where securities are traded",
    },
    {
      question: "What is an initial margin?",
      options: [
        "The minimum amount required to open a leveraged position",
        "A stock dividend",
        "A loan payment",
        "A profit margin",
      ],
      answer: "The minimum amount required to open a leveraged position",
    },
    {
      question: "What is a reverse stock split?",
      options: [
        "Reducing the number of shares to increase the price per share",
        "Increasing the number of shares",
        "Selling all shares",
        "Buying more shares",
      ],
      answer: "Reducing the number of shares to increase the price per share",
    },
    {
      question: "What is a tender offer?",
      options: [
        "A public offer to buy shares of a company",
        "A stock split",
        "A dividend payment",
        "A loan offer",
      ],
      answer: "A public offer to buy shares of a company",
    },
    {
      question: "What is a poison pill?",
      options: [
        "A defense strategy to prevent a hostile takeover",
        "A type of stock",
        "A dividend plan",
        "A bond strategy",
      ],
      answer: "A defense strategy to prevent a hostile takeover",
    },
    {
      question: "What is a golden parachute?",
      options: [
        "A large severance package for executives",
        "A stock option",
        "A retirement plan",
        "A takeover strategy",
      ],
      answer: "A large severance package for executives",
    },
    {
      question: "What is a white knight?",
      options: [
        "A friendly company that helps prevent a hostile takeover",
        "A stock investor",
        "A government regulator",
        "A bond issuer",
      ],
      answer: "A friendly company that helps prevent a hostile takeover",
    },
    {
      question: "What is a venture capital?",
      options: [
        "Funding provided to startups with high growth potential",
        "A type of bond",
        "A government loan",
        "A savings plan",
      ],
      answer: "Funding provided to startups with high growth potential",
    },
    {
      question: "What is a private equity?",
      options: [
        "Investment in private companies",
        "Investment in public stocks",
        "A type of bond",
        "A government fund",
      ],
      answer: "Investment in private companies",
    },
    {
      question: "What is a discount rate?",
      options: [
        "The interest rate used in discounted cash flow analysis",
        "A stock price",
        "A dividend rate",
        "A bond yield",
      ],
      answer: "The interest rate used in discounted cash flow analysis",
    },
    {
      question: "What is a time value of money?",
      options: [
        "The concept that money available now is worth more than the same sum in the future",
        "A stock price trend",
        "A dividend policy",
        "A bond valuation",
      ],
      answer:
        "The concept that money available now is worth more than the same sum in the future",
    },
    {
      question: "What is a present value?",
      options: [
        "The current worth of a future sum of money",
        "A stock price",
        "A dividend payment",
        "A bond yield",
      ],
      answer: "The current worth of a future sum of money",
    },
    {
      question: "What is a future value?",
      options: [
        "The value of an asset at a specific date in the future",
        "A stock price",
        "A dividend payment",
        "A bond yield",
      ],
      answer: "The value of an asset at a specific date in the future",
    },
    {
      question: "What is a perpetuity?",
      options: [
        "A stream of cash flows that continues forever",
        "A stock option",
        "A bond payment",
        "A loan agreement",
      ],
      answer: "A stream of cash flows that continues forever",
    },
    {
      question: "What is an annuity?",
      options: [
        "A series of payments made at equal intervals",
        "A stock price",
        "A dividend payment",
        "A bond yield",
      ],
      answer: "A series of payments made at equal intervals",
    },
    {
      question: "What is a sinking fund?",
      options: [
        "A fund created to pay off a debt or liability",
        "A stock investment",
        "A bond fund",
        "A loan fund",
      ],
      answer: "A fund created to pay off a debt or liability",
    },
    {
      question: "What is a zero-coupon bond?",
      options: [
        "A bond that makes no periodic interest payments",
        "A high-yield bond",
        "A government bond",
        "A savings bond",
      ],
      answer: "A bond that makes no periodic interest payments",
    },
    {
      question: "What is a callable bond?",
      options: [
        "A bond that can be redeemed by the issuer before maturity",
        "A convertible bond",
        "A zero-coupon bond",
        "A junk bond",
      ],
      answer: "A bond that can be redeemed by the issuer before maturity",
    },
    {
      question: "What is a puttable bond?",
      options: [
        "A bond that can be redeemed by the bondholder before maturity",
        "A callable bond",
        "A zero-coupon bond",
        "A junk bond",
      ],
      answer: "A bond that can be redeemed by the bondholder before maturity",
    },
    {
      question: "What is a debenture?",
      options: [
        "An unsecured debt, backed only by the issuer’s creditworthiness",
        "A secured bond",
        "A government bond",
        "A savings bond",
      ],
      answer: "An unsecured debt, backed only by the issuer’s creditworthiness",
    },
    {
      question: "What is a secured bond?",
      options: [
        "A bond backed by specific assets as collateral",
        "An unsecured bond",
        "A government bond",
        "A savings bond",
      ],
      answer: "A bond backed by specific assets as collateral",
    },
    {
      question: "What is a junk bond?",
      options: [
        "A high-yield, high-risk bond",
        "A government bond",
        "A blue-chip stock",
        "A savings bond",
      ],
      answer: "A high-yield, high-risk bond",
    },
    {
      question: "What is a treasury bill?",
      options: [
        "A short-term debt obligation issued by the U.S. government",
        "A corporate bond",
        "A municipal bond",
        "A junk bond",
      ],
      answer: "A short-term debt obligation issued by the U.S. government",
    },
    {
      question: "What is a municipal bond?",
      options: [
        "A debt security issued by a state, city, or county",
        "A corporate bond",
        "A treasury bill",
        "A junk bond",
      ],
      answer: "A debt security issued by a state, city, or county",
    },
    {
      question: "What is a corporate bond?",
      options: [
        "A debt security issued by a corporation",
        "A treasury bill",
        "A municipal bond",
        "A junk bond",
      ],
      answer: "A debt security issued by a corporation",
    },
    {
      question: "What is a yield to maturity?",
      options: [
        "The total return anticipated on a bond if held until it matures",
        "A stock price",
        "A dividend yield",
        "A profit margin",
      ],
      answer: "The total return anticipated on a bond if held until it matures",
    },
    {
      question: "What is a credit spread?",
      options: [
        "The difference in yield between a corporate bond and a treasury bond",
        "A stock price difference",
        "A dividend difference",
        "A profit margin difference",
      ],
      answer:
        "The difference in yield between a corporate bond and a treasury bond",
    },
    {
      question: "What is a duration?",
      options: [
        "A measure of a bond's price sensitivity to interest rate changes",
        "A stock price volatility",
        "A dividend stability",
        "A profit margin variability",
      ],
      answer:
        "A measure of a bond's price sensitivity to interest rate changes",
    },
    {
      question: "What is a convexity?",
      options: [
        "A measure of the curvature in the relationship between bond prices and yields",
        "A stock price trend",
        "A dividend trend",
        "A profit trend",
      ],
      answer:
        "A measure of the curvature in the relationship between bond prices and yields",
    },
  ],
  hard: [
    {
      question: "What is the debt snowball method?",
      options: [
        "Paying off debts from smallest to largest",
        "Borrowing more to pay off debts",
        "Investing all in one stock",
        "Consolidating all debts",
      ],
      answer: "Paying off debts from smallest to largest",
    },
    {
      question: "What is working capital?",
      options: [
        "The difference between current assets and liabilities",
        "The total value of shares",
        "The annual profit",
        "The cost of running a business",
      ],
      answer: "The difference between current assets and liabilities",
    },
    {
      question: "What is value investing?",
      options: [
        "Picking undervalued stocks based on fundamental analysis",
        "Investing in high-growth stocks",
        "Buying stocks at peak price",
        "Investing in bonds",
      ],
      answer: "Picking undervalued stocks based on fundamental analysis",
    },
    {
      question: "What is a hedge fund’s main strategy?",
      options: [
        "Using leverage and derivatives to maximize returns",
        "Buying only blue-chip stocks",
        "Investing in savings accounts",
        "Issuing bonds",
      ],
      answer: "Using leverage and derivatives to maximize returns",
    },
    {
      question: "What is the Black-Scholes model used for?",
      options: [
        "Pricing stock options",
        "Calculating dividends",
        "Measuring market cap",
        "Assessing bond yields",
      ],
      answer: "Pricing stock options",
    },
    {
      question: "What is a credit default swap?",
      options: [
        "A financial derivative to protect against default risk",
        "A type of stock",
        "A government bond",
        "A savings plan",
      ],
      answer: "A financial derivative to protect against default risk",
    },
    {
      question: "What is quantitative easing?",
      options: [
        "A central bank buying assets to inject money into the economy",
        "A stock market strategy",
        "A tax reduction plan",
        "A bond issuance",
      ],
      answer: "A central bank buying assets to inject money into the economy",
    },
    {
      question: "What is the efficient market hypothesis?",
      options: [
        "The theory that stock prices reflect all available information",
        "The idea that markets are always inefficient",
        "A strategy for buying stocks",
        "A bond pricing model",
      ],
      answer: "The theory that stock prices reflect all available information",
    },
    {
      question: "What is a leveraged buyout?",
      options: [
        "Acquiring a company using borrowed funds",
        "Buying stocks with cash",
        "Selling company assets",
        "Issuing new shares",
      ],
      answer: "Acquiring a company using borrowed funds",
    },
    {
      question: "What is a beta coefficient?",
      options: [
        "A measure of a stock’s volatility relative to the market",
        "A stock’s dividend yield",
        "A company’s profit margin",
        "A bond’s interest rate",
      ],
      answer: "A measure of a stock’s volatility relative to the market",
    },
    {
      question: "What is the Sharpe ratio?",
      options: [
        "A measure of risk-adjusted return",
        "A stock price index",
        "A dividend yield",
        "A market cap ratio",
      ],
      answer: "A measure of risk-adjusted return",
    },
    {
      question: "What is a collateralized debt obligation?",
      options: [
        "A structured financial product backed by debt",
        "A type of stock",
        "A government bond",
        "A savings plan",
      ],
      answer: "A structured financial product backed by debt",
    },
    {
      question: "What is a repurchase agreement?",
      options: [
        "A short-term borrowing using securities as collateral",
        "A stock purchase plan",
        "A dividend payment",
        "A loan agreement",
      ],
      answer: "A short-term borrowing using securities as collateral",
    },
    {
      question: "What is a Monte Carlo simulation?",
      options: [
        "A method to model financial outcomes with random variables",
        "A stock pricing model",
        "A dividend calculation",
        "A bond yield analysis",
      ],
      answer: "A method to model financial outcomes with random variables",
    },
    {
      question: "What is a forward contract?",
      options: [
        "A customized agreement to buy or sell an asset at a future date",
        "A stock option",
        "A bond payment",
        "A market order",
      ],
      answer: "A customized agreement to buy or sell an asset at a future date",
    },
    {
      question: "What is a straddle in options trading?",
      options: [
        "A strategy involving both a call and a put option",
        "A single stock purchase",
        "A bond investment",
        "A market index",
      ],
      answer: "A strategy involving both a call and a put option",
    },
    {
      question: "What is a carry trade?",
      options: [
        "Borrowing at low interest to invest at higher rates",
        "Selling all stocks",
        "Buying government bonds",
        "Investing in real estate",
      ],
      answer: "Borrowing at low interest to invest at higher rates",
    },
    {
      question: "What is a volatility index?",
      options: [
        "A measure of market expectations of near-term volatility",
        "A stock price",
        "A dividend yield",
        "A bond rate",
      ],
      answer: "A measure of market expectations of near-term volatility",
    },
    {
      question: "What is a junk bond?",
      options: [
        "A high-yield, high-risk bond",
        "A government bond",
        "A blue-chip stock",
        "A savings bond",
      ],
      answer: "A high-yield, high-risk bond",
    },
    {
      question: "What is a tax lien?",
      options: [
        "A legal claim by the government on a property for unpaid taxes",
        "A stock dividend",
        "A bond payment",
        "A loan agreement",
      ],
      answer: "A legal claim by the government on a property for unpaid taxes",
    },
    {
      question: "What is a fiduciary?",
      options: [
        "A person entrusted to manage assets for another",
        "A stock trader",
        "A bank manager",
        "A government official",
      ],
      answer: "A person entrusted to manage assets for another",
    },
    {
      question: "What is a REIT?",
      options: [
        "Real Estate Investment Trust",
        "Retirement Equity Investment Trust",
        "Real Estate Income Tax",
        "Retirement Equity Income Trust",
      ],
      answer: "Real Estate Investment Trust",
    },
    {
      question: "What is a swap?",
      options: [
        "A derivative contract to exchange cash flows",
        "A stock trade",
        "A bond issuance",
        "A loan agreement",
      ],
      answer: "A derivative contract to exchange cash flows",
    },
    {
      question: "What is a arbitrage?",
      options: [
        "Taking advantage of price differences in different markets",
        "Buying and holding stocks",
        "Selling all assets",
        "Investing in bonds",
      ],
      answer: "Taking advantage of price differences in different markets",
    },
    {
      question: "What is a naked option?",
      options: [
        "An option sold without owning the underlying asset",
        "A covered call",
        "A stock dividend",
        "A bond payment",
      ],
      answer: "An option sold without owning the underlying asset",
    },
    {
      question: "What is a covered call?",
      options: [
        "An option strategy where the seller owns the underlying stock",
        "A naked option",
        "A stock split",
        "A bond yield",
      ],
      answer: "An option strategy where the seller owns the underlying stock",
    },
    {
      question: "What is a margin call?",
      options: [
        "A demand to add funds to a margin account",
        "A stock dividend",
        "A bond payment",
        "A profit margin",
      ],
      answer: "A demand to add funds to a margin account",
    },
    {
      question: "What is a preferred stock?",
      options: [
        "A type of stock with priority over common stock for dividends",
        "A common stock",
        "A bond",
        "A mutual fund",
      ],
      answer: "A type of stock with priority over common stock for dividends",
    },
    {
      question: "What is a convertible bond?",
      options: [
        "A bond that can be converted into stock",
        "A fixed-rate bond",
        "A government bond",
        "A savings bond",
      ],
      answer: "A bond that can be converted into stock",
    },
    {
      question: "What is a distressed security?",
      options: [
        "A security issued by a company in financial difficulty",
        "A blue-chip stock",
        "A government bond",
        "A mutual fund",
      ],
      answer: "A security issued by a company in financial difficulty",
    },
  ],
};

export default financeQuestions;
