
const priemBtns = document.getElementsByClassName("priem")
let count = 0
for (let btn of priemBtns) {
    btn.addEventListener("click", function (event) {
        count += 1
        const totalSeatText = document.getElementById("total_seat").innerText
        const totalSeatNumber=parseInt(totalSeatText)

        
        setInnerText("select_count", count)
        setInnerText("total_seat",totalSeatNumber-1)
    
    })
}


// set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}