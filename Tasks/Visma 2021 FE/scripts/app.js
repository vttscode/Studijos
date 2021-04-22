// Create pizza
function handleSubmit(e) {
    e.preventDefault()
    window.location.reload()

    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let heat = document.getElementById('heat').value
    let toppings = document.getElementById('toppings').value
    let photoElement = document.getElementById("photos")
    let photoText = photoElement.options[photoElement.selectedIndex].text  

    if (sessionStorage.getItem(name)) {
        alert("This pizza already exists!")
    } else {
        if (toppings.length > 1 && toppings.includes(',')  ) {
            let separatedToppings = toppings.split(/,\s*/)         
            const pizza = {
                price: price,
                heat: heat,
                toppings: separatedToppings,
                photo:  photoText
            }
            sessionStorage.setItem(name, JSON.stringify(pizza))
            
            document.getElementById('name').value = ""
            document.getElementById('price').value = ""
            document.getElementById('heat').value = ""
            document.getElementById('toppings').value = ""

        } else {
            alert("Toppings can not be less than 2 and are separated by comma")            
        }
    }
}

// Sort pizza by
function sortPizza(sorted) {
    if (sorted === 'Heat') {
        let heat = []
        Object.entries(sessionStorage).map((item) => {
            heat.unshift([item[0], JSON.parse(item[1])])
        })

        let sortedByHeat = heat.sort((a, b) => a[1]["heat"].localeCompare(b[1]["heat"]))
        let list = document.getElementById("pizzaList")
        if (list) {
            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
        }
        sortedByHeat.forEach((item) => {
            list.innerHTML = list.innerHTML + `<li>Pizza:${item[0]} Heat: ${addChilliImages(item[1].heat)}
            toppings: ${item[1].toppings} Price: $${item[1].price} 
            <img src="images/pizzas/${item[1].photo}.png" alt="pizza"</li> `
        })
    } else {
        let price = []
        Object.entries(sessionStorage).map((item) => {
            price.unshift([item[0], JSON.parse(item[1])])
        })

        let sortedByPrice = price.sort((a, b) => Number(a[1]["price"]) - Number(b[1]["price"]))
        let list = document.getElementById("pizzaList")
        if (list) {
            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
        }

        sortedByPrice.forEach((item) => {
            list.innerHTML = list.innerHTML + `<li>Pizza:${item[0]} Heat:${addChilliImages(item[1].heat)}
            toppings: ${item[1].toppings} Price: $${item[1].price}
            <img src="images/pizzas/${item[1].photo}.png" alt="pizza"</li> `
        })
    }
}

// Add chilli images
function addChilliImages(heat){
    let image = `<img src="images/chilli.png" alt="chilli" >`;
    if (sessionStorage.length !== 0) {
        if (heat == 1) {
            return image;
        } else if (heat == 2) {
            return [image + image];
        } else if (heat == 3) {
            return [image + image + image];
        } else return "";
    }
}

// Add  pizza photo
function addPizzaPhoto(photo) {
    if (sessionStorage.length !== 0) {      
        return `<img src="images/pizzas/${photo}.png" alt="pizza" >`
        } else return ""
    }

// Delete pizza by name
function deletePizza() {
    let pizzaName = prompt("Enter pizza name to delete")
    if (sessionStorage.getItem(pizzaName)) {
        sessionStorage.removeItem(pizzaName)
        window.location.reload()
    }
}

// Load pizza list
function loadPizzaList() {
    let pizzaList = document.getElementById("pizzaList")
    Object.entries(sessionStorage).forEach((value) => {
        let pizza = JSON.parse(value[1])
        pizzaList.innerHTML = pizzaList.innerHTML + `<li> | Pizza:${value[0]}|   |
        Heat:${addChilliImages(pizza.heat)}|  |Toppings: ${pizza.toppings}|   |
        Price: $${pizza.price}|    |${addPizzaPhoto(pizza.photo)} </li> `
    })
}

let selections = document.querySelectorAll('select')
let selection1 = selections[1]
selection1.addEventListener('change', () => sortPizza(selection1.options[selection1.selectedIndex].text))
const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)
loadPizzaList()