const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
console.log("Cliidifd")
styleSwitcherToggle.addEventListener("click", ()=>{
    console.log("Clicked");
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log("Jai Ho")
});

window.addEventListener("scroll", ()=>{
    if( document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})