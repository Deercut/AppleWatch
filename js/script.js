//header close button
//Simple condition pour retirer notre croix

const $menuBtn = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main-nav");
const $bag = document.querySelector(".bag");

// use the classList API to remove and add classes

function clickMenuButton(){
    if($menuBtn.classList.contains("-active")){
        $menuBtn.classList.remove("-active")
        $mainNav.classList.remove("-active")
        $bag.classList.remove("-hidden");
    }
    else{
        $menuBtn.classList.add("-active");
        $mainNav.classList.add("-active");
        $bag.classList.add("-hidden");
    }
}

// addEvent listener 

$menuBtn.addEventListener("click", clickMenuButton)