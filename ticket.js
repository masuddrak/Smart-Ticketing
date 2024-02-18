
const priemBtns = document.getElementsByClassName("priem")
let count = 0
for (let btn of priemBtns) {
    btn.addEventListener("click", function (event) {
        count += 1
        let targetSeatText = event.target.innerText
        console.log(event.target.innerText)

        const totalSeatText = document.getElementById("total_seat").innerText
        const totalSeatNumber = parseInt(totalSeatText)

        // start Selected seat added
        const selectedItems = document.getElementById("select_items")

        const div = document.createElement("div")
        div.classList.add("flex", "justify-between")

        const p1 = document.createElement("p")
        p1.innerText = targetSeatText
        div.appendChild(p1)

        const p2 = document.createElement("p")
        p2.innerText = "Economoy"
        div.appendChild(p2)

        const p3 = document.createElement("p")
        p3.innerText = 550
        div.appendChild(p3)

        selectedItems.appendChild(div)
        //end Selected seat added







        setInnerText("select_count", count)
        setInnerText("total_seat", totalSeatNumber - 1)

    })
}


// set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}