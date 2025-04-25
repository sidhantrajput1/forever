import User from "../models/userModel.js"


// add product to user cart
const addToCart = async (req, res) => {
    try {
        const {userId, itemId, size} = req.body
        
        const userData = await User.findById(userId)
        let cartData = await userData.cartData
        
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// update user cart
const updateCart = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// get user cart data
const getUserCart = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

export {addToCart, updateCart, getUserCart}