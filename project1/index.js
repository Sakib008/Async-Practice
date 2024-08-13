const output = document.querySelector('.output');
const title = document.querySelector('.title');
title.setAttribute('style', 'text-align  : center; font-size : 2rem; font-family : arial;font-weight : 700; background-color : #B51B75; padding : 1rem; margin : 2rem')
title.style.color = '#E6FF94';



const fakeFetch = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url === 'https://example.com/post/comments'){
                resolve({
                    status : 200,
                    message: 'Success',
                    data : [
                        {email : 'xyz@gmail.com',commentBody : 'Well done keep it up'},
                        {email : 'hello@outlook.com',commentBody : 'Good going a lot to learn from you awesome'},
                        {email : 'ram99@gmail.com',commentBody : 'Anyone from vadodara here'}
                    ]
                });
            }else{
                reject({status : 404,message : 'No Commentes Found'});
            }
        },2000)
        
    })
}
