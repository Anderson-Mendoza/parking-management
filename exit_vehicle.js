function exitVehicle(plate) {
    fetch(domain + "/api/parking/vehicle/" + plate, {
        method: 'PUT'
    })
        .then((response) => response.json())
        .then((exitDataArray) => {
            console.log(exitDataArray)
        })
        .catch((err) => console.log(err));
}

buttonPay.addEventListener("click", () => {
    let plate = inputfindPlate.value.toUpperCase()
    console.log(plate)
    exitVehicle(plate)
    location.reload()
});
