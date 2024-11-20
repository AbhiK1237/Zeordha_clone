const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;
  
  
  // Check if the token is present
  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Invalid token" });
    }
    
    try {
      // Find the user by ID
      const user = await User.findById(data.id);
      
      if (user) {
        // User verified successfully
        return res.status(200).json({ status: true, user: user.username });
      } else {
        // User not found
        return res.status(404).json({ status: false, message: "User not found" });
      }
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ status: false, message: "Server error" });
    }
  });
};
