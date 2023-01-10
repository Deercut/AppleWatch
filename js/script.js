//header close button
//Simple condition pour retirer notre croix

const $menuBtn = document.querySelector(".menu-button");

// use the classList API to remove and add classes

function clickMenuButton(){
    if($menuBtn.classList.contains("-active")){
        $menuBtn.classList.remove("-active")
    }
    else{
        $menuBtn.classList.add("-active");
    }
}

// addEvent listener 

$menuBtn.addEventListener("click", clickMenuButton)