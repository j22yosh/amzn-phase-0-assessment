// 1. Write your functions here


// 2. Example Usage

 const katzDeli = []

 function line (array){
   for(let x = 0; x < array.length; x++){
  console.log("The line is currently: "+ `${x+1}` + ". " + `${array[x]}` )

    if (array.length === 0){
        return console.log("The line is currently empty.")}}
    
 }


 function takeANumber(array, name){
katzDeli.push(name)
   return console.log("Welcome, " + `${name}` + ". You are number " + `${array.length}` + " in line.")
     
 }
 
function nowServing(array){
  console.log("Currently serving " + `${array[0]}`)
  array.splice(0, 1);
  if(array.length === 0){return console.log("There is nobody currently waiting to be served!")}

}


takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.


line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

 nowServing(katzDeli) //=> "Currently serving Grace."

 line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"