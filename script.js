let weigthInput=document.getElementById('weightInput')
let heightInput=document.getElementById('heightInput')
let btn=document.getElementById('btn')
let resultDiv=document.getElementById('result');
let weightValueIncrease=document.getElementById('weightValueIncrease')
let heightValueIncrease=document.getElementById('heightValueIncrease')

let weight=10;
let height=100;

weigthInput.addEventListener("input",()=>{
    weight=weigthInput.value;
weightValueIncrease.innerHTML=weigthInput.value
})

heightInput.addEventListener("input",()=>{
    height=heightInput.value
    heightValueIncrease.innerHTML=heightInput.value
    console.log(height)
    })

function calculateBmi(){
    let bmi = ((weight / (height * height)) * 10000).toFixed(2);
    console.log(bmi)
    changeAppaearence(bmi)
}
function changeAppaearence(bmi){
    resultDiv.innerHTML=''
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    if(bmi <= 18.04){
        h1.innerText=bmi;
        p.innerText="UnderWeight"
        resultDiv.style.background="yellow"
    }else if(bmi >= 18.05 && bmi <= 25.00){
        h1.innerText=bmi;
        p.innerText="Normal Weight"
        resultDiv.style.background="green"
    }else if(bmi >= 25.00 && bmi <= 30.00){
        h1.innerText=bmi;
        p.innerText="Over Weight"
        resultDiv.style.background="orange"
    }else{
            h1.innerText=bmi;
            p.innerText="Obese"
            resultDiv.style.background="red"
       
    }
    resultDiv.appendChild(h1);
    resultDiv.appendChild(p);


}

btn.addEventListener('click',calculateBmi);