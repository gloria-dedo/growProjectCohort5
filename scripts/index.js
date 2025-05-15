// document.addEventListener("scroll", function() {
//     if(window.scrollY > 70) {
//         document.getElementById("nav-header").style.boxShadow ="0 2px 10px rgba(0, 0, 0, 0.1)";
//         document.getElementById("nav-header").style.backgroundColor ="white";
//     }
//     else {
//         document.getElementById("nav-header").style.boxShadow = "none";
//         document.getElementById("nav-header").style.backgroundColor ="transparent";
//     }
// });

document.addEventListener("scroll", () => {
    const navHeader = document.getElementById("nav-header");
    const isScrolled = window.scrollY > 70;

    navHeader.style.boxShadow = isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none";
    navHeader.style.backgroundColor = isScrolled ? "white" : "transparent";
});
