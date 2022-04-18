var express = require("express");
const items = require("../../src/items");

var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/items", function (req, res, next) {
  const itemsList = items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

module.exports = router;

router.get("/tasks", async function (req, res, next){
  const getTaks = await taks.getTasks(req.params.id);
  res.send(getTasks);
 });

 router.patch("/tasks", async function (req, res, next){
  const getTaks = await taks.getTasks(req.params.id, req.body);
  res.send(getTasks);
 });
