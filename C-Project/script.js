 var x = Math.floor(Math.random()*100520); // generating otp
 var count =0;
//  generated otp display
function otp() {
    document.getElementById("demo-c").innerHTML = x;
    document.getElementById("demo-c").style.background="#111";
    document.getElementById("demo-c").style.color="#fff";
  }

//  crate dynamic buton for personal detial
  function myFunction() {
    var  y = document.getElementById("x").value;
     if (y==x) {
      let div = document.createElement('div');
      div.id = 'content';
      div.innerHTML = '<button type="reset" value="Reset" data-toggle="collapse" data-target="#xgen" id="xgenc"></button>';
      document.getElementById("fm").appendChild(div);
        document.getElementById("xgenc").innerHTML = "Enter Personl Detail";
        // document.getElementById("xgenc").classList.add("btn")
        document.getElementById("xgenc").classList.add("btn-primary");
        document.getElementById("xgenc").classList.add("btn");
    }
    else{ // handlingwrong
        count++;
        alert("wrong-otp");
        document.getElementById("demo-c").innerHTML = x;
      
    }
    console.log(count);
    if(count>=3)
    {
        alert("please reload the page");
        myFunction();
    }
    else{
    }
  }

  
