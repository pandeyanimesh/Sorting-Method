const InsertionSort = document.getElementById("Insertion-Sort");

InsertionSort.addEventListener("click",async function (){
  SelectionSort.disabled=true;
  bubbleSort.disabled=true;
  arrayNew.disabled=true;
   for (var i = 0; i < arr.length; i++) {

      for (var j = i; j > 0; j--) {

            if(arr[j] < arr[j-1])
             {var d1 = document.getElementsByClassName("bar"+j)[0];
             var d2 = document.getElementsByClassName("bar"+(j-1))[0];
               d1.style.border = "6px solid red";
               d1.style.background = "red";
               await timer(t*10);
               swap(d1,d2);
             var f = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = f;
              d1.style.border = "6px solid #F3F4ED";
              d1.style.background = "#F3F4ED";
               }

             else {
                break;
               }
          }





   }
   for (var i = 0; i < arr.length; i++) {
     await timer(t*10);
     var x = document.getElementsByClassName("bar"+i)[0];
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
bubbleSort.disabled=false;
arrayNew.disabled=false;
});
