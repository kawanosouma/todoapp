// 1件のデータ削除処理

const mysql = require("mysql2/promise");
const config = require("../../config.js");

deleteTasksId = async function (id) {
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        // ここにsql

        const sql = "DELETE from t_task WHERE id = ?;";

            
        let d = [id];
        const [rows,fields] = await connection.query(sql, d);
        console.log(248);
        console.log(rows);
        return rows;
    } catch (err){
        console.log(err);
    } finally {
        connection.end();
    }

};

exports.deleteTasksId = deleteTasksId;
