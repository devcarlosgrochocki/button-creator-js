const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
  border(value) {
    this.element.style.border = value;
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);

  saveValues(name, value);
  changeCssText();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const elements = Object.keys(localStorage);
  elements.forEach((element) => {
    controles.elements[element].value = localStorage[element];
    handleStyle[element](localStorage[element]);
  });
  changeCssText();
}

setValues();

function changeCssText() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
