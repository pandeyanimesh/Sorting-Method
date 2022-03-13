
// function waitforme(milisec) {
//   return new Promise(resolve => {setTimeout(() => { resolve('') }, milisec);})
// }
 const timer = ms=> new Promise (res=> setTimeout(res, ms));
//await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
const bubbleSort = document.getElementById("Bubble-Sort");
const SelectionSort = document.getElementById("Selection-Sort");

bubbleSort.addEventListener("click",async function (){
    SelectionSort.disabled=true;
    InsertionSort.disabled=true;
    arrayNew.disabled=true;
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length-i-1; j++) {
            var d1 = document.getElementsByClassName("bar"+j)[0];
              var g = Number(j) + 1;
              var d2 = document.getElementsByClassName("bar"+g)[0];
              d1.style.border = "6px solid red";
              d1.style.background = "red";
              d2.style.border = "6px solid red";
              d2.style.background = "red";
               await timer(t*10);
               //await (delay);
            if(arr[j]>arr[j+1])
             {
            swap(d1,d2);
               var f = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = f;
             }
             d1.style.border = "6px solid #F3F4ED";
             d1.style.background = "#F3F4ED";
             d2.style.border = "6px solid #F3F4ED";
             d2.style.background = "#F3F4ED";


          }

           var k= arr.length-i-1;
            var x = document.getElementsByClassName("bar"+k)[0];
             x.style.border = "6px solid #5F939A";
             x.style.background = "#5F939A";



   }


 function swap(e1,e2){

    const x = window.getComputedStyle(e1);
    const y = window.getComputedStyle(e2);

    const h1 = x.getPropertyValue("height");
    const h2 = y.getPropertyValue("height");

    e1.style.height = h2;
    e2.style.height = h1;

}




SelectionSort.disabled=false;
InsertionSort.disabled=false;
arrayNew.disabled=false;

});
