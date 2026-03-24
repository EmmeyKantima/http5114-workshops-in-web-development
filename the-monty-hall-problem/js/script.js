window.onload = () => {
    var stayCount = 0;
    var switchCount = 0;

    for (i = 0; i < 10000; i++) {
        var car = Math.ceil(Math.random() * 3);
        console.log("Car is in the door " + car)
        var carOut = document.getElementById("carOut")
        carOut.innerHTML = "Car is in the door " + car


        var choice = Math.ceil(Math.random() * 3);
        console.log("Pick door number " + choice)
        var pickOut = document.getElementById("pickOut")
        pickOut.innerHTML = "Pick door number " + choice

        var remove
        do {
            remove = Math.ceil(Math.random() * 3);

        }

        while (remove == car || remove == choice)

        var carOut = document.getElementById("removeOut")
        removeOut.innerHTML = "Host remove door number " + remove
        console.log("Host remove door number " + remove)

        var resultOut = document.getElementById("result")
        if (car == choice) {
            stayCount++;
        }
        else {
            switchCount++;
        }

    }

    console.log("stay" + stayCount++)
    console.log("switch" + switchCount++)

    var percentage = switchCount / 10000 * 100;
    console.log("percentage " + percentage.toFixed(2) + " % of the time Swicth was correct");
    resultOut.innerHTML = "You should switch because " + percentage.toFixed(2) + " % of the time Swicth was correct";


}