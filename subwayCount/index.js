let countId = document.getElementById("count")
let count = 0
let saveEntry = document.getElementById("save-entry")

function increment(){
    count = count + 1
    countId.innerText = count
}

function save(){
    saveEntry.innerText += " "+count+" -"
    countId.innerText = 0
    count = 0
}