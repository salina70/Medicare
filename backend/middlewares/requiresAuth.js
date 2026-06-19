

import jwt from 'jsonwebtoken'
import httpError from 'http-errors'

export const requiresAuth = (req,res,next)=>{
  try{
const token = req.header("authorization");

if(!token || !token.includes("Bearer")){
  res.status(401).send("no token")

}
const [_, key] = token.split(" ");
const decoded = jwt.verify(key, process.env.JWT_SECRET);
req.user(decoded);
next();
  }catch(error){
    next(error)
  }
}