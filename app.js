let arr=[];
let arrOne=[];
function PushMethod(){
    let num=document.getElementById("inputArray").value;
    arr.push(num);
    document.getElementById("output").value=(`[${arr}]`);
 }

 function popMethod(){
    arr.pop();
    document.getElementById("output").value=(`[${arr}]`);
 }

 function toStringMethod(){
   let text=arr.toString();
   document.getElementById("output").value=text;
 }
 function unShift(){
    let num=document.getElementById("inputArray").value;
    arr.unshift(num);
    document.getElementById("output").value=(`[${arr}]`);
 }

 function Shift(){
    arr.shift();
    document.getElementById("output").value=(`[${arr}]`);
 }
 function SortMethod(){
    arr.sort();
    document.getElementById("output").value=(`[${arr}]`);
 }
 function ReverseMethod(){
    arr.reverse();
    document.getElementById("output").value=(`[${arr}]`);
 }

 function sliceMethod(){
   let firstNum=parseInt(document.getElementById("firstValue").value);
   let secNum=parseInt(document.getElementById("secoundValue").value);
   arrOne= arr.slice(firstNum,secNum)
   document.getElementById("s-output").value=(`[${arrOne}]`);
 }

function spliceMethod(){
    let firstNum=parseInt(document.getElementById("firstValue").value);
    let secNum=parseInt(document.getElementById("secoundValue").value);
    arrOne= arr.splice(firstNum,secNum)
    document.getElementById("s-output").value=(`[${arr}]`);
}
function findMethod(){
   let firstNum=parseInt(document.getElementById("firstValue").value);
   let text = arr.find((element)=>element>15);
   document.getElementById("s-output").value=text;
}
function filterMethod(){
   let firstNum=parseInt(document.getElementById("firstValue").value);
   let text = arr.filter((element)=>element>15);
   document.getElementById("s-output").value=text;
}
function DeleteMethod(){
    let firstNum=parseInt(document.getElementById("firstValue").value);
    delete arr[firstNum];
    document.getElementById("s-output").value=(`[${arr}]`);
}
function includeMethod(){
   let firstNum=document.getElementById("firstValue").value;
   let text=arr.includes(firstNum);

   if(text == true){
      document.getElementById("s-output").value="There is Value";
   }
   else{
      document.getElementById("s-output").value="There is can't contain Value";
   }
}
function copywithMethod(){
   let firstNum=parseInt(document.getElementById("firstValue").value);
   let secNum=parseInt(document.getElementById("secoundValue").value);
   arrOne= arr.copyWithin(firstNum,secNum)
   document.getElementById("s-output").value=(`[${arr}]`);
}