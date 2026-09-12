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


const certificates=[
    {
    src:"./assets/legacy javascript v8.jpeg",
    name: "Legacy Javascript V8"
},
{
    src:"./assets/python.jpeg",
    name:"Python"
},
{
    src:"./assets/codveda.jpeg",
    name:"Internship Cerificate"
},

{
    src:"./assets/Data visualisation V8.jpeg",
    name:"Data Visualisation"
},

{
    src:"./assets/front end v8.jpeg",
    name:"Front End Libraries"
},
{
    
    src:"./assets/javascript v9.jpeg",
    name:"javascript v9"
},
{
    src:"./assets/legacy javascript v7.jpeg",
    name:"Legacy javascript v7"
},

{
    src:"./assets/legacy repsonsive web v8.jpeg",
    name:"Legacy Responsive web V8"
},
{
    src:"./assets/python.jpeg",
    name:"Python"
},
{
    src:"./assets/Relational Database v8.jpeg",
    name:"Relational Database V8"
},
{
    src:"./assets/relational Database v9.jpeg",
    name:"Relational Database V9"
},
{
    src:"./assets/responsive web v9.jpeg",
    name:"Responsive Web V9"
}
]

const img = document.getElementById("img-src")

const prev = document.getElementById("prev-btn")
const next = document.getElementById("next-btn")
const modal = document.getElementById("image-modal")
const fullImage = document.getElementById("full-image")
const closeModal = document.getElementById("close-modal")

let index = 0

img.src = certificates[index].src

prev.addEventListener("click", () => {

    if (index === 0) {
        index = certificates.length - 1
    }
    else {
        index--
    }

    img.src = certificates[index].src
})

next.addEventListener("click", () => {

    if (index === certificates.length - 1) {
        index = 0
    }
    else {
        index++
    }

    img.src = certificates[index].src
})

img.addEventListener("click", () => {
    fullImage.src = img.src
    modal.style.display = "flex"
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"
    }
})