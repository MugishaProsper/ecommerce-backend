import User from "../models/user.models.js";

export const updateProfile = async (req, res) => {
  const { id } = req.user;
  const { username, email } = req.body;
  try {
    const user = await User.findById(id).select("-password").select("-fullName");
    if(!user){
      return res.status(404).json({ message : "User not found" });
    }
    const updates_exist = await User.findOne({ $or : [{username}, {email} ]});
    if(updates_exist){
      return res.status(403).json({ message : "Username or email already exists" });
    }
    if(username || email){
      user.username = username ? username : user.username;
      user.email = email ? email : user.email;
    }
    await user.save();
    return res.status(200).json({ message : "updated", user })
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Server error" });
  }
};

export const deleteAccount = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findOne(id);
    if(!user){
      return res.status(404).json({ message : 'User not found' });
    };
    await user.deleteOne();
    await logout()
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Server error" });
  }
}

export const requestResetPassword = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    if(!user){
      return res.status(404).json({ message : 'User not found' });
    }
    /** Function to send reset codes to email */
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Server error" });
  }
}