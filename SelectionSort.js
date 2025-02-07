
//const SelectionSort = document.getElementById("Selection-Sort");

SelectionSort.addEventListener("click",async function (){
  toggleButtons(true, 'bubble', 'insertion','quick','merge', 'array');
   for (var i = 0; i < arr.length; i++) {
     var i1 = i;
      for (var j = i+1; j < arr.length; j++) {

            if(arr[j]<arr[i1])
             {
               i1 = j;
             }
          }

          var d1 = document.getElementsByClassName("bar"+i)[0];
          var d2 = document.getElementsByClassName("bar"+i1)[0];
            d1.style.border = "6px solid red";
            d1.style.background = "red";
            d2.style.border = "6px solid red";
            d2.style.background = "red";
            await timer(300*t);
           swap(d1,d2);
           var f = arr[i];
            arr[i] = arr[i1];
            arr[i1] = f;
            d1.style.border = "6px solid #F3F4ED";
            d1.style.background = "#F3F4ED";
            d2.style.border = "6px solid #F3F4ED";
            d2.style.background = "#F3F4ED";
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
toggleButtons(false);

});
