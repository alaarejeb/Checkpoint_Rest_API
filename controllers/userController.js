const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const getAllUsers=await User.find()
        res.status(200).json({msg:'get all users',User:getAllUsers})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrogn',error})
    }
};

const addUser = async (req, res) => {
    try {
        const addUser=await User.create(req.body)
        res.status(201).json({msg:'user created',addUser})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrogn',error})
    }
};

const editUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const editUser=await User.findByIdAndUpdate({_id:userId},req.body,{new:true})
    res.status(200).json({msg:'update user',editUser})
} catch (error) {
    res.status(500).json({msg:'somthing went wrong',error})
}
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser=await User.findByIdAndDelete({_id:userId})
    res.status(200).json({msg:'delete user',deleteUser})
} catch (error) {
    res.status(500).json({msg:'somthing went wrong',error})
}
};

module.exports = { getAllUsers, addUser, editUser, deleteUser };
