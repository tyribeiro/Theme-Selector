
function initThemeSelector(){
    //define constants
    const themeSelect = document.getElementById("theme-select");
    const themeStyleLink = document.getElementById("theme-link");

    //function to activate theme
    function activateTheme(theme){
        themeStyleLink.setAttribute("href",`css/${theme}.css`);
    }

    //when user changes value in the drop down, activate them
    // by passing in the value that user clicked
    themeSelect.addEventListener("change", () =>{
        activateTheme(themeSelect.value);
    });


    activateTheme(themeSelect.value);
}

//call as soon as page loads
initThemeSelector();