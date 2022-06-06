const {
     createUser,
     getUserByUserId,
     getUsers,
     updateUsers,
     deleteUser,
     login,
     createCategory,
     getCategories,
     getCategoryById,
     updateCategory,
     deleteCategory,
     createItems,
     getItems,
     getItemById,
     getItemABC,
     updateItem,
     deleteItem,
     createitemPrices,
     getItemPrices,
     getItemPriceById,
     updateItemPrices,
     deleteItemPrice,
     createuserrating,
     getUserRateing,
     getUserRatingById,
     updateUserRating,
     deleteUserRating,
     getLinksToCard

} = require("./user.controller.js")
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

 router.post("/registration", checkToken, createUser);
 router.get("/users/", checkToken, getUsers);
 router.get("/users/:id", checkToken, getUserByUserId);
 router.put("/users/", checkToken, updateUsers);
 router.delete("/users/", checkToken, deleteUser);
 router.post("/login", login);

router.post("/category", checkToken, createCategory);
router.get("/category", checkToken, getCategories);
router.get("/category:id", checkToken, getCategoryById);
router.put("/category", checkToken, updateCategory);
router.delete("/category", checkToken, deleteCategory);
 
router.post("/items", checkToken, createItems);
router.get("/items", checkToken, getItems);
router.get("/items/:id", checkToken, getItemById);
router.put("/items", checkToken, updateItem);
router.delete("/items", checkToken, deleteItem);

router.post("/itemprices", checkToken, createitemPrices);
router.get("/itemprices", checkToken, getItemPrices);
router.get("/itemprices/:id", checkToken, getItemPriceById);
router.put("/itemprices", checkToken, updateItemPrices);
router.get("/itemABC", checkToken, getItemABC)
router.delete("/itemprices", checkToken, deleteItemPrice);

router.post("/userrating", checkToken, createuserrating);
router.get("/userrating", checkToken, getUserRateing);
router.get("/userrating/:id", checkToken, getUserRatingById);
router.put("/userrating", checkToken, updateUserRating);
router.delete("/userrating", checkToken, deleteUserRating);

router.get("/getlink", checkToken, getLinksToCard);

module.exports = router;