/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
//

 async function calculates(num1,num2) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let sum =''
      if (num1<0){
        reject("errror")
      }if ( num2<0) {
        reject("errror")
      }else
       sum = num1+num2
  resolve(sum)
    },500)
  })
}
calculates(-6,8).then((res)=>{console.log(res)}).catch((rej)=>{console.log(rej)})

