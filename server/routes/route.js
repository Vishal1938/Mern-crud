const express=require('express');
const {signupUser,loginUser,logoutUser}=require('../controller/user-controller');

const router=express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);
router.post('logout',logoutUser);

