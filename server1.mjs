
//here using import so we use.mjs extension
import { readFile } from 'node:fs';

readFile('./files/startt.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

//caught error
process.on('uncaughtException',err=>{
    console.error(  `there was an uncaught error: ${err}`)
    process.exit(1)
})
//run below code in .js 
// const fs=require('fs')
// const path=require('path')
// fs.readFile(path.join(__dirname,'files','start.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }))
  
