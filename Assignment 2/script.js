var cont = document.querySelector(".container")

// fetching data 
async function fetchData() {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => {
            if(!res.ok){
                alert("Network not fetch")
            }else{
                alert("YOUR Data is fetching Plz Enter OK")
                return res.json()
            }
        }).then((data) => {
            console.log(data)
            createCard(data)
        })
}
fetchData()

// creating cards 
function createCard(data) {

    data.forEach((prod) => {
        var div = document.createElement("div")
        div.classList.add("card")
        var imageElement = document.createElement("img")
        imageElement.classList.add("product-image");
        imageElement.src = prod.image
        var titleElement = document.createElement('p')
        titleElement.classList.add('product-title');
        titleElement.textContent = `Title:   ${prod.title}`
        var priceElement = document.createElement('h5')
        priceElement.classList.add('product-price')
        priceElement.textContent = `Price:   ${prod.price} $`
        var ratingElement = document.createElement('h6')
        ratingElement.classList.add("product-rating");
        ratingElement.textContent = `rating : ${prod.rating.rate}`

        div.appendChild(imageElement)
        div.appendChild(titleElement)
        div.appendChild(priceElement)
        div.appendChild(ratingElement)
        cont.appendChild(div)
    })

}