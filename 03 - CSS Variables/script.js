
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




const inputs = document.querySelectorAll(`input`);

inputs.forEach(input =>{
    input.addEventListener(`input`,()=>{
        const unit = !(input.id===`base`) ? 'px' : "";
        document.documentElement.style.setProperty(`--${input.id}`, `${input.value}${unit}`);
    });
});


