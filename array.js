let arr=[];
var n=120,z = 60,t=5;
n=100;
let numberofBar;

  numberofBar = document.getElementById("arr_sz");
  n=numberofBar.value;
  var time = document.getElementById("speed");
  t=time.value;
  t=parseFloat(5/t);
  console.log(t);

for (var i = 0; i < n; i++) {
  var x = Math.floor(Math.random()*n);
  arr[i] = x;
}

for (var i = 0; i < n; i++) {
  var d = document.createElement("div");
  document.getElementById("bar").appendChild(d);
  d.classList.add("bar"+i);
  d.style.border ="6px solid #F3F4ED";
  d.style.background= "#F3F4ED";
  d.style.margin = "1px";
  var h = Number(arr[i]+1)*5;
  d.style.height = h+"px";
}

const arrayNew = document.getElementById("New-Array");

arrayNew.addEventListener("click", Newarr);

function Newarr(){

    for(var i = 0;i<z;i++ ){
      var ob = document.getElementsByClassName("bar"+i);
      ob[0].remove();
    }

      arr=[];
      numberofBar = document.getElementById("arr_sz");
      n=numberofBar.value;
      z = n;
      time = document.getElementById("speed");
      t=time.value;
      t=parseFloat(5/t);
      console.log(t);

      for (var i = 0; i < n; i++) {
        var x = Math.floor(Math.random()*n);
        arr[i] = x;
      }

    for (var i = 0; i < n; i++) {
      var d = document.createElement("div");
      document.getElementById("bar").appendChild(d);
      d.classList.add("bar"+i);
      d.style.border ="6px solid #F3F4ED";
      d.style.background= "#F3F4ED";
      d.style.margin = "1px";
      var h = Number(arr[i]+1)*5;
      d.style.height = h+"px";
    }



}
