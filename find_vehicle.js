function formDate(date) {
  let time = `${date.slice(0, 10)} - ${date.slice(11, 21)}`
  return time
}

// function clearInput() {
//   inputfindPlate.value = "";
//   inputWritePlate.value = "";

// }

function findVehicle(plate) {
  fetch(domain + "/api/parking/vehicle/" + plate)
    .then((response) => response.json())
    .then((arrayExitVehicle) => {
      let typePlate = createPElemenToVehicleItem(
        "Type - Plate:" + " " + `${arrayExitVehicle.type} - ${arrayExitVehicle.plate}`);
      typePlate.classList.add("exit-type-plate");
      let enterDate = createPElemenToVehicleItem("Enter - Hour:" + " " + `${formDate(arrayExitVehicle.entryDate)}`);
      let exitDate = createPElemenToVehicleItem("Exit - Hour:" + " " + `${formDate(arrayExitVehicle.exitDate)}`);
      let totalPay = createPElemenToVehicleItem("TOTAL - PAY: $" + " " + `${arrayExitVehicle.balance}`);
      totalPay.classList.add("exit-totalpay");
      let li = document.createElement("li");
      li.append(typePlate, enterDate, exitDate, totalPay);
      li.classList.add("exit-vehicle");
      ulExitVehicle.appendChild(li);
    })
    .catch((err) => console.log(err))
}

searchVehicleButton.addEventListener("click", () => {
  let plate = inputfindPlate.value.toUpperCase();
  findVehicle(plate);
  // clearInput()

});


