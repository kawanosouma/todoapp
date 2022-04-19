var express = require("express");
const tasks = require("../../src/tasks.js");
const create = require("../../src/tasks/create");
var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/tasks", async function (req, res, next) {
  const itemsList =  await tasks.getTasks();
 
  res.send(itemsList); 


});

/*１件の商品情報を取得するルーティング */
router.get("/tasks/:id", function (req, res, next) {
  const item = tasks.getItem(req.params.id);
  res.send(item);
});



router.post("/tasks", async function (req, res, next){
  const postTask = await create.postTask(req.body);
  console.log(postTask);
  res.send(postTask);
 });

 router.patch("/tasks", async function (req, res, next){
  const getTaks = await tasks.getTasks(req.params.id, req.body);
  res.send(getTasks);
 });


 module.exports = router;