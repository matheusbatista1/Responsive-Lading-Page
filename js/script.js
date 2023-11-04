$(window).load(function () {
    $("#slider").nivoSlider();
})

document.addEventListener("DOMContentLoaded", function () {
    const threeLineIcon = document.getElementById("menu-toggle");
    threeLineIcon.addEventListener("click", openMenu);

    function openMenu() {
        const menu = document.querySelector('.menu-principal');

        if (menu.classList.contains("menujs")) {
            menu.classList.add("button-position");
            menu.classList.remove("menujs");
            subMenu.classList.remove("sub-menu-responsive");
            hoverSub.classList.remove("hover-sub-menu-2");
            threeLineIcon.innerHTML = "&#9776";
        } else {
            menu.classList.remove("button-position");
            menu.classList.add("menujs");
            threeLineIcon.innerHTML = "&Cross;";
        }
    }

    const subMenuToggle = document.getElementById("sub-menu-toggle");
    subMenuToggle.addEventListener("click", openSubMenu);

    const subMenu = document.querySelector('.sub-menu');

    function openSubMenu() {


        if (subMenu.classList.contains("sub-menu-responsive")) {
            subMenu.classList.remove("sub-menu-responsive");
            hoverSub.classList.remove("hover-sub-menu-2");
        } else {
            subMenu.classList.add("sub-menu-responsive");
        }
    }

    const hoverSubToggle = document.getElementById("hover-sub-2-toggle");
    hoverSubToggle.addEventListener("click", openHoverSub);

    const hoverSub = document.querySelector('.hover-sub-2');

    function openHoverSub() {

        if (hoverSub.classList.contains("hover-sub-menu-2")) {
            hoverSub.classList.remove("hover-sub-menu-2");
        } else {
            hoverSub.classList.add("hover-sub-menu-2");
        }
    }

})