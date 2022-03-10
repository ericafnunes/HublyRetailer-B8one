

function clean() {
  let erro = document.getElementById("error");
  let cleanInput = document.getElementById("email");
  let cleanPsw = document.getElementById("psw");
  erro.innerHTML = "";
  cleanInput.value = "";
  cleanPsw.value = "";
}

function acao() {
  let submenu = document.querySelector(".nav_container_list");
  let border = document.querySelector(".icon-arrow-2");
  if (submenu.style.display == "none") {
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
}

function acao2() {
  let submenu2 = document.getElementById("submenu2");
  if (submenu2.style.display == "none") {
    submenu2.style.display = "block";
  } else {
    submenu2.style.display = "none";
  }
}

function acao3() {
  let submenu3 = document.getElementById("submenu3");
  if (submenu3.style.display == "none") {
    submenu3.style.display = "block";
  } else {
    submenu3.style.display = "none";
  }
}

function acao4() {
  let submenu4 = document.getElementById("submenu4");
  if (submenu4.style.display == "none") {
    submenu4.style.display = "block";
  } else {
    submenu4.style.display = "none";
  }
}

function changeArrow() {
  let arrow = document.getElementById("remove-arrow-2");
  let arrowShow = document.getElementById("remove-2");
  if (arrow.style.display == "block") {
    arrow.style.display = "none";
    arrowShow.style.display = "block";
  } else {
    arrow.style.display = "block";
    arrowShow.style.display = "none";
  }
  setTimeout(function () {
    
  }, 2000);
  
}

function changeArrow2() {
  let arrow = document.querySelector(".icon-arrow");
  let arrowShow = document.getElementById("remove-3");
  if (arrow.style.display == "block") {
    arrow.style.display = "none";
    arrowShow.style.display = "block";
  } else {
    arrow.style.display = "block";
    arrowShow.style.display = "none";
  }
}

function changeArrow3() {
  let arrow = document.getElementById("remove-arrow-3");
  let arrowShow = document.getElementById("remove");
  if (arrow.style.display == "block") {
    arrow.style.display = "none";
    arrowShow.style.display = "block";
  } else {
    arrow.style.display = "block";
    arrowShow.style.display = "none";
  }
}

function changeArrow4() {
  let arrow = document.getElementById("remove-arrow-4");
  let arrowShow = document.getElementById("remove-4");
  if (arrow.style.display == "block") {
    arrow.style.display = "none";
    arrowShow.style.display = "block";
  } else {
    arrow.style.display = "block";
    arrowShow.style.display = "none";
  }
}

function errorMessage() {
  const emailInput = document.getElementById("email");
  const pswInput = document.getElementById("psw");
  const error = document.getElementById("error");
  const form = document.getElementById("form");
  const emailValido = "academy@b8one.com";

  form.addEventListener("submit", function (event) {
  
    event.preventDefault();
    if (!pswInput.value) {
      error.style.display = "block";
      form.style.height = "524px";
      error.innerHTML = "Todos os campos devem ser preenchidos!";
      emailInput.style.marginBottom = "15px";
    }
    if(emailInput.value !== emailValido ){
      error.style.display = "block";
      error.innerHTML = "Este e-mail não existe, você tem outro?";
    }

    setTimeout(function () {
      clean();
    }, 2000);
  });
}


function cardNotification(){
  let notification = document.getElementById("notification_help");

}


function mostrarSenha() {
  const inputType = document.getElementById("psw");
  const eyeOn = document.getElementById("eye-on");
  const eye = document.getElementById("eye");
  if (inputType.type == "password") {
    inputType.type = "text";
    eye.src = "./assets/eye-on.png";
  } else {
    inputType.type = "password";
    eye.src = "./assets/eye-off.png";
  }
}

const handleRequestLogin = async (event) => {
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("psw").value;
  let errorEmail = document.getElementById("error");


  const data = {
    email: inputEmail,
    password: inputPassword,
  };

  const response = await fetch(`https://test-final.b8one.academy/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });


  const responseData = await response.json();

  console.log(data);

  if (response.ok) {
    console.log("true");
    window.location = "./dashboard.html";
    return true;
  } else {
    return false;
  }
};
