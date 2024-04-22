/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const grid1ColumnsButton = document.getElementById("grid-1-column");
        const grid3ColumnsButton = document.getElementById("grid-3-columns");
        const productGrid = document.getElementById("product-grid");
    
        grid1ColumnsButton.addEventListener("click", function() {
            productGrid.classList.remove("row-cols-3");
            productGrid.classList.add("row-cols-1");

            grid3ColumnsButton.classList.remove("active");
            grid1ColumnsButton.classList.add("active");

            toggleIconColor(grid1ColumnsButton);
            toggleIconColor(grid3ColumnsButton);
        });
    
        grid3ColumnsButton.addEventListener("click", function() {
            productGrid.classList.remove("row-cols-1");
            productGrid.classList.add("row-cols-3");

            grid1ColumnsButton.classList.remove("active");

            grid3ColumnsButton.classList.add("active");

            toggleIconColor(grid3ColumnsButton);
            toggleIconColor(grid1ColumnsButton);
        });

        function toggleIconColor(button) {
            const icon = button.querySelector("i");
            if (button.classList.contains("active")) {
                icon.classList.add("text-white");
            } else {
                icon.classList.remove("text-white");
            }
        }
    });


})();