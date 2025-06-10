/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

////

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")

const conversionData = [
     {
         name: "length",
         metricUnit: "meters",
         imperialUnit: "feet",
         metricToImperialRatio: 3.281,
         imperialToMetricRatio: 0.305,
         outputEl: document.getElementById("length-output")
     },
     {
         name: "volume",
         metricUnit: "liters",
         imperialUnit: "gallons",
         metricToImperialRatio: 0.264,
         imperialToMetricRatio: 3.788,
         outputEl: document.getElementById("volume-output")
     },
     {
         name: "mass",
         metricUnit: "kilos",
         imperialUnit: "pounds",
         metricToImperialRatio: 2.204,
         imperialToMetricRatio: 0.454,
         outputEl: document.getElementById("mass-output")
     }
]

////

function convertValue(value, ratio) {
   return (Math.round(value * ratio * 1000) / 1000).toFixed(3)
}

////

function getText(value, convertedValue, fromUnit, toUnit) {
    return `${value} ${fromUnit} = ${convertedValue} ${toUnit}`
}

////

function convertAllUnits(inputValue) {
    for (let i = 0; i < conversionData.length; i++) {
        let currentConversion = conversionData[i]
        
        // calculate conversions (both ways)
        const metricToImperialValue = convertValue(inputValue, currentConversion.metricToImperialRatio)
        const imperialToMetricValue = convertValue(inputValue, currentConversion.imperialToMetricRatio)
        
        //generate texts
        const text1 = getText(
            inputValue, 
            metricToImperialValue, 
            currentConversion.metricUnit, 
            currentConversion.imperialUnit
        )
        const text2 = getText(
            inputValue,
            imperialToMetricValue,
            currentConversion.imperialUnit,
            currentConversion.metricUnit
        )
        // update DOM
        currentConversion.outputEl.textContent = `${text1} | ${text2}`
    }
}

////

convertBtn.addEventListener("click", function() {
   const inputValue = inputNumber.valueAsNumber
   
   convertAllUnits(inputValue)
})