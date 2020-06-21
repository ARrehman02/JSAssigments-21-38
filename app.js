// Chap # 21-25
// var firstname=prompt("Enter Your First Name")
// var Lastname=prompt("Enter Your Last Name")
// alert("Welcome"+" "+firstname+" "+Lastname+" "+"To Our Page")

// var phone=prompt("Enter Your Favorite Smart phone name")
// document.write("Your Favorite Phone is" +" "+ phone+"<br>")
// document.write("Lenght of string is"+ " "+ phone.length)

// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write(n)

// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write(n)

// var str = "Pakistani";
// var res = str.charAt(3);
// alert(res)

// var FirstName = prompt("Enter your first name");
// var LastName = prompt("Enter your last name");
// var concatt = FirstName.concat(LastName);
// alert("Welcome "+concatt);

// var str = "Hyderabad";
// var res = str.replace("Hyderabad", "Islamabad");
// document.write("City"+" "+str+"<br>")
// document.write("After Replacement"+" "+res)

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var res=message.replace(/and/g,"&")
// document.write("Message"+" "+message+"<br>")
// document.write("After Replacement"+" "+res)

// var str="472"
// document.write("Value"+" "+str +"<br>"+"Type String")
// var num=Number(str)
// document.write("<br>"+"Value"+" "+str +"<br>"+"Type Number")


// var input =prompt("Enter Your Favorite Thing")
// var capital=input.toUpperCase()
// alert(capital)

// var input  =prompt("Enter Your Favorite Hobby")
// document.write("User Input"+" "+input+"<br>")
// document.write("Title Case"+" "+input[0].toUpperCase()+input.slice(1))

// var DotNum = "35.36";
// alert("Number: "+DotNum);
// DotNum = DotNum.replace(/\./g,"");
// alert("Result: "+DotNum);


// var username_input = prompt("enter username")
// var regex = /^[A-Za-z0-9 ]+$/
// var isValid = regex.test(username_input);
//         if (!isValid) {
//             alert("Contains Special Characters.");
//         } else {
//             alert("Does not contain Special Characters.");
//         }


// var itemArr=["cake", "biscuit", "cookie", "chips", "patty"]
// var Bitems=prompt("Welcome To Our Bakery Sir/Ma'am! What Item Do You Want?")
// Bitems=Bitems.toLowerCase()
// var find=itemArr.includes(Bitems)
// if(find==true){
//     alert(Bitems+" "+"is available at index"+" "+ itemArr.indexOf(Bitems))
// }
// else{
//     alert("Sorry We Dont Have"+" "+Bitems+" "+"available")
// }


// var inputt = prompt("enter password");
// var passw =  /^[A-Za-z]\w{6,100}$/;
// if(inputt.match(passw)) 
// { 
// alert('Valid Password')
// }
// else
// { 
// alert('Invalid password')
// }


// var university = "universty of karachi"
// var uni = university.split("")
// for( var j = 0; j<university.length; j++){
//     document.writeln("<br>"+uni[j])
// }

// var userInput = prompt("Enter Your Favorite Cricketer Name");
// var lastAlpha = userInput.charAt(userInput.length-1);
// alert("Word: "+userInput+"\nLast alphabet: "+lastAlpha);

// var occuranceMessage = "The quick brown for jumps over the lazy dog";
// occuranceMessage = occuranceMessage.toLowerCase();
// var occurNum = occuranceMessage.match(/the/g);
// document.write("There are "+occurNum.length+" occurance(s) of word 'The'");



// Chap # 26-30

// var userinput=prompt("Enter any postive integer value")
// var ROvalue=Math.round(userinput)
// var Floorvalue=Math.floor(userinput)
// var Ceilvalue=Math.ceil(userinput)
// document.write("Number:"+" "+userinput+"<br>"+"RoundOff Value:"+" "+ROvalue+"<br>"+"Floor Value:"+" "+Floorvalue+"<br>"+"Ceil Value:"+" "+Ceilvalue )


// var userinput=prompt("Enter any negative integer value")
// var ROvalue=Math.round(userinput)
// var Floorvalue=Math.floor(userinput)
// var Ceilvalue=Math.ceil(userinput)
// document.write("Number:"+" "+userinput+"<br>"+"RoundOff Value:"+" "+ROvalue+"<br>"+"Floor Value:"+" "+Floorvalue+"<br>"+"Ceil Value:"+" "+Ceilvalue )

