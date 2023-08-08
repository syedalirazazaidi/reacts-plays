// unlimited argument is Arrow & Regular functions//////

// function b(...x) {
//   console.log(x);
// }
// b(1, 2, 3, 4, 5);

// const a = (...x) => console.log(x);
// a(1, 2, 3);

// get current urls//////

// let _ = location.href
// console.log(_)

// javascript quick tip checking a value is a number

// isNaN() returns true if a value is NaN:
// const text = 'text'
// const numb = 2
// if(isNaN(text)){
//     console.log(text)
// }
// else{
//     console.log(text,"isNaN")
// }

// merge two array
// const arr1= [3,4,5]
// const arr2=[5,6,7]
// console.log(arr1.ass)

// let ,const ,var  usages

// var a = 1 ;a=2

// console.log(a)

// javascript debugger keyword
fetch("https://fakestoreapi.com/products?limit=5")
  .then((res) => res.json())
  .then((json) => product(json));

function product(params) {
    console.log('1')
    debugger
  console.log(params);
  console.log('2')
}
