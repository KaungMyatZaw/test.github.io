var submitBtn = document.querySelector('#register');
var emailaddress =  document.querySelector('#emailaddress');
var lastname =  document.querySelector('#lastname');
var firstname =  document.querySelector('#firstname');
var phonenumber =  document.querySelector('#phonenumber');
var weekness =  document.querySelector('#weekness');
var suggest =  document.querySelector('#suggest');



submitBtn.addEventListener('mouseover',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid #D02D8B";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid #D02D8B";
  }

  if(firstname.value === '') {
    firstname.style.border = "2px solid #D02D8B";
  }

  if(phonenumber.value === '') {
    phonenumber.style.border = "2px solid #D02D8B";
  }

  if(weekness.value === '') {
    weekness.style.border = "2px solid #D02D8B";
  }

  if(suggest.value === '') {
    suggest.style.border = "2px solid #D02D8B";
  }

})


submitBtn.addEventListener('mouseleave',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid transparent";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid transparent";
  }

  if(firstname.value === '') {
    firstname.style.border = "2px solid transparent";
  }
  
  if(phonenumber.value === '') {
    phonenumber.style.border = "2px solid transparent";
  }

  if(weekness.value === '') {
    weekness.style.border = "2px solid transparent";
  }

  if(suggest.value === '') {
    suggest.style.border = "2px solid transparent";
  }
})

    function myfunction(){
      var x = document.getElementById("msg");
      x.className = "show";
      setTimeout(function(){x.className=x.className.replace("show","");},3000);
      window.open("rating.html");
          }


    