// 新規登録処理

const mysql = require("mysql2/promise");
const config = require("../../config.js");

/**
 *  タスクを新規登録する API
 * 
 * @returns レスポンス　JSON
 */
postTask = async function (body) {
    let connection = null;
    try {
connection = await mysql.createConnection(config.dbSetting);
// ここにsqlを記述する
const sql = 

        "INSERT INTO todoapp.t_task (task_name, deadline, category_id) VALUES (?,?,?);";
        let d = [body.taskName, body.deadline, body.category];
        const [rows,fields] = await connection.query(sql, d);
        console.log(rows);
        return rows;
    } catch (err){
        console.log(err);
    } finally {
        connection.end();
    }
};

exports.postTask = postTask;
