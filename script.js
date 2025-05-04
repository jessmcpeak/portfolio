(function(){
    `use strict`;
    console.log(`running js`);

    const typefaces = [`courier-new`, `franklin-gothic-medium`, `gill-sans`, `lucida-sans`, `segoe-ui`, `times-new-roman`, `trebuchet-ms`, `arial`, `cambria`, `georgia`, `impact`, `verdana`];

    const fName = document.querySelector(`#f-name`);
    const mI = document.querySelector(`#m-i`);
    const lName = document.querySelector(`#l-name`);

    setInterval(function(){
        fName.setAttribute(`class`, `${typefaces[Math.floor(Math.random() * 12)]}`);
    }, 200);

    setInterval(function(){
        mI.setAttribute(`class`, `${typefaces[Math.floor(Math.random() * 12)]}`);
    }, 100);

    setInterval(function(){
        lName.setAttribute(`class`, `${typefaces[Math.floor(Math.random() * 12)]}`);
    }, 300);
})();