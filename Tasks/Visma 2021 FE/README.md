# Front-End Developer Task

Create an application to manage Pizzeria menu using HTML5, JavaScript and CSS without
using any third party libraries or frameworks.

Requirements:
● Form to add a new pizza to the menu.
○ Must have following properties:
■ name: string // required, unique, max-length 30
■ price: number // required, positive, decimal points 2
■ heat: number // optional, integer, range 1-3
■ toppings: Array<string> // required, min-length 2
■ photo: string // optional. Selection from 3-10 hard coded images
○ ‘Add pizza’ button
■ Adds pizza to the list
● Use sessionStorage to store data
■ Clears form

● Pizza menu:
○ Display all pizzas that are stored in sessionStorage
■ Show info about each pizza (name, price, heat, list of toppings, photo)
■ Toppings should be displayed as comma separated text
■ Heat should be displayed as chilli peppers next to name
● Use svg or png image
■ ‘Delete’ button
● Show confirmation popup before deleting
● Removes pizza when confirmed
○ Possibility to sort by name (default option), price or heat
■ Keep original (oldest to latest) order in sessionStorage

Tips:
● Use https://developer.mozilla.org/ for funcion references
● Do not forget to keep sessionStorage updated
● You can store additional information with each pizza
● Check that validations actually work and think about edge cases
We are looking for an app that meets all of the above criteria as well as present users with
simple and intuitive UI. Clean and easy-to-understand code will play a major part in our scoring.
Push finished code to a git repository and share the link with us.Summer Internship 2021
FAQ
Q: Can I use React/Angular/Vue.js?
A: No. No libraries or frameworks are allowed.
Q: How about Bootstrap?
A: Still no.
Q: How about Fontawesome?
A: You can manage without using it.
Q: So I have to write everything myself?
A: Yes. That is the point of this task.
Q: How long should it take?
A: 2 to 4 hours. Do not spend more than that.

# How to launch

Clone repo.
Open index.html 