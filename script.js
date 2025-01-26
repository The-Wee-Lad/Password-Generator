console.log("Journey Starts");
const buttons = document.querySelector(".buttonWrapper");
const checkboxes = document.querySelector(".checkboxes");
const slider = document.querySelector('.slider');
const Numbers = "1234567890",
    Upper="QWERTYUIOPASDFGHJKLZXCVBNM",
    Lower="qwertyuiopasdfghjklzxcvbnm",
    Symbols="~`!@#$%^&*()-_=+{}[]|\\:\";'<>,.?/ ";
const choice = {Numbers, Upper, Lower, Symbols};

const getRandomValue = (min,max) => {
    if(max<min) [max,min] = [min,max];
    return Math.floor(Math.random()*(max-min)+min);
}

let poolString = "";
const generatePoolString = () => {
    let count = 0;
    poolString = "";
    let nodelist = document.querySelectorAll("[name=checkBox]");
    nodelist.forEach(element => {
        if(element.checked){
            count++;
            poolString +=choice[element.value];
        }
    });
    if(count < 2)
        return false;
    return true;
}   

const generateFinalString = () => {
    let max = poolString.length;
    let min = 0;
    let finalString = "";
    for(let i = 0; i < slider.value; i++){
        finalString+=poolString[getRandomValue(min,max)];
    }
    return finalString;
} 

const check = (event) => {
    const value = generatePoolString();
    if(!value){
        alert("No No No That would be stupid.");
        event.target.checked = true;
    }
    document.querySelector(".sliderText.box").textContent
        = slider.value;
}


const doButtonStuff = function(event){
    let targetClassList = event.target.classList;
    if(targetClassList[1] === 'gen'){
        const finalString = generateFinalString();
        document.querySelector(".textArea").value=
            finalString;     
    }
    if(targetClassList[1] === 'cop'){
        navigator.clipboard.writeText(document.querySelector(".textArea").value);
        setTimeout(() => {
            
        }, 2000);
    }
};

checkboxes.addEventListener('input',check)
buttons.addEventListener('click',doButtonStuff);
generatePoolString();
document.querySelector(".sliderText.box").textContent
        = slider.value;