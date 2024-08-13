
const delayLoop =(number)=>{
    for(let a = 1;a<=number;a++){
        setTimeout(()=>console.log('hello'),a*1000)
    }
}
// delayLoop(3)


const strLength = (name,cb)=>cb(name.length);
// strLength('Tanay',(n)=>console.log(`Omg ! my name is ${n} char long!`))

const willThanosKillMe=(name,cb1,cb2)=> name.length %2 === 0 ? cb1() : cb2();
// willThanosKillMe('Md Sakib',()=>console.log('yeh! I am alive!'),()=>console.log('Give my bose speakers and apple headphones to my sister'))


// function fakeFetch(msg, shouldReject){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(shouldReject){
//                 reject(`error from server : ${msg}`)
//             }
//             resolve(`from Server : ${msg}`)
//         }, 3000);
//     })
// }

// fakeFetch('My day is very Good',true)
// .then(data=>console.log(data))
// .catch(error=>console.error(error))


// const fakeFetch = (url)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(url= 'https://example.com/api/itemlist'){
//                 resolve({
//                     status : 200,
//                     message : 'Success',
//                     data : [
//                         {itemName : 'Bread', price : 30, quantity : 10},
//                         {itemName : 'Water Bottle', price : 50, quantity : 50},
//                         {itemName : 'Dairy Milk', price : 20, quantity : 30}
//                     ]
//                 });
//             }else{
//                 reject({
//                     status : 404,
//                     message : 'Items list not found.'
//                 })
//             }
//         }, 2000);
//     })
// }