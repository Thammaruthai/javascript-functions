// Start coding here
// ให้เขียนโปรแกรมตามโจทย์ที่กำหนดดังนี้


//ให้ฟังก์ชันอยู่ในรูปแบบของ Function Expression
//-------------------------------
// ให้ Declare ฟังก์ชัน add ลงในโค้ดโดยที่
// Declare ฟังก์ชัน add ในรูปแบบของ Declaration
// ฟังก์ชัน add รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
// ฟังก์ชัน add จะ Return ผลลัพธ์ออกมาเป็น ผลรวมของ a และ b
// เช่น ถ้า Execute add(10, 5) จะได้ผลลัพธ์ออกมาเป็น 15
const add=function (a,b){
    return a+b;
}
console.log(add(10,5));

// ให้ Declare ฟังก์ชัน subtract ลงในโค้ดโดยที่
// Declare ฟังก์ชัน subtract ในรูปแบบของ Declaration
// ฟังก์ชัน subtract รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
// ฟังก์ชัน subtract จะ Return ผลลัพธ์ออกมาเป็น ผลลบระหว่าง a และ b
// เช่น ถ้า Execute subtract(10, 5) จะได้ผลลัพธ์ออกมาเป็น 5
const subtract=function (a,b){
    return a-b;
}
console.log(subtract(10,5));


// ให้ Declare ฟังก์ชัน multiply ลงในโค้ดโดยที่
// Declare ฟังก์ชัน multiply ในรูปแบบของ Declaration
// ฟังก์ชัน multiply รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
// ฟังก์ชัน multiply จะ Return ผลลัพธ์ออกมาเป็น ผลคูณระหว่าง a และ b
// เช่น ถ้า Execute multiply(10, 5) จะได้ผลลัพธ์ออกมาเป็น 50
const multiply=function multiply(a,b){
    return a*b;
}
console.log(multiply(10,5));


// ให้ Declare ฟังก์ชัน divide ลงในโค้ดโดยที่
// Declare ฟังก์ชัน divide ในรูปแบบของ Declaration
// ฟังก์ชัน divide รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
// ฟังก์ชัน divide จะ Return ผลลัพธ์ออกมาเป็น ผลหารระหว่าง a และ b
// เช่น ถ้า Execute divide(10, 5) จะได้ผลลัพธ์ออกมาเป็น 2
const divide=function divide(a,b){
    return a/b;
}
console.log(divide(10,5));