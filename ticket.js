
const priemBtns = document.getElementsByClassName("priem")
let count = 0
let count2 = 0
for (let btn of priemBtns) {
    btn.addEventListener("click", function (event) {
        count += 1
        count2 += 550
        // start only 4 element selected
        const addedTitalItem = document.getElementsByClassName("total_added_items")
    //   hidden bus ticket and show success
        if (event.target.innerText == event.target.innerText) {
            document.getElementById("next").removeAttribute("disabled")
            document.getElementById("next").addEventListener("click",function(){
                const success=document.getElementById("success")
                success.classList.remove("hidden")
                const bookingSection=document.getElementById("bookin_section")
                bookingSection.classList.add("hidden")
                console.log("click")
            })
        }
        // coupon calculation
        if (addedTitalItem.length === 4) {
            const applyCuponBtn = document.getElementById("apply_cupon")
            applyCuponBtn.addEventListener("click", function () {
                const applyCupponText = document.getElementById("apply_cuppon_text").value
                if (applyCupponText === "NEW15") {
                    let grandTotalPriceText = document.getElementById("grand_total_price").innerText
                    let grandTotalPrice = parseInt(grandTotalPriceText) - (parseInt(grandTotalPriceText) * 15) / 100
                    document.getElementById("grand_total_price").innerText = grandTotalPrice
                    // hiden the cupon area
                    const cuponArea = document.getElementById("cupon_area")
                    cuponArea.classList.add("hidden")
                }
                else if (applyCupponText === "Couple 20") {
                    let grandTotalPriceText = document.getElementById("grand_total_price").innerText
                    let grandTotalPrice = parseInt(grandTotalPriceText) - (parseInt(grandTotalPriceText) * 20) / 100
                    document.getElementById("grand_total_price").innerText = grandTotalPrice
                    // hiden the cupon area
                    const cuponArea = document.getElementById("cupon_area")
                    cuponArea.classList.add("hidden")
                }
                else {
                    alert("plase type rigt cupon")
                    return;
                }
            })


            alert("plase only for your 4 seats")
            return
        }
        else if (addedTitalItem.length >= 3) {
            document.getElementById("apply_cupon").removeAttribute("disabled")
        }
        // start only 4 element selected
        let targetSeatText = event.target.innerText
        event.target.classList.add("bg-green-700")
        event.target.setAttribute("disabled", "text-red-700")
        // console.log(event.target)

        const totalSeatText = document.getElementById("total_seat").innerText
        const totalSeatNumber = parseInt(totalSeatText)

        // start Selected seat added
        const selectedItems = document.getElementById("select_items")

        const div = document.createElement("div")
        div.classList.add("flex", "justify-between", "total_added_items")

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








        setInnerText("grand_total_price", count2)
        setInnerText("total_price", count2)
        setInnerText("select_count", count)
        setInnerText("total_seat", totalSeatNumber - 1)

    })
}


// set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}