const conversionData = [
   {
      name: "length",
      metricUnit: "meters",
      imperialUnit: "feet",
      metricToImperialRatio: 3.281,
      outputEl: document.getElementById("length-output")
   },
   {
      name: "volume",
      metricUnit: "liters",
      imperialUnit: "gallons",
      metricToImperialRatio: 0.264,
      outputEl: document.getElementById("volume-output")
   },
   {
      name: "mass",
      metricUnit: "kilos",
      imperialUnit: "pounds",
      metricToImperialRatio: 2.204,
      outputEl: document.getElementById("mass-output")
   }
]

const inputEl = document.getElementById("input-el")

// calculate conversions (both ways) and apply units
function formatConversion(value, ratio, fromUnit, toUnit) {
   const convertedValue = (value * ratio).toFixed(3)
   return `${value} ${fromUnit} = ${convertedValue} ${toUnit}`
}

function convertAllUnits(inputValue) {
   // validacion minima para evitar NaN
   if (isNaN(inputValue) || inputValue <= 0) {
      conversionData.forEach(({ outputEl }) => {
         outputEl.textContent = "Please enter a valid number"
      })
      return
   }

   conversionData.forEach(({ metricUnit, imperialUnit, metricToImperialRatio, outputEl }) => {
      const conversions = [
         { ratio: metricToImperialRatio, fromUnit: metricUnit, toUnit: imperialUnit },
         { ratio: 1 / metricToImperialRatio, fromUnit: imperialUnit, toUnit: metricUnit }
      ]

      //generate texts
      const conversionTexts = conversions.map(({ ratio, fromUnit, toUnit }) => 
         formatConversion(inputValue, ratio, fromUnit, toUnit)
      )

      // update DOM
      outputEl.textContent = conversionTexts.join(" | ")
   })
}

document.getElementById("convert-btn").addEventListener("click", () => {
   convertAllUnits(inputEl.valueAsNumber)
})

document.getElementById("input-el").addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
      convertAllUnits(inputEl.valueAsNumber)
   }
})