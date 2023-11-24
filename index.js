const submit = document.getElementById('myFORM');
const girisugurluDiv = document.querySelector('.girisugurlu');

function axiosPost(event) {
  event.preventDefault();
  axios.post("https://northwind.vercel.app/api/customers", {
    ad: nameinput.value,
    soyad: surnameinput.value,
    yas: ageinput.value,
    email: emailinput.value
  }).then(res => {
    console.log(res);
    div();
  });
}

myFORM.addEventListener('submit', axiosPost);

function div() {

  const formControls = document.querySelectorAll('.form-control');


  const bosVarMi = Array.from(formControls).some(control => control.value === "");


  if (!bosVarMi) {
    girisugurluDiv.style.display = 'block';
    setTimeout(function(){
        window.location.href = "main.html";
    }, 2000);

  } else {
    alert('olmaz')
  }

}