// var userinput=prompt("Enter Value")
// alert("The absolute value of "+userinput+" is "+ Math.abs(userinput))

// var dice = Math.floor(Math.random()*6+1)
// alert("Dice value: "+dice);

// var heads_tails=Math.random()
// if(heads_tails<0.5){
//     alert("Heads")
// }
// else{
//     alert("Tails")
// }

// var randomNumber = Math.floor(Math.random() * 100);
// document.write("Random number from 1-100 is: "+randomNumber);

// var userweight = prompt("Enter your weight in Kilograms");
// var ConvWeight = parseInt(userweight);
// alert("The weight of user in kilograms is "+ConvWeight);

// var secretNum =  Math.floor(Math.random() * 10);
// for(i = 0; i < 5; i++){
// var secretNumGuess = +prompt("Guess any number from 1 - 10\nYou have 5 tries :)");
// if(secretNum == secretNumGuess){
//     alert("Correct number");
// }
// else{
//     alert("Wrong");
// }
// }


// Chap # 31-34

// var date = new Date();
// document.write("Current date is ".bold()+"<br>"+date);

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// document.write("Month: "+n)

// var day=new Array();
// day[0]="Sun";
// day[1]="Mon";
// day[2]="Tue";
// day[3]="Wed";
// day[4]="Thu";
// day[5]="Fri";
// day[6]="Sat";

// var today=new Date();
// var days=day[today.getDay()];
// alert("Today is "+days)

// var day=new Array();
// day[0]="Sun";
// day[1]="Mon";
// day[2]="Tue";
// day[3]="Wed";
// day[4]="Thu";
// day[5]="Fri";
// day[6]="Sat";

// var today=new Date();
// var days=day[today.getDay()];
// alert("Today is "+days)

// if (days=="Sat"){
//     alert("Its Fun Day Happy Holiday Enjoy!")
// }
// else if (days=="Sun"){
//     alert("Its Fun Day Happy Holiday Enjoy!")
// }
// else {
//     alert("Its Hard Working Day Be Productive")
// }

// var date=new Date();
// var today=date.getDate();
// if(today<15){
//     alert("First Fifteen Days Of This Month")
// }
// else{
//     alert("Last Fifteen Days Of This Month")
// }

// var CurDate = new Date();
// var milliSeconds = CurDate.getTime();
// var mins = Math.floor(milliSeconds / 60000);
// document.writeln("Current date is ".bold()+CurDate+"<br>"+"<br>"+"Milliseconds since midnight, Jan. 1,1970: ".bold()+milliSeconds+"<br>"+"<br>"+"Minutes since midnight, Jan. 1970: ".bold()+mins);

// var AP=new Date();
// var PA=AP.getTime();
// if (PA<12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }

// var laterDay=new Date(new Date().getFullYear(), 11 ,31);
// document.write("Last Day of this year is: "+laterDay)

// var dateR=new Date("18/June/2015");
// var dateC=new Date();
// var diffT=Math.abs(dateC-dateR);
// var diffD=Math.ceil(diffT/(1000*60*60*24))
// document.write(diffD+" Days Have Passed Since 1st Ramazan 2015")


// var date1 = new Date();
// var date2 = new Date("Dec 05, 2015 20:15:16");
// var seconds = Math.abs(date1 - date2) / 1000;
// alert("From reference date: "+date2+"\n"+Math.ceil(seconds)+" seconds have passed away");

// var current=new Date();
// document.write("Current Date: " +current+"<br>")
// current.setHours(current.getHours()-1);
// document.write("One Hour Ago: "+current)

// var Cdate=new Date();
// alert("Current Date: "+Cdate);
// Cdate.setFullYear(Cdate.getFullYear()-100);
// document.write("<br>"+"100 Years Back, It Was "+Cdate)

// var age=prompt("Enter Your Age")
// var currentY=new Date();
// currentY.setFullYear(currentY.getFullYear()-age)
// var BirhtY=currentY.getFullYear()
// document.write("Your Age is: "+age+"<br>"+"Your Birth Year is: "+BirhtY)

