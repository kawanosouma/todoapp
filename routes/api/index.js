var express = require("express");
const tasks = require("../../src/tasks.js");
const create = require("../../src/tasks/create");
const update = require("../../src/tasks/update");
const delTask = require("../../src/tasks/delete");
var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/tasks", async function (req, res, next) {
  const itemsList =  await tasks.getTasks();
 
  res.send(itemsList); 


});

/*１件の商品情報を取得するルーティング */
router.get("/tasks/:id", async function (req, res, next) {
  const item = await tasks.getTaskId(req.params.id);
  
  res.send(item);
});


// タスク消去
router.delete("/tasks/:id", async function (req, res, next) {
  const item = await tasks.getTaskId(req.params.id);
  console.log(123);
  console.log(item);
  res.send(item);
});



router.post("/tasks", async function (req, res, next){
  const postTask = await create.postTask(req.body);
  console.log(postTask);
  res.send(postTask);
 });


 //更新api
 router.patch("/tasks/:id", async function (req, res, next){
  const patchTask = await update.patchTask(req.params.id, req.body);
  res.send(patchTask);
 });


 module.exports = router;