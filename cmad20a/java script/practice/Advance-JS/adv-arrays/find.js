let vehicles = [
    {type:"bike", numOfWheels:2, engineCapacity: 100},
    {type:"car", numOfWheels:4, engineCapacity: 660},
    {type:"car", numOfWheels:4, engineCapacity: 1300},
    {type:"rishaw", numOfWheels:3, engineCapacity: 250},
    {type:"miniTruck", numOfWheels:6, engineCapacity: 2500},
    {type:"truck", numOfWheels:10, engineCapacity: 6000},
]
let vahiclesHavingMoreThan3Wheels = vehicles.find((v)=>{
    return v.numOfWheels >= 4
})
// console.log(vahiclesHavingMoreThan3Wheels)
let eCapacity = vehicles.findIndex(a => a.engineCapacity === 1300)
console.log(eCapacity)