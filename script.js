document.addEventListener("DOMContentLoaded", function () {
    showSection("home");

    const buttons = document.querySelectorAll("#navButtons button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

function showSection(sectionId) {
    const sections = ["home", "academic", "cultural", "blog"];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) section.style.display = "none";
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = "block";
}

function toggleGallery() {
    const gallery = document.getElementById("gallery");
    gallery.style.display = (gallery.style.display === "none" || gallery.style.display === "") ? "block" : "none";
}
