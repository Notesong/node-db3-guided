const db = require("../data/db-config.js");

function findByUserId(userid) {
  return db("posts") // FROM posts
    .leftJoin("users", "users.id", "posts.user_id") // LEFT JOIN users ON users.id = posts.user_id
    .where("user_id", userid) // WHERE user_id = ?
    .select("posts.id", "posts.contents", "users.username"); // SELECT posts.id, posts.contents, users.username
}

module.exports = {
  findByUserId,
};
