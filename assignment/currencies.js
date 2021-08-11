
let arrayRate = [];
let arrayCurrency = [];
let date = new Date();
let dateAfterFiveMins = new Date(date.getTime() + 1 * 5000);
function fetchData(){
    fetch("currencies.json")
    .then(response => response.json())
    .then(data => {
        for (let currency in data.rates) {
            rateData = parseFloat(data.rates[currency].toFixed(4));
            if (rateData < 1.0001){
                rateData = 1.0001;
            }
            let row = currency + ": " + rateData + "\n";
            //document.querySelector("#rates").innerText += row;
            arrayRate.push(rateData);
            arrayCurrency.push(currency);
        }
        let sign = 1;
        setInterval(() => {
            
            setInterval(() => {
                sign *= -1;
            }, 60000);
            setTimeout(() => {
                return;
            }, 300000)
            for (let i = 0; i < arrayRate.length; i++){
                arrayRate[i] += 0.0001 * sign;
                //document.querySelector("#rates").innerText += arrayCurrency[i] + ": " + arrayRate[i].toFixed(4) +"\n";
                document.querySelector("#AUD").innerText = arrayCurrency[0] + ": " + arrayRate[0].toFixed(4) +"\n";
                document.querySelector("#BGN").innerText = arrayCurrency[1] + ": " + arrayRate[1].toFixed(4) +"\n";
                document.querySelector("#GBP").innerText = arrayCurrency[2] + ": " + arrayRate[2].toFixed(4) +"\n";
                document.querySelector("#USD").innerText = arrayCurrency[3] + ": " + arrayRate[3].toFixed(4) +"\n";
                document.querySelector("#UYU").innerText = arrayCurrency[4] + ": " + arrayRate[4].toFixed(4) +"\n";
                document.querySelector("#UZS").innerText = arrayCurrency[5] + ": " + arrayRate[5].toFixed(4) +"\n";
                document.querySelector("#VEF").innerText = arrayCurrency[6] + ": " + arrayRate[6].toFixed(4) +"\n";
                document.querySelector("#VND").innerText = arrayCurrency[7] + ": " + arrayRate[7].toFixed(4) +"\n";
                document.querySelector("#VUV").innerText = arrayCurrency[8] + ": " + arrayRate[8].toFixed(4) +"\n";
                document.querySelector("#WST").innerText = arrayCurrency[9] + ": " + arrayRate[9].toFixed(4) +"\n";
                document.querySelector("#XAG").innerText = arrayCurrency[10] + ": " + arrayRate[10].toFixed(4) +"\n";
                document.querySelector("#XAU").innerText = arrayCurrency[11] + ": " + arrayRate[11].toFixed(4) +"\n";
                document.querySelector("#XCD").innerText = arrayCurrency[12] + ": " + arrayRate[12].toFixed(4) +"\n";
                document.querySelector("#XDR").innerText = arrayCurrency[13] + ": " + arrayRate[13].toFixed(4) +"\n";
            }
            
        }, 5000);
        /*while (new Date(date).getTime() != dateAfterFiveMins.getTime()){
            
            sleep(5000);
            date = Date.now();
        }*/
        
        
    });
}


function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
  }

fetchData();