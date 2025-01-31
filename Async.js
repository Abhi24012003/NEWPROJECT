const fs=require('fs').promises;
const ds=async function readFile(){
    try{
        const data=await fs.readFile('abhi.txt','utf8');
            console.log('File content',data);
    }catch(err){
        console.error("error reading file",err)
    }
    
}
console.log(ds());