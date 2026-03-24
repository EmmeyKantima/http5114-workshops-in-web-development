
function accordionClick(section) {
    // console.log("Open");
    // console.log(section);

    //Fecth a referance to all sections
    let sections = document.getElementsByClassName("accordion-section");

    //Loop section show one and hide all other
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    //make selected section visible
    if (sections[section - 1].style.display === "none") {
        sections[section - 1].style.display = "block"
    }
    else {
        sections[section - 1].style.display = "none";
    }

}