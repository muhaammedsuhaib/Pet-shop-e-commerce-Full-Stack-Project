import User from "../models/authenticationModel.js"
import Products from "../models/productsModel.js";
import Wishlist from "../models/wishlistModel.js";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dvknqcxdc', 
  api_key: '825114872454561', 
  api_secret: 'bRlU3tiASP-RAbLuBtsBxGJUWko' 
});
export const addWishlist = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.id;

    // find user by id
    const user = await User.findById(userId);

    // check user vailid or unvalid
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // find product getbyid
    const product = await Products.findById(productId);

    // check product available or not available
    if (!product) {
      return res.status(404).json({ message: "Product Not Found!" });
    }

    let wishlistItem = await Wishlist.findOne({
      userId: user._id,
      productId: product._id,
    });
    if (wishlistItem) {
      return res
        .status(400).json({ message: "Product already exists in the wishlist" });
    }

    // Create a new wishlist item
    wishlistItem = await Wishlist.create({
      userId: user._id,
      productId: product._id,
      quantity: 1,
    });

    // Add product to user's wishlist
    user.wishlist.push(wishlistItem._id);
    await user.save();

    return res
      .status(200).json({ message: "Product added to wishlist successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Server error" });
    next(error);
  }
};
