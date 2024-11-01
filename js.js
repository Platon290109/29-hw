const input1 = document.getElementById("qw")
const input2 = document.getElementById("er")
const bibi = document.getElementById("ty")

bibi.addEventListener("click", unclick)

function unclick(){
    const inpunt1well = input1.value; const inpunt2well = input2.value;
     if (inpunt1well.trim().length&&inpunt2well.trim().length) {
    console.log("Обидва поля заповнені")
}
     else{
    console.log("Не всі поля заповнені")
}
}


const input3 = document.getElementById("mi")
const input4 = document.getElementById("ma")
const mo = document.getElementById("mo")

mo.addEventListener("click", unclick)

function unclick(){
    const inpunt3well = input3.value; const inpunt4well = input4.value;
     if (inpunt3well+inpunt4well>10) {
    console.log("Сума більша за 10")
}
     else{
    console.log("Сума менша або дорівнює 10")
}
}


const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")

c.addEventListener("click", unclick)



const email = document.getElementById("Q")
const password = document.getElementById("W")
const name = document.getElementById("E")
const R = document.getElementById("R")
const form = document.getElementById("form")

E.addEventListener("click", unclick)
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
}

function unclick(params){
    const Email = email.value; const Password = password.value; const Name = name.value;
     if (Name.length >= 3){
        console.log("з імʼям все добре");
     }
     if (Password.length > 6){
        console.log("з паролем все добре");
     }
     if (Email.includes("@")){
        console.log("з емейлом все добре");
     }
}