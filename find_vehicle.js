function findVehicle(plate) {
  fetch(domain + "/api/parking/vehicle/" + plate)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}


searchVehicleButton.addEventListener("click", () => {
  let plate = inputfindPlate.value.toUpperCase()
  findVehicle(plate)
})
