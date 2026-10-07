const express=require("express");

const router=express.Router();

const authMiddleware=require("../middleware/auth.middleware");

const {
    predict
}=require("../controllers/prediction.controller");

router.post(
    "/",
    authMiddleware,
    predict
);

module.exports=router;