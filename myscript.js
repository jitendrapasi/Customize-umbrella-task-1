const image = document.getElementById("image");
const background = document.getElementById("body");
const upload_button = document.getElementById("upload-button");
const button_text = document.getElementById("button-text");
const logo = document.getElementById("logo-img");

function blue() {
  image.src = "./images/Blue umbrella.png";
  background.style.backgroundColor = "#D5E8F2";
  upload_button.style.backgroundColor = "#4AAFD0";
}

function pink() {
  image.src = "./images/Pink umbrella.png";
  background.style.backgroundColor = "#F2D5E1";
  upload_button.style.backgroundColor = "#DE638C";
}

function yellow() {
  image.src = "./images/Yello umbrella.png";
  background.style.backgroundColor = "#F2F2D5";
  upload_button.style.backgroundColor = "#EED93E";
}

function previewImage() {
  const file = document.querySelector("#file").files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    logo.src = e.target.result;
    button_text.innerHTML = file.name;
    logo.style.display = "initial";
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}

function clearLogo(event) {
  logo.src = "";
  button_text.innerHTML = "UPLOAD LOGO";
  logo.style.display = "none";
}
