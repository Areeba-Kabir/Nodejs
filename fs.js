const fs = require('fs')

// //synchronous write method
// fs.writeFileSync('datasync.txt',"SYNC: Hi! I am Areeba");

// //Asynchronous write method
// fs.writeFile('dataasync.txt',"ASYNC: Hi I am Areeba Kabir",()=>{
//     console.log("asynchronous function execeuted!")
// })


// //synchronous read method
//  const syncread= fs.readFileSync('datasync.txt','utf-8')
//  console.log('data read: ',syncread)

// //Asynchronous read method
// fs.readFile('dataasync.txt','utf-8',(error,res)=>{
//     if(res){
//         console.log('file has been read! ')
//         console.log('data: ',res);
//     }
//     else{
//         console.log(err)
//     }
// })

// //append file sync
// const syncappend= fs.appendFileSync('datasync.txt','I am a student of sofware engineering' )
// console.log(syncappend)

// //append file Async
// fs.appendFile('dataasync.txt',' My father name is Kabir Ahmed. ',()=>{
//     console.log("file appended successully!")
// })

// //copy file sync
// fs.copyFileSync('datasync.txt','copy.txt')
// console.log('file coped asynchronously')

// //copy file Async
// fs.copyFile('dataasync.txt','copy.txt',()=>{
//     console.log('file copied asynchronously!')
// })


