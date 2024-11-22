// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// 1 masala start
// function multiplyValues(obj: { [key: string]: number }, n: number): { [key: string]: number } {
//   const res: { [key: string]: number } = {}

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key] * n
//     }
//   }

//   return res
// }

// const obj = { a: 2, b: 3, c: 4 }
// const n = 3
// const res = multiplyValues(obj, n)

// console.log(res)
// 1 masala end


// 2 masala start
// function countWord(input: string): number {
//   const words = input.split('')
//   const count = words.filter(word => word.includes('a') || word.includes('A')).length
//   return count
// }
// const inputString = "I have an apple and a banana."
// const result = countWord(inputString)

// console.log(result)
// 2 masala end


// 3 masala start
// interface Book {
//   title: string
//   author: string
//   read: boolean
// }

// const books: Book[] = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
//   }
// ]

// function checkBooks(books: Book[]): void {
//   books.forEach((book, index) => {
//     const readStatus = book.read ? "oqilgan" : "oqilmagan"
//     const author = book.author.includes("hazratlari") ? book.author : `${book.author} ning`
//     console.log(`${index + 1}. ${author} ning ${book.title} kitobi ${readStatus}`)
//   })
// }

// checkBooks(books)
// 3 masala end


// 4 masala start
// function createObjectFromArray(arr: string[]): { [key: string]: number } {
//   const result: { [key: string]: number } = {}
  
//   arr.forEach(item => {
//     result[item] = item.length
//   })

//   return result
// }
// const inputArray = ["text", "world", "laptop"]
// const outputObject = createObjectFromArray(inputArray)

// console.log(outputObject)
// 4 masala end


// 5 masala start
// function countWords(arr: string[]): { [key: string]: number } {
//   const result: { [key: string]: number } = {}

//   arr.forEach(word => {
//     if(result[word]) {
//       result[word]++
//     } 
//     else{
//       result[word] = 1
//     }
//   })
//   return result
// }
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
// const wordCount = countWords(animals)

// console.log(wordCount)
// 5 masala end


// 6 masala start
// interface Person {
//   name: string;
//   age: number
// }

// function ageDifference(arr: Person[]): number {
//   const sortedArr = arr.sort((a, b) => a.age - b.age)
//   const youngestAge = sortedArr[0].age
//   const oldestAge = sortedArr[sortedArr.length - 1].age
//   return oldestAge - youngestAge
// }
// const people: Person[] = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ]
// const difference = ageDifference(people)
// console.log(difference)
// 6 masala end


// 7 masala start
// function getTruthyFalsy(arr: (string | number | boolean | null)[]): { truthy: any[], falsy: any[] } {
//   const truthy = arr.filter(item => item)
//   const falsy = arr.filter(item => !item)
//   return { truthy, falsy }
// }
// const inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// const result = getTruthyFalsy(inputArray)

// console.log(result)
// 7 masala end


// 8 masala start
// function minManWord(sentence: string): { minWord: string, maxWord: string } {
//   const words = sentence.split('')
//   const minWord = words.reduce((shortest, current) => current.length < shortest.length ? current : shortest)
//   const maxWord = words.reduce((longest, current) => current.length > longest.length ? current : longest)
//   return { minWord, maxWord }
// }
// const sentence = "Men dasturlash kursida oqiyman"
// const result = minManWord(sentence)

// console.log(result)
// 8 masala end


// 9 masala start
// Iwlay olmadim )
// 9 masala end


// 12 masala start
// function getLastWordLength(sentence: string): number {
//   const words = sentence.trim().split('')
//   const lastWord = words[words.length - 1]
//   return lastWord.length
// }
// const sentence = "Men dasturlash kursida oqiyman"
// const lengthOfLastWord = getLastWordLength(sentence)
// console.log(lengthOfLastWord)
// 12 masala end


// 13 masala start
// function objectToStringArray(obj: { [key: string]: number }): string[] {
//   return Object.entries(obj).map(([key, value]) => key + value.toString())
// }
// const inputObject = {a: 2, b: 5, c: 7}
// const result = objectToStringArray(inputObject)

// console.log(result)
// 13 masala end


// 14 masala start
// var findMedianSortedArrays = function(nums1: number[], nums2: number[]): number {
//   const mergedArray = [...nums1, ...nums2]
//   mergedArray.sort((a, b) => a - b)
//   const len = mergedArray.length

//   if(len % 2 === 1) {
//     return mergedArray[Math.floor(len / 2)]
//   } 
//   else{
//     const mid1 = mergedArray[len / 2 - 1]
//     const mid2 = mergedArray[len / 2]
//     return (mid1 + mid2) / 2
//   }
// }

// const nums1 = [1, 2]
// const nums2 = [3, 4]
// const result = findMedianSortedArrays(nums1, nums2)

// console.log(result)
// 14 masala end



// 15 masala start
// function getItemsAppearedMoreThanOnce(arr: any[]): any[] {
//   const frequencyMap: { [key: string]: number } = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1
//     return acc
//   }, {})
//   const result = Object.keys(frequencyMap).filter(key => frequencyMap[key] > 1)
//   return result.map(item => item)
// }

// const inputArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape']
// const result = getItemsAppearedMoreThanOnce(inputArray)

// console.log(result)
// 15 masala end