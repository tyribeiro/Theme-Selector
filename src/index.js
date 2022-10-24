
function initThemeSelector(){
    //define constants
    const themeSelect = document.getElementById("theme-select");
    const themeStyleLink = document.getElementById("theme-link");
    const currentTheme = localStorage.getItem("theme") || "default";

    //function to activate theme
    function activateTheme(theme){
        themeStyleLink.setAttribute("href",`css/${theme}.css`);
    }

    //when user changes value in the drop down, activate them
    // by passing in the value that user clicked
    themeSelect.addEventListener("change", () =>{
        activateTheme(themeSelect.value);
        // save the theme onto local storage 
        localStorage.setItem("theme", themeSelect.value)
    });

    //when page refreshes, saves the current theme value in drop down selector
    themeSelect.value = currentTheme;
    activateTheme(currentTheme);
}

//call as soon as page loads
initThemeSelector();