// --- Swipe active state for Navbar --- // 
export const initActiveStateNavbar = () => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-item");

    window.onscroll = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 87) {
            current = section.getAttribute("id"); }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");

            if (li.classList.contains(current)) {
                li.classList.add("active");
            }

            if (window.pageYOffset == 0) {
                navLi[0].classList.add("active");
            }
        });
    };
}


// --- Collapse the navbar after a click on a link --- //
export const initCollapseNavbar = () => {
    $(document).ready(function() {
        if (document.documentElement.clientWidth <= 768) {
            $('.nav-link').click(function() {
                $('.navbar-toggler').trigger( "click" );
            });
        }
    });
}
