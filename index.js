const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters);

let pswLenght = 15
const slideValue = document.querySelector(".sliderValue");
const inputSlider = document.querySelector("input");
inputSlider.oninput = () => {
    let value = inputSlider.value;
	slideValue.textContent = value;
    pswLenght = inputSlider.value
};

// let psw1 = getRandomPsw()
// let psw2 = getRandomPsw()
// let psws = [psw1, psw2]
// console.log(psws)

const buttonGenerator = document.getElementById('generator')
const inputEl1 = document.getElementById('input-1')
const inputEl2 = document.getElementById('input-2')
const checkElABC = document.getElementById('uppercase')
const checkElabc = document.getElementById('lowercase')
const checkElnumber = document.getElementById('number')
const checkElspecials = document.getElementById('specials')

function getRandomPsw() {
    let filteredArray = ''
    if(!checkElABC.checked && !checkElabc.checked && !checkElnumber.checked && !checkElspecials.checked){
        alert("Please select at least a check!");
        return ''
    }
    if (checkElABC.checked) {
        filteredArray += characters.filter((char) => char.match(/[A-Z]/g)).join("")
        console.log('ABC checked');
    }
    if (checkElabc.checked) {
        filteredArray += characters.filter((char) => char.match(/[a-z]/g)).join("")
        console.log('abc checked');
    }
    if (checkElnumber.checked) {
        filteredArray += characters.filter((char) => char.match(/[0-9]+/)).join("")
        console.log('123 checked');
    }
    if (checkElspecials.checked) {
        filteredArray += characters.filter((char) => char.match(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)).join("")
        console.log('specials checked');
    }
    console.log(filteredArray.length);
    console.log(filteredArray);
    
    let psw = ''
    let randomCharIndex = Math.floor( Math.random()*filteredArray.length )
    for (let i=0; i < pswLenght; i++ ) {
        randomCharIndex = Math.floor( Math.random()*filteredArray.length )
        if(filteredArray[randomCharIndex]==='undefined')
            console.log(randomCharIndex)
        psw += filteredArray[randomCharIndex]
    }
    return psw
}

buttonGenerator.addEventListener('click', async () => {
    psw1 = getRandomPsw()
    psw2 = getRandomPsw()
    showPsw(psw1, psw2)
    console.log('Generating password...')
    console.log('Length: ' + pswLenght)
    console.log(psw1, psw2)
})

function showPsw(psw1, psw2) {
    inputEl1.textContent = psw1
    inputEl2.textContent = psw2
}


inputEl1.addEventListener('click', async (e) => {
    console.log(e.currentTarget.getAttribute("id"))
    console.log(e.target.innerText)
    
    const text = e.target.innerText;
    if(text.length>0){
        await navigator.clipboard.writeText(text).then(()=>{
        alert("Copied to Clipboard!");
    })
    } else {
        alert('Please hit "Generate password" button first')
    }
})
inputEl2.addEventListener('click', async (e) => {
    
    console.log(e.currentTarget.getAttribute("id"))
    console.log(e.target.innerText)
    
    const text = e.target.innerText;
    if(text.length>0){
        await navigator.clipboard.writeText(text).then(()=>{
        alert("Copied to Clipboard!");
    })
    } else {
        alert('Please hit "Generate password" button first')
    }
})







