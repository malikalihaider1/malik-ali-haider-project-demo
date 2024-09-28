

const boxes1 = document.querySelector("#input-boxes1");
const boxes2 = document.querySelector("#input-boxes2");
const form = document.querySelector("#matrix-form");
const sunBtn = document.querySelector("#sum");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const matrixLength= Number(event.target.children[0].value)

    boxes1.innerHTML = ""
    boxes2.innerHTML = ""

   for (let i = 0; i < matrixLength; i++) { 
   for (let j = 0; j < matrixLength; j++) { 
    boxes1.innerHTML += `<input type="number" id="input1${i}${j}" style="width: 30px;" value="0">`;
    boxes2.innerHTML += `<input type="number" id="input2${i}${j}" style="width: 30px;" value="0">`;
    
   }
   boxes1.innerHTML += "<br />"
   boxes2.innerHTML += "<br />"
}
});

sunBtn.addEventListener("click",()=>{
    console.log("Click ho gia");
    
})

for (let i = 0; i < matrixLength; i++) { 
    for (let j = 0; j < matrixLength; j++) { 
        const value = document.querySelector(`#input1${i}${j}`)
        console.log();
        
    }}


