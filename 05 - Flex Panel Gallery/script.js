const allPanel = document.querySelectorAll(`.panel`);


allPanel.forEach(panel=> {
    panel.addEventListener(`click`, ()=>{

        //remove every open and translate classlist
        const allParagraph = document.querySelectorAll(`p`);
        allParagraph.forEach(p => p.classList.remove(`translate`));
        allPanel.forEach(panels => panels.classList.remove(`open`));

        //then add to the clicked panel
        const paragraph = panel.querySelectorAll('p:nth-child(odd)');
        paragraph.forEach(p => {
            p.classList.add(`translate`);
        });
        panel.classList.add(`open`);
    })
});

