//only work in node not browser
//if i need to check in browser- i will comment out the fetch 
const fetch = require('node-fetch') //api

// fetch('https://espn.com')
// .then(function(response){
// console.log(response.text());
// })


                //request to website that return html
// fetch('https://espn.com')//url or endpoint request
// .then((response) =>{   //response or promise
//     console.log(response);
//     return response.text();  //return the response as text

// })
// .then((html)=>{  //text comes back as html
//     console.log(html); //print html forma
// })


            //request to api that return a json object
//  fetch('https://api.github.com/users/busayomiAnifatOlayiwola') 
 fetch('https://api.github.com/users/facebook')    //endpoint
 .then(response => {  //promise
     return response.json(); //return as json object
 })   
 .then(data => {
   // console.log(data);
 });


//API
fetch('https://api.spacexdata.com/v3/capsules')    //endpoint
 .then(response => {  //promise
     return response.json(); //return as json object
 })   
 .then(dataArray => {
    //console.log(dataArray);

    let c102Object = dataArray[1]; //object
   let capsuleSerial = c102Object['capsule_serial'];
    let capsuleStatus = c102Object.status;

    console.log(c102Object);
    console.log(capsuleSerial);
    console.log(capsuleStatus);
 });
