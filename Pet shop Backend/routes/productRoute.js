import express from "express";
import { userToken } from "../middlewares/userMiddlewares.js";
import { productGetId,allProducts,userProductByCategory } from "../controllers/productcontroller.js";
import { addToCart, decrementCartItemQuantity, incrementCartItemQuantity, removeCart, viewCart } from "../controllers/cartController.js";
import { addWishlist } from "../controllers/wishlistCotroller.js";
import { OrderDetails, payment, success } from "../controllers/userPaymentController.js";
const router = express.Router();

router.get('/',allProducts);
router.get('/:id',productGetId);
router.get('/category/:categoryname',userProductByCategory);


// add to cart
router.post('/:userId/cart/:id',addToCart);
router.get("/:id/cart",viewCart);
router.patch("/:userid/cart/:id/increment", incrementCartItemQuantity);
router.patch("/:userid/cart/:id/decrement", userToken, decrementCartItemQuantity);
router.delete("/:userId/cart/:itemId/remove", userToken, removeCart);

// add Wishlist
router.post('/:userId/wishlists/:id',userToken,addWishlist);




// payment routes

router.post("/:id/payment", userToken, payment);
router.get("/payment/success", userToken, success);
router.get("/:id/orders", userToken, OrderDetails);
export default router;