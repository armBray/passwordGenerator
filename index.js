const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const pswLenght = 15
let psw1 = getRandomPsw()
let psw2 = getRandomPsw()
let psws = [psw1, psw2]
console.log(psws)

const buttonGenerator = document.getElementById('generator')
const inputEl1 = document.getElementById('input-1')
const inputEl2 = document.getElementById('input-2')

function getRandomPsw() {
    let randomCharIndex = Math.floor( Math.random()*characters.length )
    let psw = ''
    for (let i=0; i < pswLenght; i++ ) {
        randomCharIndex = Math.floor( Math.random()*characters.length )
        if(characters[randomCharIndex]==='undefined')
            console.log(randomCharIndex)
        psw += characters[randomCharIndex]
    }
    return psw
}

buttonGenerator.addEventListener('click', async () => {
    psw1 = getRandomPsw()
    psw2 = getRandomPsw()
    showPsw(psw1, psw2)
    console.log('Generating...')
    console.log(psw1, psw2)
})

function showPsw(psw1, psw2) {
    inputEl1.textContent = psw1
    inputEl2.textContent = psw2
}


inputEl1.addEventListener('click', async (e) => {
    /*console.log(navigator.clipboard);

    await navigator.clipboard.writeText(inputEl1.innerText)
    .then(() => {
      console.log('The text has been copied');
      alert("Copied the text: " + inputEl1.innerText);
    });*/
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
    /*
    console.log(navigator.clipboard);

    await navigator.clipboard.writeText(inputEl2.innerText)
    .then(() => {
      console.log('The text has been copied');
      alert("Copied the text: " + inputEl2.innerText);
    });*/
    
    
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

/*
for (let i=0; i < characters.length; i++ ) {
    console.log(characters[i])
    if(characters[i]==='undefined')
        console.log(i)
}
*/







