document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("menu-response");

    // Toggle meny vid klick på hamburgaren
    menuButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Förhindrar att det räknas som ett klick "utanför"
        header.classList.toggle("menu--open");
    });

    // Stäng meny vid klick utanför
    document.addEventListener("click", function (e) {
        if (
            header.classList.contains("menu--open") &&
            !header.contains(e.target)
        ) {
            header.classList.remove("menu--open");
        }
    });

    // Stäng meny om man klickar på en mobil länk
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("menu--open");
        });
    });
});
