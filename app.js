const tableBody = document.getElementById("table-body");

let flights = [
    {
        time:"08:11",
        destination:"OMAN",
        flight:"OX 203",
        gate:"A 01",
        remarks:"On Time"
    },
    {
        time:"12:39",
        destination:"LONDON",
        flight:"CL 320",
        gate:"C 31",
        remarks:"CANCELLED"
    },
    {
        time:"13:31",
        destination:"DUBAI",
        flight:"DXB 201",
        gate:"A 19",
        remarks:"CANCELLED"
    },
    {
        time:"14:01",
        destination:"FRANKFURT",
        flight:"FR 402",
        gate:"B 02",
        remarks:"ON TIME"
    },
    {
        time:"15:22",
        destination:"TOKYO",
        flight:"TK 211",
        gate:"A 32",
        remarks:"DELAYED"
    }   
]

const destinations = ["TOKYO","FRANKFURT","DUBAI","LONDON","OMAN","BEIRUT"];
const remarks = ["ON TIME","DELAYED","CANCLED"];
let hour = 15;

function populateTable(){
    for (const flight of flights){
        const tableRow = document.createElement("tr");
        
        for( const flightDetails in flight ){
            const tableCell = document.createElement("td");
            
            const word = Array.from(flight[flightDetails]);

            for(const [index, letter] of word.entries()){
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
    
                },100*index);
            }

            // tableCell.innerHTML = flight[flightDetails]; // to insert object in table without fliping the words
            tableRow.appendChild(tableCell)
        }

        tableBody.append(tableRow)
    }
}

populateTable();

function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length))
}
function generateRandomNumber(maxNumber){
    const number = "0123456789";
    if(maxNumber){
        const newNumber = number.slice(0,maxNumber + 1 );
        return newNumber.charAt(Math.floor(Math.random()*newNumber.length))
    }
    return number.charAt(Math.floor(Math.random()*number.length))
}
function generateTime(){
    let displayHour = hour;
    if(hour < 24){
        hour++
    }
    if(hour >= 24){
        hour = 1;
        displayHour = hour
    }
    if(hour < 10 ){
        display = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5)+generateRandomNumber()
}

function shuffleUp(){
    flights.shift();
    flights.push({
        time:generateTime(),
        destination: destinations[Math.floor(Math.random()*destinations.length)],
        flight:generateRandomLetter()+generateRandomNumber()+""+generateRandomNumber()+generateRandomNumber(),
        gate:generateRandomLetter()+"" +generateRandomNumber() + generateRandomNumber(),
        remarks:remarks[Math.floor(Math.random()*remarks.length)]
    })
    tableBody.textContent = ""
    populateTable();
}
setInterval(shuffleUp,3000);