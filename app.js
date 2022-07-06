const arrows = document.querySelectorAll(".arrow1");
const movieLists = document.querySelectorAll(".movie-list");
let clickCounter = 0;


arrows.forEach((arrow1, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    arrow1.addEventListener("click", () => {
        const ratio=Math.floor(window.innerWidth/330);
        clickCounter++;
        if (itemNumber - (3 + clickCounter)+(4-ratio) > 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
                - 300}px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    });
    console.log(movieLists[i].querySelectorAll("img").length)
});


//toggle 

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})