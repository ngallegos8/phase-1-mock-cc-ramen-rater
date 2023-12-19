
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded")
});

    fetch ("http://localhost:3000/ramens")
    .then (response => response.json())
    .then (ramens => {
        ramensData = ramens;
        ramens.forEach(ramen => {
            renderRamen(ramen)
        })
    })

    const ramenMenu = document.querySelector("#ramen-menu")

    function renderRamen(ramen) {
        // const ramenMenu = document.querySelector("#ramen-menu")
        const img = document.createElement("img")
        img.src = ramen.image
        img.alt = ramen.name
        img.dataset.id = ramen.id
        ramenMenu.append(img)

    }

    function displayRamenDetail(ramen) {
        // const showDetail = document.getElementById(".ramen-detail")
        const name = document.querySelector(".name")
        const restaurant = document.querySelector(".restaurant")
        const image = document.querySelector(".detail-image")

        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")
    
        
        name.textContent = ramen.name
        restaurant.textContent = ramen.restaurant
        image.src = ramen.image

        rating.textContent = ramen.rating
        comment.textContent = ramen.comment
    }

    ramenMenu.addEventListener("click", (event) => {
        if(event.target.matches("img")){
            const ramenId = event.target.dataset.id
            const ramen = ramensData.find(ramen => ramen.id == ramenId);
            displayRamenDetail(ramen);
        }
    });

    const newRamen = document.querySelector("#new-ramen")

    newRamen.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamenDetails = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value,
        id: ramensData.length +1
        }

        console.log(newRamenDetails)
        renderRamen(newRamenDetails)
    })