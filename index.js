const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const container = button.closest(".project-container");

        const hiddenProjects = container.querySelectorAll(".hide-show");

        hiddenProjects.forEach(project => {
            project.classList.toggle("show-project");
        });

        if (button.textContent.trim() === "Read More") {
            button.textContent = "Show Less";
        } else {
            button.textContent = "Read More";
        }

    });

});