function airlines(){
    var flights = [
    {id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
    {id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
    {id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
    {id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
    {id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
    {id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
    {id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
    {id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
    {id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
    {id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
    ]

    function showName(){
     var promptNew = prompt("What's your name?: ");

        if(promptNew === null || promptNew === ''){
            return showName();
        }else{
            console.log("Hello " + promptNew);
        }
    }

    function showFlightsInfo(){
    flights.forEach(function(obj){
        if(obj.scale === true){
        console.log("El vuelo con origen: " +  obj.from + " y destino: " + obj.to + ", tiene un coste de: " + obj.cost + " con escalas");
        }else{
    console.log("El vuelo con origen: " +  obj.from + " y destino: " + obj.to + ", tiene un coste de: " + obj.cost + " sin escalas")
        }
    });
    }

    function averageCost(){
        var totalCost = 0
        flights.forEach(function(obj){
        totalCost += obj.cost
    });

    console.log("El coste medio de los vuelos es: " + totalCost / flights.length + "€")
    }

    function scale(){
    var totalScale = 0;
    flights.forEach(function(obj){
    totalScale += obj.scale;
    });

    console.log("Hay " + totalScale + " vuelos con escala");
    }

    function showLastId(){
    var result = []

    for(var i = 5; i < flights.length; i++){
    result.push(flights[i]);
    }
    var lastFlights = [];
    result.forEach(function(obj){
    lastFlights.push(obj.to)
    })
    console.log("Los últimos vuelos tienen destino: " + lastFlights.join(', '))
    }


showName()
showFlightsInfo()
averageCost()
scale()
showLastId()
}

airlines()
