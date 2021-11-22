const {response,request}=require('express');
const userGet = (req=request,res=response)=>{
    res.send('Soy get');
}

const userPost =(req,res)=>{
    res.send('Soy un post');
}

const userPut = (req,res)=>{
    res.send('Soy un put');
}

const userDelete = (req,res)=>{
    const data=req.body;
    res.send('Soy un delete');
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}