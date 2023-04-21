// write your code here
let menu = document.querySelector("#ramen-menu");

function generateMenu(ramen) {
    let img = document.createElement("img");
    img.src = ramen.image;
    menu.appendChild(img);
    img.addEventListener("click", () => {
        let ramenDetail = document.querySelector("#ramen-detail");
        ramenDetail.children[0].src = ramen.image;
        ramenDetail.children[1].textContent = ramen.name;
        ramenDetail.children[2].textContent = ramen.restaurant;
    })        
    }    

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(json => json.forEach(ramen => generateMenu(ramen)));

    let form = document.querySelector("#new-ramen");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newRamen = {
            name: e.target.children[2].value,
            restaurant: e.target.children[4].value,
            image: e.target.children[6].value,
            rating: e.target.children[8].value,
            comment: e.target.children[10].value,
        }
        generateMenu(newRamen);
    })
})