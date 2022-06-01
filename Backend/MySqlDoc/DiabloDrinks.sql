SELECT * FROM category;
SELECT * FROM item;
SELECT * FROM itemprice;
SELECT * FROM user;
SELECT * FROM userrating;

# Create Category
  INSERT INTO category
    (id,CategoryName)
    VALUES
    (?,?);

#getcategorys
  SELECT * FROM category;

#getcategoryByName
SELECT * FROM category WHERE CategoryName = ?;

#updatecategorys
UPDATE category SET
   CategoryName = ?
WHERE id = ?;

#deletecategorys
DELETE FROM category WHERE id = ?,

#Create users
INSERT INTO user
  (FirstName,LastName,Email,PhoneNumber,Permission)
  VALUES
  (?,?,?,?,?,?);

#GetUserByUserEmail
SELECT * FROM user WHERE email = ?;

#GetUsers
SELECT * FROM user;

#GetUsersById
SELECT * FROM user WHERE id = ?;

#UpdateUser
UPDATE user SET
  FirstName= ?, LastName = ?, Email = ?,PhoneNumber = ?,Permission
  WHERE id = ?;

#deleteUser
DELETE FROM user WHERE id = ?;

#createUserRating
INSERT INTO userrating
  (UserId,Comment,Rating,ItemId)
  VALUES
  (?,?,?,?);

#GetUserRating
  SELECT * FROM userrating;

#getUserRatingByUserId
SELECT * FROM userrating
  WHERE userId = ?;

#getUserRatingByItemId
  SELECT * FROM userrating
    WHERE itemId = ?;

#updateUserRating
UPDATE userrating SET
  UserId = ?, Comment = ?, Rating = ?, ItemId = ?
WHERE id = ?;

#deleteUserRating
DELETE FROM userrating WHERE id = ?;

#CreateItems
INSERT INTO item
(CategoryId,ItemName,Image,Unit,Alcoholcontent,Brand)
  VALUES
  (?,?,?,?,?,?);

#GetItem
SELECT * FROM item;

#GetitemsById
SELECT * FROM item
  WHERE id = ?;

#updateItems
UPDATE item set
  CategoryId = 1, ItemName = 'árpád alma pálinka', Image = 'https://www.google.com/search?q=%C3%A1rp%C3%A1d+alma+p%C3%A1linka&hl=hu&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz_4u1obb2AhWQyqQKHebKBWcQ_AUoAXoECAEQAw&biw=1920&bih=979&dpr=1#imgrc=vRdWbTfQ_OAhSM', Unit = '0.5L',AlcoholContent = 40,Brand = 'Árpád Pálinka'
WHERE id = 6;

#deleteItems
DELETE FROM item WHERE id = ?;

#createItemPrices
INSERT INTO itemprice
  (ItemId,Date,Price)
  VALUES
  (?,?,?);

#getItemPrice
SELECT * FROM itemprice;

#getItemPriceById
SELECT * FROM itemprice WHERE id = ?;

#updateItemPrices
UPDATE itemprice SET
  ItemId = ?, Date = ?, Price = ?
WHERE id = ?;

#deleteItemPrices
DELETE FROM itemprice WHERE id = ?;

