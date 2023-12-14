let printer = []
if (localStorage.getItem("table") != null) {
  printer = JSON.parse(localStorage.table);
} else {
  printer = [
    { marca: "Creality", modelo: "Ender 3v2", tipo: "FDM", material: "NILON" },
  ]
}
function initialize() {
  printerTable();
}

function printerTable() {
  const PRINTER_TABLE = document.getElementById("printer-table-section");
  PRINTER_TABLE.innerHTML = "";

  for (let i = 0; i < printer.length; i++) {
    PRINTER_TABLE.innerHTML += `<tr><td>${printer[i].marca}</td><td>${printer[i].modelo}</td><td>${printer[i].tipo}</td><td>${printer[i].material}`;
  }
  localStorage.setItem("table", JSON.stringify(printer));
}

initialize(); 