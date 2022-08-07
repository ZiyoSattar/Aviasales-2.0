var elSelect = document.querySelector(".hero__select");
var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elHero = document.querySelector(".hero__inner");
var elAnswer = document.createElement("p");

elHero.appendChild(elAnswer);
elAnswer.setAttribute("style", "margin-top: 30px;")

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);

  
  var overallResult = (inputValue / selectValue).toFixed(2);    
  elAnswer.textContent = overallResult;

  if (inputValue <= 0) {
    elAnswer.textContent = "0 yoki udan kichik raqam kiritidingiz.";
    return;
  }
   else if (isNaN(inputValue)) {
    elAnswer.textContent = "iltimos raqam kiriting";
    return;
  } 
    else if (isNaN(selectValue)) {
    elAnswer.textContent = "Iltimos dam olishni turini tanlang";
    return;
  }

  else if (overallResult >= 100 ) {
    elAnswer.textContent = "Pulingiz yetdi";
  }

  else {
    elAnswer.textContent = "Pulingiz yetmadi!"
  }

});
