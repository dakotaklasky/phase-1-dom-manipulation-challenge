// Your code goes here
const divRoot = document.getElementById("root")
const divApp = document.createElement('div')
divApp.className = "app"

divRoot.appendChild(divApp)

const headerElement = document.createElement('header')
const h1Element = document.createElement('h1')
const spanElement = document.createElement('span')

h1Element.textContent = 'Flatapets'
spanElement.class = "logo"
spanElement.textContent = " 🐈"

divApp.appendChild(headerElement)
headerElement.appendChild(h1Element)
h1Element.appendChild(spanElement)

const ulElement = document.createElement('ul')
ulElement.className = "pet-list"
divApp.appendChild(ulElement)

fetch("http://localhost:3000/pets")
.then(response => response.json())
.then(pets => {
    pets.forEach(pets =>{
        const liElement = document.createElement('li')
        const imgElement = document.createElement('img')
        const h4Element = document.createElement('h4')

        liElement.className = "pet"
        imgElement.src = pets.image
        imgElement.alt = pets.name
        h4Element.textContent = pets.name

        ulElement.appendChild(liElement)
        liElement.appendChild(imgElement)
        liElement.appendChild(h4Element)

    })
})

