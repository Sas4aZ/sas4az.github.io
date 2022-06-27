var i ;
btn.addEventListener("click", e=>{
    for (i = 0; i<=100 ; i = i+0.1) {
  document.getElementById("progress").style.width = i +"%";
  document.getElementById("progress").ariaValueNow =  i ;

    }

    }

 )
function change()
{
    alert(i);
    if (i >= 100) {
        document.getElementById("progress").style.width = 0 + "%";
        document.getElementById("progress").ariaValueNow = 0;
        alert("Congrats")
    }
}



