function initalize() {
  const FORM_SINGUP = document.getElementById("form");
  FORM_SINGUP.addEventListener("submit", validateForm);
}

function validateForm(event) {
  const NAME = document.getElementById("object-name").value;
  const MODEL = document.getElementById("printer-model").value;
  const SELECT = document.getElementById("printer-type").value;
  const MATERIAL = document.getElementById("printer-material").value;

  if (!NAME || NAME == "") {
    event.preventDefault();
    document.getElementById("error-name").style.display = "block";
  } else {
    document.getElementById("error-name").style.display = "none";
  }

  if (!MODEL || MODEL == "") {
    event.preventDefault();
    document.getElementById("error-model").style.display = "block";
  }
  else {
    document.getElementById("error-model").style.display = "none";
  }

  if (!SELECT || SELECT == "") {
    event.preventDefault();
    document.getElementById("error-select").style.display = "block";
  } else {
    document.getElementById("error-select").style.display = "none";
  }

  if (!MATERIAL || MATERIAL == "") {
    event.preventDefault();
    document.getElementById("error-material").style.display = "block";
  } else {
    document.getElementById("error-material").style.display = "none";
  }
}

initalize();