const allPanel = document.querySelectorAll(`.panel`);


// allPanel.forEach(panel=> {
//     panel.addEventListener(`click`, ()=>{

//         //remove every open and translate classlist
//         // const allParagraph = document.querySelectorAll(`p`);
//         // allParagraph.forEach(p => p.classList.remove(`translate`));
//         // allPanel.forEach(panels => panels.classList.remove(`open`));

//         //then add to the clicked panel
//         const paragraph = panel.querySelectorAll('p:nth-child(odd)');
//         paragraph.forEach(p => {
//             p.classList.toggle(`open-active`);
//         });


//         panel.classList.toggle(`open`);
//     })
// });

allPanel.forEach(panel=> panel.addEventListener(`click`, toggleOpen));
allPanel.forEach(panel=> panel.addEventListener(`transitionend`, toggleActive));


function toggleOpen(e) {
    this.classList.toggle(`open`);
}


// function toggleActive(e) {
//         const paragraph =this.querySelectorAll('p:nth-child(odd)');
//         paragraph.forEach(p => {
//             p.classList.toggle(`open-active`);
//         });
// }


function toggleActive(e) {
    // Ensure that the transitionend event is being triggered by the panel's transition
    const panel = this;
    console.log(panel);
    if (!e.propertyName.includes(`flex`)) return;
    // if (e.propertyName.includes(`transform`)) return;


    // Select all odd <p> elements inside the current panel
    const paragraphs = panel.querySelectorAll('p:nth-of-type(odd)');
    paragraphs.forEach(p => {
        console.log(p);
        p.classList.toggle('open-active');
    });
}


// allPanel.forEach(panel=> {
//     panel.addEventListener(`mouseleave`, ()=>{
//         const paragraph = panel.querySelectorAll('p:nth-child(odd)');
//         paragraph.forEach(p => {
//             p.classList.remove(`open-active`);
//         });
//         panel.classList.remove(`open`);
//     });
// });



//Wes Bos Solution

// const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));