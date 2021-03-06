const {
    create,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserEmail,
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
    getLinksToCard,

} = require("./user.service.js");

const {
    genSaltSync, //(sózza a jelszót és összefűzi a generált titkos hessel)
    hashSync, //(jelszó hesselése)
    compareSync
} = require("bcrypt");

const {
    sign
} = require("jsonwebtoken");

module.exports = {
    //#region 
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
        body.Password = hashSync(body.Password, salt);
        create(body, (err, results) => {

            console.log(results);

            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    createCategory: (req, res) => {
        const body = req.body;
        console.log(body);
        createCategory(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created category",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created category",
                data: results
            });
        });
    },
    createItems: (req, res) => {
        const body = req.body;
        console.log(body);
        createItems(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created item",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created item",
                data: results
            });
        });
    },
    createitemPrices: (req, res) => {
        const body = req.body;
        createitemPrices(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created item",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created item",
                data: results
            });
        });
    },
    createuserrating: (req, res) => {
        const body = req.body;
        createuserrating(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created userrating",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created userrating",
                data: results
            });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getCategoryById: (req, res) => {
        const id = req.params.id;
        getCategoryById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getItemPrices: (req, res) => {
        getItemPrices((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getItemPriceById: (req, res) => {
        const id = req.params.id;
        getItemPriceById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getCategories: (req, res) => {
        getCategories((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getItems: (req, res) => {
        getItems((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getItemABC: (req, res) => {
        getItemABC((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getItemById: (req, res) => {
        const id = req.params.id;
        getItemById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUserRateing: (req, res) => {
        getUserRateing((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getUserRatingById: (req, res) => {
        const id = req.params.id;
        getUserRatingById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.Password = hashSync(body.Password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateCategory: (req, res) => {
        const body = req.body;
        updateCategory(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateItemPrices: (req, res) => {
        const body = req.body;
        updateItemPrices(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateItem: (req, res) => {
        const body = req.body;
        updateItem(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateUserRating: (req, res) => {
        const body = req.body;
        updateUserRating(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteCategory: (req, res) => {
        const data = req.body;
        deleteCategory(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteItem: (req, res) => {
        const data = req.body;
        deleteItem(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteItemPrice: (req, res) => {
        const data = req.body;
        deleteItemPrice(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteUserRating: (req, res) => {
        const data = req.body;
        deleteUserRating(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.Email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
            const result = compareSync(body.Password, results.Password);
            if (result) {
                results.Password = undefined;
                const jsontoken = sign({
                    result: results
                }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken,
                    data: results
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
        });
    },
    getLinksToCard: (req, res) => {
        getLinksToCard((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },

    //#endregion
}