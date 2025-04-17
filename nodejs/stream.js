const fs=require('fs')
const path=require('path')
const rs=fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf8'})
const ws=fs.createWriteStream(path.join(__dirname,'files','new_bigfile.txt'))

//spliting the data as part ,part known as datachunk and write the part in ws file
/*rs.on('data',(dataChunk)=>{
    ws.write(dataChunk)
}) */


//copying rs to ws
    rs.pipe(ws)


