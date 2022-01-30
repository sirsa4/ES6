//normal promise
const promise1 = ()=>{
    return new Promise((resolve, reject)=>{
        const url1 = './text.txt';
        const data = fetch(url1)
        if(data){
            resolve(data);
        }else {
            reject(new Error(`Error! Data can't be fetched.`))
        }
    });
}

console.log(promise1());
/* promise1().then((response)=>{
    return response.text();
})
.then((data)=>console.log(data)) */

//with async function. async always returns promise.
const firstAsyncAwait = async ()=>{
       try {
        const response = await promise1();
        const data = await response.text();
        let p = document.querySelector('.async1');
        p.innerHTML = data;
        document.querySelector('.btn1').removeEventListener('click', firstAsyncAwait);
        console.log(data);
       } catch (err) {
           console.error(err);
       }

}

const button1 = (data) =>{
    
}

document.querySelector('.btn1').addEventListener('click', firstAsyncAwait);