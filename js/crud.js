let printer = []

if (localStorage.getItem("table") != null) {
  printer = JSON.parse(localStorage.table);
} else {
  printer = [
    { marca: "Creality", modelo: "Ender 3v2", tipo: "FDM", material: "NILON" },
  ]
}

function printerTable() {
  const PRINTER_TABLE = document.getElementById("printer-table");
  PRINTER_TABLE.innerHTML = "";

  for (let i = 0; i < printer.length; i++) {
    PRINTER_TABLE.innerHTML += `<tr><td>${printer[i].marca}</td><td>${printer[i].modelo}</td><td>${printer[i].tipo}</td><td>${printer[i].material}</td><td><button class="left btn btn-danger btn-sm" onclick="deletePrinter(${i})">Eliminar</button><button class="left btn btn-secondary btn-sm" onclick="editPrinter(${i})">Editar</button></td></tr>`;
  }
}

function initialize() {
  const PRINTER_FORM = document.getElementById("form");
  PRINTER_FORM.addEventListener("submit", addPrinter);

  printerTable();
}

function addPrinter(event) {
  event.preventDefault();
  const BRAND = document.getElementById("object-name").value;
  const MODEL = document.getElementById("printer-model").value;
  const TYPE = document.getElementById("printer-type").value;
  const MATERIAL = document.getElementById("printer-material").value;

  if ((BRAND || !BRAND == "") && (MODEL || !MODEL == "") && (TYPE || !TYPE == "") && (MATERIAL || !MATERIAL == "")) {
    printer.push({
      marca: BRAND,
      modelo: MODEL,
      tipo: TYPE,
      material: MATERIAL,
    });
    printerTable();
    localStorage.setItem("table", JSON.stringify(printer));
    document.getElementById("object-name").value = "";
    document.getElementById("printer-model").value = "";
    document.getElementById("printer-type").value = "";
    document.getElementById("printer-material").value = "";
  }
}
function deletePrinter(index) {
  printer.splice(index, 1);
  localStorage.setItem("table", JSON.stringify(printer));
  printerTable();
}

function editPrinter(printerId) {
  const BRAND = document.getElementById("object-name");
  const MODEL = document.getElementById("printer-model");
  const TYPE = document.getElementById("printer-type");
  const MATERIAL = document.getElementById("printer-material");
  const PRINTER = printer[printerId];

  BRAND.value = PRINTER.marca;
  MODEL.value = PRINTER.modelo;
  TYPE.value = PRINTER.tipo;
  MATERIAL.value = PRINTER.material;

  printer.splice(printerId, 1);
  printerTable();
}

initialize(); 