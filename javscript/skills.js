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
// fetch("https://fakestoreapi.com/products?limit=5")
//   .then((res) => res.json())
//   .then((json) => product(json));

// function product(params) {
//     console.log('1')
//     debugger
//   console.log(params);
//   console.log('2')
// }

// var a = 'alo'
// var a =1
// console.log(a)
// var a =[1,2,3]
// var a =[12,3,6,8]
// console.log(a)

// // destructiring

// const scorer = {
//   surname: "zaidi",
//   born: "1900",
//   heigh: "50",
// };

// const { born } = scorer;
// console.log(born);

// how to swap two variable

// let  a = "ali";
// let  b = "raza";
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// const names = ["Alex", "Bob", "Johny", "Atta"]
// // const obj = Object.fromEntries(names)

// console.log(Object.fromEntries(names))
// console.log(obj)
// const obj =(JSON.parse(Object.assign({}, names)))

// console.log(JSON.stringify(obj))
// var obj = { "name":"John", "age":30, "city":"New York"};
// var myJSON = JSON.stringify(obj);
// console.log(myJSON)
// console.log(JSON.parse(myJSON))

// const numbers=[1,3,4,5]
// numbers.length=numbers.length-1
// console.log(numbers)

// const numbers = [1,2,3,4,5]
// const newnumb=numbers.splice(0,2)
// console.log(newnumb)
// console.log(numbers)

// const numb = [2,3,4,5]
// const newnumb= numb.splice(0,numb.length-1)
// console.log(newnumb)
// console.log(numb)

// const arr=[5,20,25]
// // console.log(arr)

// const newarr=Object.assign(arr,{})
// console.log(newarr)

// let widget =
//    [ 'color', 'red']

// let clonedWidget = Object.assign({},widget);

// console.log(clonedWidget[0]);

// const arr=['name','days']
// const arrnew = ['ali','365']
// const ali= arrnew.map((value,i)=>({ [keys[i]]:value}));
// console.log(ali)

// const output = [ 'John', 'Jane' ].map(name => ({name}));
// console.log(output);

// var a = b =1
// console.log(a)
// console.log(b)

// Object Destructure
// const obj1 = {
//   username: "aliraza",
//   hobbies: ["cricket", "football", "xyz"],
//   education: {
//     bechlor: "bsc",
//     specialist: "master",
//     ssc: "fsc",
//   },
// };
// const { hobbibes } = obj1;
// console.log(hobbibes['1']);
// console.log(obj1.username);
// const { hobbibes = "newin", id = 32,olddata } = obj1;
// console.log(olddata);
// const {
//   username,
//   hobbies: activity = [],
//   education: { ssc },
// } = obj1;
// console.log(ssc);
// var objArr = [
//   {
//     name: "john",
//     age: 12,
//     gender: "male",
//   },
//   {
//     name: "jane",
//     age: 15,
//     gender: "female",
//   },
// ];
// for (const {age} of objArr) {
  
//   console.log(age);
// }


// const person ={
//     name :'aliraza',
//     year:'1900'
// }
// function objFunction({name}) {
//     console.log(`hi this is raza ${name}`)
// }
// objFunction(person)

// const trimstr='ali_raza '
// console.log(trimstr.trimEnd())

// const reverstr='raza is here'
// console.log(reverstr.indexOf(""))
// console.log(reverstr.split('').reverse('').join(''))
// for (let index = 0; index < reverstr.length; index++) {
//     const element = reverstr[index];
//     // console.log(element,"element")
//     if(indexOf(element)===-1){
//         console.log('first')
//     }
// }

//  const str='hi this is raza'
// // console.log(str.indexOf(' '))
// for (let index = 0; index < str.length; index++) {
//     const mystr = str[0];
//     console.log(mystr)
    
// }


// program to reverse a string

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }



// const result = reverseString('hi this is raza ');
// console.log(result);

// const strmy='hi this is raza'

// const newstr=strmy.split(' ').map((data)=>(data.split('').reverse().join('')))
// console.log(newstr.join(' '))

// const checkarray=[]
// const checkobj={}

// console.log(Array.isArray(checkobj))
// console.log(Array.isArray(checkarray))
// const emtyarray=[3,4,5,8]
// // emtyarray.length=0
// emtyarray.pop()
// console.log(emtyarray.length)

// const numberMy='str'
// console.log(isNaN(numberMy))
// const numb=12
// // console.log(isNaN(numb))
// console.log(Number.isInteger(numb))

// const arr=[1,2,3,4,5]
// console.log(arr.concat(arr))
// const varStr=
// 'harsh'

// console.log(varStr.split('').sort().join(''))

const str='javascript'
console.log(str.slice(0,1).toUpperCase()+str.slice(1))