var images = ["./Sample Pictures/bike-and-car-image.jpg",
   "./Sample Pictures/car image.png",
   "./Sample Pictures/car-1.jpg",
   "./Sample Pictures/car-2.jpg", 
   "./Sample Pictures/car-3.jpg",
   "./Sample Pictures/car-4.jpg",
   "./Sample Pictures/car-5.jpg",
   "./Sample Pictures/car-6.jpg",
   "./Sample Pictures/car-7.jpg",
   "./Sample Pictures/car-8.jpg",
   "./Sample Pictures/car-9.jpg",
   "./Sample Pictures/bike-image.png",
   "./Sample Pictures/bike-1.jpg",
   "./Sample Pictures/bike-2.jpg",
   "./Sample Pictures/bike-3.jpg",
   "./Sample Pictures/bike-4.jpg",
   "./Sample Pictures/bike-5.jpg",
   "./Sample Pictures/bike-6.jpg",
   "./Sample Pictures/bike-7.jpg",
   "./Sample Pictures/bike-8.jpg",
   "./Sample Pictures/bike-9.jpg",
]


var i = 0;
function Next(receive) {
    if (receive === "agay") {
        if(i === images.length-1){

            i=0;
        }else{
            i = i+1
        }

        document.getElementById('picture1').src = images[i];
    }
    else if(receive === "pichy"){
        if(i === 0){
            i = images.length-1
        }else{
            i = i-1
        }
        document.getElementById('picture1').src = images[i]
    }
}
