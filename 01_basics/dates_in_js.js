// Date object encapsulates an integral number that represents miliseconds since the midnight at the beginning of January 1,1970,UTC

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025,0,21)
// let myCreatedDate = new Date(2025,0,21,5,3)

// let myCreatedDate = new Date("2025-03-14")

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.toLocaleString('default',{weekday:"long"}));


