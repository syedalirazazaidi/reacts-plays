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

const array = [2, 1, 2, 0]
// console.log(array.indexOf(0))
const dupli = []
for (let index = 0; index < array.length; index++) {
  const element = array[index]
  dupli.push(element)
}
console.log(dupli)
