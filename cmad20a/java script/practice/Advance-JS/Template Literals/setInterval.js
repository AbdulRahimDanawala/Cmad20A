let counter = 10;

let intervalId = setInterval(() => {
    console.log(counter)
    counter--
    if (counter === 0) {
        setTimeout(() => {
            console.log("Happy New Year")
            clearInterval(intervalId)
        }, 1000);
    }
}, 1000);
