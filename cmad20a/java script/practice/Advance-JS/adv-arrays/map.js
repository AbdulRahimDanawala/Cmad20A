let vehicles = [
    { type: "bike", numberOfWheels: 2, engineCapacity: 100 },
    { type: "car", numberOfWheels: 4, engineCapacity: 660 },
    { type: "car", numberOfWheels: 4, engineCapacity: 1300 },
    { type: "rikshaw", numberOfWheels: 3, engineCapacity: 250 },
    { type: "mini truck", numberOfWheels: 6, engineCapacity: 2500 },
    { type: "truck", numberOfWheels: 10, engineCapacity: 6000 },
]
vehicles.forEach((a) => {
    if(a.type === "bike"){
        a.type = "cycle"
    }
})
console.log(vehicles)

let finded = vehicles.findIndex((a)=>{
    return a.engineCapacity === 1300

})
console.log(finded)
