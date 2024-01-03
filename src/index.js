
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


//STEPHEN SOLUTION WITH ADVANCED DELIVERABLES

// const ramenMenu = document.querySelector("#ramen-menu")
// const ramenImage = document.querySelector(".detail-image")
// const ramenName = document.querySelector(".name")
// const ramenRestaurant = document.querySelector(".restaurant")
// const ramenRating = document.querySelector("#rating-display")
// const ramenComment = document.querySelector("#comment-display")
// let globalRamen;
// const newRamen = document.querySelector("#new-ramen")
// const deleteButton = document.querySelector("#delete-ramen")
// const updateRamen = document.querySelector("#edit-ramen")
// document.addEventListener("DOMContentLoaded", ()=> {
//     fetch("http://localhost:3000/ramens")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach((ramen) => {
//             displayImage(ramen)
//         })
//         showDetails(data[0])
//         globalRamen = data[0].id
//     })

//     function displayImage(ramen){
//         console.log(ramen)
//         let img = document.createElement("img")
//         img.src = ramen.image
//         img.id = `id${ramen.id}`
//         ramenMenu.appendChild(img)
//         img.addEventListener("click", ()=> {
//             console.log(ramen)
//             showDetails(ramen)
//             update(ramen)
//             globalRamen = ramen.id
//         })


//     }
//     function showDetails(ramen){
//         console.log(ramen)
//         ramenImage.src = ramen.image
//         ramenName.textContent = ramen.name
//         ramenRestaurant.textContent = ramen.restaurant
//         ramenRating.textContent = ramen.rating
//         ramenComment.textContent = ramen.comment
//     }
//     newRamen.addEventListener("submit", (e)=> {
//         addNewRamen(e)
//     })

//     function addNewRamen(event){
//         event.preventDefault()
//         let newRamen = {
//             name: event.target["new-name"].value,
//             restaurant: event.target["new-restaurant"].value,
//             rating: event.target["new-rating"].value,
//             comment: event.target["new-comment"].value,
//             image: event.target["new-image"].value
//         }


//         fetch('http://localhost:3000/ramens', {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(newRamen)
//         })

//         displayImage(newRamen)

//     }

//     deleteButton.addEventListener("click", ()=> {
//         deleteRamen();
//     })

//     function deleteRamen(){
//         console.log(globalRamen)
//         showDetails({
//             name: "",
//             restaurant: "",
//             rating: 0,
//             comment: "",
//             image: ""
//         })

//         // fetch(`http://localhost:3000/ramens/${globalRamen}` or + globalRamen)
//         fetch(`http://localhost:3000/ramens/${globalRamen}`, {
//             method: "DELETE",
//         })
        

//     }

//     // updateRamen.addEventListener("submit", (e) => {
//     //     update(e)
//     // })

//     function update(ramen){
//         console.log(ramen)

//         let rating = document.getElementById("new-rating")
//         rating.value = ramen.rating
//         let comment = document.getElementById("new-comment")
//         comment.textContent = ramen.comment
//         let name = document.getElementById("new-name")
//         name.value = ramen.name
//         let restaurant = document.getElementById("new-restaurant")
//         restaurant.value = ramen.restaurant
//         let image = document.getElementById("new-image")
//         image.value = ramen.image

//         updateRamen.addEventListener("submit", (e)=> {
//             e.preventDefault()
//             let newRamen = {
//                 name: name.value,
//                 restaurant: restaurant.value,
//                 image: image.value, 
//                 rating: rating.value,
//                 comment: comment.value
//             }
//             fetch(`http://localhost:3000/ramens/${ramen.id}`, {
//                 method: "PATCH",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify(newRamen)
//             })
//             showDetails(newRamen)
//         })


//     }


// })