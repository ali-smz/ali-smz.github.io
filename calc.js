function addToCalc(value) {
  document.getElementById("display").value += Number(value);
}
function finilize() {
  document.getElementById("display").value = eval(
    document.getElementById("display").value
  );
}

function pakKon() {
  document.getElementById("display").value = "";
}

function actionBtn(value) {
  document.getElementById("display").value += value;
}

function barax(value) {
  document.getElementById("display").value =
    -document.getElementById("display").value;
}

function darsad(value) {
  document.getElementById("display").value = eval(
    (document.getElementById("display").value)/100
  );
}
