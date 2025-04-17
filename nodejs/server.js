/*console.log("Hello Makkale")
//importing module
const os=require('os')
const path=require('path')
//importing math file
const math=require('./math')
// directly destructure
// const {add,sub,div,mul}=require('./math')
// console.log(add(3,3))

console.log(os.type())
console.log(os.homedir())
console.log(os.version())
console.log(__filename)
console.log(__dirname)
console.log(path.parse(__filename))
//extension name
console.log(path.extname(__filename))
//basename
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(math.add(3,3))
console.log(math.sub(3,3))
console.log(math.div(3,3))
console.log(math.mul(3,3))
 
//read file
const fs=require('fs')
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
//write file

fs.writeFile(path.join(__dirname,'files','sub.txt'),'hi makkle subsribe to pooja channel', (err) => {
    if (err) throw err;
    console.log("write complete")
    fs.appendFile(path.join(__dirname,'files','sub.txt'),'\n\n Thankyou for subscribing', (err) => {
        if (err) throw err;
        console.log("append complete")
        fs.rename(path.join(__dirname,'files','sub.txt'),path.join(__dirname,'files','rename.txt'), (err) => {
            if (err) throw err;
            console.log("rename complete");
          })
      })
  })
//catching exception
  process.on('uncaughtException',err=>{
    console.error(  `there was an uncaught error: ${err}`)
    process.exit(1)
})
//using append can create new file,so if you want to append inside write file do that
fs.appendFile(path.join(__dirname,'files','s.txt'),'\n\n Thankyou for subscribing', (err) => {
    if (err) throw err;
    console.log("append complete");
  }) */

    const path=require( 'path')
    const fs=require('fs').promises
    //creating func (clean code)
    const fileops=async()=>{
        try{
            const data=await fs.readFile(path.join(__dirname,'files','s.txt'),'utf8' )
                console.log(data)
              // unlink used for deleting the file
            await fs.unlink(path.join(__dirname,'files','s.txt'))
        }
        catch(err){
             console.error(err)
        }

    }
    fileops()