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


//  Wriiting functions according to blocking and Non blocking I/O module

//blocking:
console.log('this is a blocking function')
const blocking = fs.writeFileSync('datasync.txt','hi I am areeba kabir')
console.log('file written successfully')

//non-blocking :
console.log('this is non blocking')
fs.writeFile('dataasync.txt','I am Areeba Kabir from Siftware Engineering.',(err,res)=>{
    console.log("data written successfully!")
})
console.log('non-blocking is done!')
