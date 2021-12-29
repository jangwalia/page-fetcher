const request = require('request');
const fs = require('fs');
const readline = require('readline');
const args = process.argv;
const host = args[2];
const local = args[3];
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});
const pagefetcher = (add1,add2)=>{
  request(add1,(error,response,body)=>{
   console.log('error: ', error);
   console.log('response: ', response && response.statusCode);
   const bytes = response.headers["content-length"];
   const data = body;
   //if file exits
   fs.access(add2,(err)=>{
     rl.question("this file already exits..press y to overwrite..",(key)=>{
       if(key === '\u0059'){
        fs.writeFile('./index.html', data, (err) => {
          if (err) throw err;
          console.log(`Download and saved ${bytes} to ${add2}`);
          process.exit();
          return;
        });
        
       }
       else{
         process.exit();
       }
       rl.close();
     });
   })
   
  })
}

pagefetcher(host,local);