/* 
   Ahsana Tasnim
   Javascript Programming Exercise 5
   Control Flow and Loops
   MPG Exercise
*/

let again = 'y';
let miles = 0.0;
let gallons = 0.0;
let mpg = 0.0;
let calculationMsg;

do{
   miles = prompt('Enter the number of miles travelled: ');
   miles = parseFloat(miles);
   gallons = prompt('Enter the number of gallons used: ');
   gallons = parseFloat(gallons);
   
   if(!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0){
       mpg = miles/gallons;
       mpg = parseInt(mpg);//round to whole number
       calculationMsg = `<p>MPG: Miles travelled: <strong>${miles}</strong>
       miles Gallons consumed: <strong>${gallons} gallons</strong>
       Consumption rate: <strong>${mpg} miles/gallon</strong></p>`
   }else{
       calculationMsg = '<p> style="color:red;">One or more invalid inputs.</p>';
   }
   again = prompt('All set? Print to HTML page?', 'y');

}while(again == 'y');