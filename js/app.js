const submitBtn = document.querySelector(".btn");
const field = document.querySelector(".fieldset");
let input = field.children[2];
let alertMsg = field.children[3];
const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

const clearField = () => {
   input.style.border = "1px solid hsl(249, 10%, 26%)";
   input.value = '';
}

input.onload = clearField();

submitBtn.addEventListener("click", (e) => {
   e.preventDefault();

   console.log('hi');



   if (input.value == "") {
      input.style.border = "2px solid hsl(0, 100%, 74%)";
      alertMsg.classList.remove("hide-error");
   } else if (!reg.test(input.value)) {

      input.style.border = "2px solid hsl(0, 100%, 74%)";
      alertMsg.textContent = "Looks like this is not an email";
      alertMsg.classList.remove("hide-error");
   } else {
      alertMsg.classList.add("hide-error");
      input.style.border = "1px solid hsl(249, 10%, 26%)";
   }

});