// var cunsumerName=prompt("Enter Your Name")
// var NOU=prompt("Enter Number OF Units")
// var CurrentMonth=prompt("Enter Current Month")
// var CPU=16
// var NAP=NOU*CPU
// var LPS=350
// var GAP=NAP+LPS
// document.write("Customer Name: "+cunsumerName+"<br>")
// document.write("Current Month: "+CurrentMonth+"<br>")
// document.write("Numeber Of Units : "+NOU+"<br>")
// document.write("Charges Per Unit: "+CPU+"<br>"+"<br>")

// document.write("Net Amount Payable (within Due Date): " +NAP+"<br>")
// document.write("Late Payment Surcharge: "+LPS+"<br>")
// document.write("Gross Amount Payable (after Due Date): "+GAP)

// Chap # 35-38

// function tellDateAndTime(){
//     var date=new Date();
//     document.write(date)
// }
// tellDateAndTime();

// function Greetings(){
//     var FirstName=prompt("Enter Your First Name")
//     var LastName=prompt("Enter Your Last Name")
//     alert("Welcome "+FirstName +" "+ LastName+" To Our Page")
// }
// Greetings();

// function add(Firstvalue,Secondvalue,Result){
//     var Firstvalue=+prompt("Enter Your First Value")
//     var Secondvalue=+prompt("Enter Your Second Value")
//     var Result=Firstvalue+Secondvalue
//     alert(Result)
// }
// add();

// function calcultor(Firstvalue, Secondvalue, Result, opt) {
//     var Firstvalue = +prompt("Enter Your First Value")
//     var Secondvalue = +prompt("Enter Your Second Value")
//     var opt=prompt("Enter operator")
//     if(opt==="+"){
//         Result=Firstvalue+Secondvalue
//         alert(Result)
//     }
//     else if(opt==="-"){
//         Result=Firstvalue-Secondvalue
//         alert(Result)
//     }
//     else if(opt==="*"){
//         Result=Firstvalue*Secondvalue
//         alert(Result)
//     }
//     else if(opt==="/"){
//         Result=Firstvalue/Secondvalue
//         alert(Result)
//     }
//     else{
//         alert("Invalid Operator")
//     }
// }
// calcultor();


// function squaring(a){
//     a=+prompt("Enter Your First Value")
//     alert("Square of your number is "+a*a)
// }
// squaring();

// function factorial(){
//     var input = +prompt("Enter the number for factorial");
//     var result = input;

// for(var i=1;i < input;i++){
//   result = i * result;
// }
// alert("The factorial of "+input+" is "+result);
// }
// factorial();

// function counting(){
//     var start=+prompt("Enter Starting Number")
//     var end=+prompt("Enter Ending Number")
//     for(var j=start;j<=end;j++)
//     document.write(j+"<br>")
// }
// counting();

// function hypotenus(base,per){
//     base=+prompt("Enter Value For Base")
//     per=+prompt("Enter Value For perpendicular")
//     var h=Math.sqrt((base*base)+(per*per));
//     alert("The Value Of Hypotenus is "+h)
// }
// hypotenus();

// function CalculateArea(height,widht,area){
//     height = +prompt("Enter value for Height")
//     widht = +prompt("Enter value for Widht")
//     area = height*widht;
//     alert("Area of rectangle is "+area);
// }
// CalculateArea();

// function ReverseStr(strOne,strTwo){
//     strOne=prompt("Enter Your Word")
//     strTwo=strOne
//     strOne=strOne.split('').reverse().join('')
//     if (strTwo===strOne){
//         alert("Its a Palindrome")
//     }
//     else{
//         alert("Its not a Palindrome")
//     }
// }
// ReverseStr();

// function first_letter_capital(letterOne)
// {
//  return letterOne.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln(first_letter_capital('the quick brown fix'));



// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.writeln("The longest word is "+find_longest_word('Web Development Tutorial'));



// function character_counting(str_1, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str_1.length; position++) 
//  {
//     if (str_1.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(character_counting('w3resource.com', 'o'));



// function calcCircumference(){
//     var radius = +prompt("Enter radius to calculate circumference")
//     var circum = (2 * 3.14 *radius);
//     alert("The circumference is "+circum);
// }
// function calcArea(){
//     var radius_1 = +prompt("Enter radius to calculate are of circle")
//     var area_1 = (3.14 *(radius_1*radius_1));
//     alert("The area is "+area_1);
// }
// calcCircumference();
// calcArea();