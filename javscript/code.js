// export NODE_OPTIONS=--openssl-legacy-provider

// export NODE_OPTIONS=--openssl-legacy-provider

// const arr1 = [3, 1, 4, 99]
// let max
// let min
// for (let index = 0; index < arr1.length; index++) {
//   // 0<1=max=3
//   //
//   if (arr1[index] > arr1[index + 1]) {
//     min = arr1[index]
//   }
// }
// console.log(min, 'MIN')
// console.log(max, 'MAX')

// let arr1 = [2, 3, 4, 6]
// let arr3 = [22, 33, 14, 6]
// let newarr1 = [...arr1, ...arr3]

// const arr4 = newarr1.sort((a, b) => {
//   return a - b
// })
// console.log([...new Set(arr4)])

// const arr1 = [4, 5, 6]

// // console.log(arr1)
// // arr1[0] = 14
// // const arr2 = arr1
// // arr2[0] = 144
// // console.log(arr1)
// // console.log(arr2)

// const arr2 = [...arr1]
// arr2[1] = 13
// console.log(arr2)
// console.log(arr1)

// swap a number

// let numb1 = 60
// let numb2 = 50;
// [numb1, numb2] = [numb2, numb1]
// console.log(numb1)
// console.log(numb2)
// const arr1 = [3, 45, 4, 5]
// for (const iterator in arr1) {
//   console.log(iterator)
// }

// const obj2 = {
//   a: 'alir',
//   b: 'razazaidi',
//   extra: {
//     d: 'xyz',
//     e: 'mnn',
//   },
// }
// console.log(obj2?.f ?? {})
// let c = null
// const newc = 2 ?? 10
// // console.log(newc)
// let arr1 = [1, 2, 3, 4, 5, 7]
// let arr2 = [3, 4, 5, 6, 7]
// let fakeArr = []
// for (let index = 0; index < arr1.length; index++) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1[index] === arr2[i] && fakeArr.push(arr1[index])
//   }
// }
// console.log(fakeArr, 'UNION')

// const logged = () => {
//   console.log('first')
//   setTimeout(() => {
//     console.log('second')
//   }, 1000)
//   setTimeout(() => {
//     console.log('third')
//   }, 0)
//   console.log('fourth')
// }
// logged()
// const obj1 = [
//   {
//     a: 1,
//     b: 2,
//   },
//   {
//     c: 10,
//     d: 20,
//   },
// ]
// console.log(
//   obj1.indexOf({
//     c: 10,
//     d: 20,
//   }),
// )
// const obj1 = {
//   a: 1,
// }
// const obj2 = {
//   b: 1,
// }
// console.log(obj1 === obj1)

// const a = 123
// const b = a.toString().split('').reverse().join('')
// console.log(b)

// const fibonacci = (n) => {
//   if (n <= 1) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// fibonacci(50)
// find duplicate element in the array

// const array = [2, 1, 2, 0]
// // console.log(array.indexOf(0))
// const dupli = []
// for (let index = 0; index < array.length; index++) {
//   const element = array[index]
//   dupli.push(element)
// }
// console.log(dupli)

// find duplicate in an array

// const arr = [3, 4, 6, 7, 1, 3, 1, 4]
// const newarr = arr.filter((item, index) => arr.indexOf(item) !== index)
// console.log(newarr)

// const numbers = [1, 24, 3, 2, 4, 5, 5, 6, 6, 6]

// let isDuplicate = false

// // Outer for loop
// for (let i = 0; i < numbers.length; i++) {
//   // Inner for loop
//   for (let j = 0; j < numbers.length; j++) {
//     // Skip self comparison
//     if (i == j) {
//       // Check for duplicate
//       if (numbers[i] === numbers[j]) {
//         console.log(numbers[i])
//         isDuplicate = true
//         // Terminate inner loop
//         break
//       }
//     }
//     // Terminate outer loop
//     if (isDuplicate) {
//       break
//     }
//   }
// }

