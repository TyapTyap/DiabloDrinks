const pool = require("../../config/database.js");
const {
    genSaltSync, //(sózza a jelszót és összefűzi a generált titkos hessel)
    hashSync, //(jelszó hesselése)
    compareSync
} = require("bcrypt");

module.exports = {
    create: (data, callBack) => {
        let queryString = `INSERT INTO user
        (FirstName,LastName,Email,Password,PhoneNumber,Permission)
        VALUES
        (?,?,?,?,?,?)
        `
        // let params = Object.values(data);
        let params= [
            data.FirstName,
            data.LastName,
            data.Email,
            data.Password,
            data.PhoneNumber,
            data.Permisson
        ];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createCategory: (data, callBack) => {
        let queryString = `INSERT INTO category
        (CategoryName)
        VALUES
        (?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createItems: (data, callBack) => {
        let queryString = `INSERT INTO item
        (CategoryId,ItemName,Image,Unit,AlcoholContent,Brand)
          VALUES
          (?,?,?,?,?,?)
        `
        let params = [
            data.CategoryId,
            data.ItemName,
            data.Image,
            data.Unit,
            data.AlcoholContent,
            data.Brand
        ]
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createitemPrices: (data, callBack) => {
        let queryString = `INSERT INTO itemprice
        (itemId,Date,price)
        VALUES
        (?,?,?)
        `
        let params = [
            data.ItemId,
            data.Date,
            data.Price
        ]
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createuserrating: (data, callBack) => {
        let queryString = `INSERT INTO userrating
        (userId,comment,rating,itemId)
        VALUES
        (?,?,?,?)
        `
        let params = [
            data.UserId,
            data.Comment,
            data.Rating,
            data.ItemId
        ]
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserEmail: (Email, callBack) => {
        let queryString = `select * from user where Email = ?`;
        let params = [Email];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    getItemPrices: callBack => {
        const queryString = `SELECT * FROM ItemPrice`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUsers: callBack => {
        const queryString = `SELECT * FROM user`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getCategories: callBack => {
        const queryString = `select * from category`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getItems: callBack => {
        const queryString = `select * from item`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getItemById: (id, callBack) => {
        const queryString = `SELECT * FROM item where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getUserByUserId: (id, callBack) => {
        const queryString = `SELECT * FROM user WHERE id = ?`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getCategoryById: (id, callBack) => {
        const queryString = `select * from category where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getItemPriceById: (id, callBack) => {
        const queryString = `SELECT * FROM itemprice WHERE id = ?`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getUserRateing: callBack => {
        const queryString = `select * from userrating`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserRatingById: (id, callBack) => {
        const queryString = `SELECT * FROM userrating where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    updateUser: (data, callBack) => {
        // const queryString = `UPDATE user SET
        // firstName= ?, lastName = ?, gender = ?, email = ?, password = ?,phoneNumber = ?,permission = ?
        // WHERE id = ?`;
        const queryString = `UPDATE user SET
        FirstName= ?, LastName = ?, Password = Password, Email = ?,PhoneNumber = ?,Permission = ?
        WHERE id = ?`;
        // const params =Object.values(data);
        //const salt = genSaltSync(10);
        //const password = hashSync(data.password, salt);
        //console.log(data.password);
        const params = [
            data.FirstName,
            data.LastName,
            data.Email,
            data.Password,
            data.PhoneNumber,
            data.Permisson,
            data.id
        ];
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateCategory: (data, callBack) => {
        const queryString = `UPDATE category SET
        CategoryName = ?
     WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.CategoryName,
            data.id
        ]
        console.log("Update category:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateItem: (data, callBack) => {
        const queryString = `UPDATE item set
        CategoryId = ?, ItemName = ?, Image = ?, Unit = ?,Alcoholcontent = ?,Brand = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.CategoryId,
            data.ItemName,
            data.Image,
            data.Unit,
            data.Alcoholcontent,
            data.Brand,
            data.id
        ]
        console.log("Update category:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateItemPrices: (data, callBack) => {
        const queryString = `UPDATE itemprice SET
        ItemId = ?, Date = ?, Price = ?
      WHERE id = ?;`;
        // const params = Object.values(data);
        const params = [
            data.ItemId,
            data.Date,
            data.Price,
            data.id
        ]
        console.log("Update itemprice:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateUserRating: (data, callBack) => {
        const queryString = `UPDATE userrating SET
        UserId = ?, Comment = ?, Rating = ?, ItemId = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.UserId,
            data.Comment,
            data.Rating,
            data.ItemId,
            data.id
        ]
        console.log("Update userrating:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteUser: (data, callBack) => {
        const queryString = `DELETE FROM user WHERE id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteCategory: (data, callBack) => {
        const queryString = `delete from category where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteItem: (data, callBack) => {
        const queryString = `delete from item where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteItemPrice: (data, callBack) => {
        const queryString = `delete from itemprice where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteUserRating: (data, callBack) => {
        const queryString = `delete from userrating where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
};