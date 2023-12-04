listAllVehicles()

function createPElemenToVehicleItem(textP) {
  let p = document.createElement("p")
  p.textContent = textP
  p.classList.add("content")
  return p;
}

function enterVehicle(plate, type) {
  fetch(domain + "/api/parking/vehicle", {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ plate: plate, type: type })
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}

function listAllVehicles() {
  fetch(domain + "/api/parking/vehicles")
    .then((response) => response.json())
    .then((dataArray) => {
      ulCarList.replaceChildren()
      dataArray.forEach(dataVehicle => {
        let type = createPElemenToVehicleItem(dataVehicle.type);
        let plate = createPElemenToVehicleItem(dataVehicle.plate);
        let date = formDate(dataVehicle.entryDate);
        let timeEnterVehicle = createPElemenToVehicleItem(formDate(date));
        let li = document.createElement("li");
        li.append(type, plate, timeEnterVehicle);
        li.classList.add("vehicle");
        ulCarList.appendChild(li);
      });
    })
    .catch((err) => console.log(err))
};


form.addEventListener("submit", (e) => {
  e.preventDefault()
  let type = vehicleSelectionMenu.value;
  let plate = inputWritePlate.value.toUpperCase();
  enterVehicle(plate, type);
  listAllVehicles();
  // clearInput()
  location.reload()
});