// if (!isDuplicate) {
//   console.log(`Array doesn't contain duplicates.`)
// } else {
//   console.log(`Array contains duplicates.`)
// }
//

// function findDuplicates(arr) {
//   return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))]
// }

// const array = [1, 2, 3, 4, 5, 3, 3, 2, 3, 6, 6]
// const duplicates = findDuplicates(array)
// console.log(duplicates)
// const fltarr = [2, 3, 5]
// const newflt = fltarr.filter((dat) => dat > 4)
// console.log(newflt)
// console.log(fltarr)

// const arr = [3, 5, 6, 4, 3, 6, 6, 6, 6]
// const newarr = [
//   ...new Set(arr.filter((item, index) => arr.indexOf(item) !== index)),
// ]
// console.log(newarr)
// console.log(arr1.filter((newarr1, index) => arr1.indexOf(newarr1) !== index))

////ALl ABOUT STRINGS
// const  str='subscribe to aliraza'
//  console.log(str.length)
// console.log(str.charAt(0))
// console.log(str.indexOf('c'))
// console.log(str[11])

// modifying string
//  const  newone=str[0]='l'
// console.log(newone)
// console.log(str[8].replace('asdsads'))
// const  strew='subscribe to aligarh'

// console.log(strew[2].replace('0'))
// strew[2].replace('z')
// console.log(strew.replace('aligarh','aliraza'))
// console.log(strew)

// console.log(strew.concat('000','raza'))
// console.log(strew)

// const newstr='   ali  raza    '
// console.log(newstr.trim())
// console.log(newstr)
// console.log(newstr.trim())

// const newstr='hi    this is aliraza'
// console.log(newstr.trim().indexOf('z'))
// const str='hi this is raza!'
// console.log(str.endsWith('!'))

// const newstr='hi this is raza zaidi hi i m raza'
// // console.log(newstr.substring(0,10))

// console.log(newstr.toLowerCase())
// console.log(newstr.t)
// const str=1
// console.log(typeof String(str))
// console.log(typeof str)
// const tobeconverted= {name : "aliraza"}
// console.log(String(tobeconverted.name))
//  console.log(JSON.stringify(tobeconverted))
//  console.log(JSON.parse(tobeconverted))
// const tobeconverted= {name : "aliraza",age:100}
// console.log(JSON.stringify(tobeconverted))
// console.log(JSON.JSON(tobeconverted))
// JSON.JSON()
// const tobeconverted= {name : "aliraza",age:100}
// console.log(JSON.stringify(tobeconverted))
// console.log(JSON.parse(JSON.stringify(tobeconverted)))


// const strmy='hi this is aliraza zaidi'
// console.log(strmy)
// console.log(strmy.includes('this'))
// const newstr='hi this is aliraza'
// console.log(newstr.split('a').join(''))
// const newstr= ['reactjs','angular','development',3]
// // console.log(newstr.join('newdeveloepr'))
// console.log(newstr.join(' and '))

// const str='hi this is aliraza'
// const newstr='strinn'
// console.log(newstr.length)
//  console.log(str.length)
//  const newone=str.splice(str.length,0,'...')
//  console.log(str.splice(str.length,0,'...'))

//  const str='reactjsdeveloper'
// if(str<str.length+10){
// // console.log('first')
//     console.log(str.concat('...'))
// }
//  const roadcode='reactjs angularJSNet devel '
//  console.log(roadcode.length)
//  if(roadcode.length>9){
//     console.log(roadcode.slice(0,roadcode.length)+'...')
//  }
//  console.log(roadcode.trim().slice(0,roadcode.length))
//  console.log(roadcode.slice(0,roadcode.length)+'...')

// const newstr=122;

// const str=String(newstr)
// console.log(str.split('').reverse().join(''))
// const charstr='abc'
// charstr.s


// let newnumb=10;
// console.log(newnumb.toString(2))
let numb=2
let numbe=4
let numbi=10
console.log(numb.toString(2))
console.log(numbe.toString(4))
console.log(numbi.toString(2))
