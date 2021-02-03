const express = require('express');
const app = express(); 
const uuid  = require('uuid');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId:'',
    secreteAcceessKey:''
})

const port = process.env.PORT | 3000;
app.get('/upload',async(req,res)=>{
;const key = `${req.user.id}/${uuid()}.jpeg`;
    s3.getSignedUrl('putObject',{
        Bucket:'',
        ContentType:'',
        Key:''
    })
    res.send('file submited')
})

app.listen(`${port}`,()=>{
    console.log(`listening on port ${[port]}`)
});