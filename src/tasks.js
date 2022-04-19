const mysql = require("mysql2/promise");

const config = require("../config.js");
/**
 * タスク一覧を取得
 * 
 * @returns レスポンス JSON
 */
getTasks = async function () {
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        // ここにsql

        const sql =
       "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.category_id;";
       
        const [rows,fields] = await connection.query(sql);
        
        return rows;
    } catch (err){
        console.log(err);
    } finally {
        connection.end();
    }
};

getTaskId = async function (id) {
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        // ここにsql

        const sql =
       "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.category_id WHERE t_task.id = ?" ;
       
        let d = [id];
        const [rows,fields] = await connection.query(sql, d);
        console.log(rows);
        return rows;
    } catch (err){
        console.log(err);
    } finally {
        connection.end();
    }

};


exports.getTasks = getTasks;
exports.getTaskId = getTaskId;
