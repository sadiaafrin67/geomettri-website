function areaCalc(){
 const baseFiled = document.getElementById('base')
 const baseFiledString = baseFiled.value 
 const newBase = parseFloat(baseFiledString)



 const hightFiled = document.getElementById('height')
 const hightFiledString = hightFiled.value 
 const newhight = parseFloat(hightFiledString)

 const preArea = 0.5 * newBase * newhight
 
 const newArea = document.getElementById('area')
 newArea.innerText = preArea

}




function recAreaCalc(){
 const weiFiled = document.getElementById('wight')
 const weiFiledString = weiFiled.value 
 const newWeight = parseFloat(weiFiledString)



 const lenFiled = document.getElementById('length')
 const lenFiledString = lenFiled.value 
 const newLenght = parseFloat(lenFiledString)

 const recPreArea = newWeight * newLenght
 
 const recNewArea = document.getElementById('rec-area')
 recNewArea.innerText = recPreArea

}

// reuse functions
function paraAreaCalc(){
   const weight = getInputValue('para-wight')
   const hight = getInputValue('para-length')

   if(isNaN(weight) || isNaN(hight)){
    alert('Not a number')
    return;
   }

   const area = weight * hight
   setTextValue('para-area', area)
}

function elipsAreaCalc(){
    const majorArea = getInputValue('elips-major')
    const minoeArea = getInputValue('elips-minor')
    const value = 3.14 * majorArea * minoeArea
    const short = value.toFixed(2)
    setTextValue('elips-area', short)
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputFieldString =inputField.value 
    const value = parseFloat(inputFieldString)
    return value;
}

function setTextValue(elementId, area){
    const TextValue = document.getElementById(elementId)
    TextValue.innerText = area
}