const bun = document.querySelector(".bun");
const patty = document.querySelector(".patty");
const vegetables = document.querySelector(".vegetables");
const cheese = document.querySelector(".cheese");
const sauce = document.querySelector(".sauce");
const images = document.querySelectorAll(".img");
const square = document.querySelectorAll(".square");
const bunSquare = document.querySelector("#bun");
const pattySquare = document.querySelector("#patty");
const vegetablesSquare = document.querySelector("#vegetables");
const cheeseSquare = document.querySelector("#cheese");
const sauceSquare = document.querySelector("#sauce");
// const add = document.querySelectorAll(".add");
const image = document.querySelectorAll(".images");
const middleSquare = document.querySelector(".middle-square");

// add.forEach(plus =>{
//     image.forEach(img =>{
//             plus.addEventListener("click", ()=>{
//                 const imgs = document.createElement("img");
//                 middleSquare.append(imgs)
//                 imgs.classList.add("image")
//                 const src = img.getAttribute("src");
//                 imgs.setAttribute("src", src);
//             })
//     })
// })

image.forEach(img =>{
    img.addEventListener("click", ()=>{
        const imgs = document.createElement("img");
                middleSquare.append(imgs)
                imgs.classList.add("image")
                const src = img.getAttribute("src");
                imgs.setAttribute("src", src);
    })
})

const showSquare = (ev, squareContent) => {
    square.forEach(item => {
        item.style.display = "none"
    })
    images.forEach(item =>{
        item.classList.remove("active");
    })
    squareContent.style.display = "block";
    ev.target.classList.add("active");
}

bun.addEventListener("click",(ev)=> showSquare(ev, bunSquare));
patty.addEventListener("click",(ev)=> showSquare(ev, pattySquare));
vegetables.addEventListener("click",(ev)=> showSquare(ev, vegetablesSquare));
cheese.addEventListener("click",(ev)=> showSquare(ev, cheeseSquare));
sauce.addEventListener("click",(ev)=> showSquare(ev, sauceSquare));
