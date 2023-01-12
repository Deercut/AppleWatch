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

// Carrousel des produits

const $bullet = document.querySelectorAll(".bullet");
let $bulletActive = document.querySelector(".bullet.-active");
let $productActive = document.querySelector(".product.-active");

function clickBullet() {
    let $bulletClicket = this;
    $bulletActive.classList.remove("-active");
    $bulletClicket.classList.add("-active");
    $bulletActive = $bulletClicket;

    $productActive.classList.remove("-active");
    let idProduct = $bulletClicket.querySelector("a").getAttribute("href");
    let $cibleProduct = document.querySelector(idProduct);
    $cibleProduct.classList.add("-active");
    $productActive = $cibleProduct;
}

    $bullet.forEach((item)=>{
        item.addEventListener("click", clickBullet);
    })