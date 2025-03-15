
// const spacing = document.getElementById(`spacing`);
// const base = document.getElementById(`base`);
// const blur = document.getElementById(`blur`);


// spacing.addEventListener(`input`,()=>{
//     document.documentElement.style.setProperty('--spacing', `${spacing.value}px`);
// });

// base.addEventListener(`input`,()=>{
//     document.documentElement.style.setProperty('--base', `${base.value}`);
// });

// blur.addEventListener(`input`, ()=> {
//     document.documentElement.style.setProperty('--blur', `${blur.value}px`);
// })




// const inputs = document.querySelectorAll(`input`);

// inputs.forEach(input =>{
//     input.addEventListener(`input`,()=>{
//         const unit = !(input.id===`base`) ? 'px' : "";
//         document.documentElement.style.setProperty(`--${input.id}`, `${input.value}${unit}`);
//     });
// });


//Wes Bos Solution

const inputs = document.querySelectorAll(`.controls input`);
console.log(inputs);

function handleUpdate(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input=> input.addEventListener(`input`, handleUpdate));