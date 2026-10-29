
let Table = document.createElement('table')
let HeaderRow = document.createElement('tr')
let BodyAddress = document.getElementById("app")

let HeaderData = ['Sino', 'name', 'age', 'marks', 'delete', 'edit']

for (let i = 0; i < HeaderData.length; i++) {
    let HeadTag = document.createElement("th")
    HeadTag.textContent = HeaderData[i]
    HeaderRow.appendChild(HeadTag)
}

Table.appendChild(HeaderRow)
BodyAddress.appendChild(Table)

let sino = 0

// Add button
let addButton = document.createElement("button")
addButton.textContent = "add"
BodyAddress.appendChild(addButton)

addButton.addEventListener("click", function () {

    let Name = prompt("Enter Name")
    if (Name === null || Name.trim() === "") return

    let Age = prompt("Enter the age")
    if (Age === null || Age.trim() === "" ||
        isNaN(Age) || Number(Age) < 0) return

    let Marks = prompt("Enter the marks")
    if (Marks === null || Marks.trim() === "" ||
        isNaN(Marks) || Number(Marks) < 0 ||
        Number(Marks) > 100) return

    let tableRow = document.createElement('tr')

    let Data = [++sino, Name, Number(Age), Number(Marks)]

    for (let i = 0; i < Data.length; i++) {
        let td = document.createElement("td")
        td.textContent = Data[i]
        tableRow.appendChild(td)
    }

    // Delete button
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"

    deleteButton.addEventListener("click", function () {
        tableRow.remove()

        let rows = Table.querySelectorAll("tr")

        for (let i = 1; i < rows.length; i++) {
            rows[i].children[0].textContent = i
        }

        sino = rows.length - 1
    })

    let deleteButtonTd = document.createElement("td")
    deleteButtonTd.appendChild(deleteButton)
    tableRow.appendChild(deleteButtonTd)

    // Edit button
    let editButton = document.createElement("button")
    editButton.textContent = "edit"

    editButton.addEventListener("click", function () {

        let Name = prompt("Enter Name")
        if (Name === null || Name.trim() === "") return

        let Age = prompt("Enter the age")
        if (Age === null || Age.trim() === "" ||
            isNaN(Age) || Number(Age) < 0) return

        let Marks = prompt("Enter the marks")
        if (Marks === null || Marks.trim() === "" ||
            isNaN(Marks) || Number(Marks) < 0 ||
            Number(Marks) > 100) return

        tableRow.children[1].textContent = Name
        tableRow.children[2].textContent = Number(Age)
        tableRow.children[3].textContent = Number(Marks)
    })

    let editButtontd = document.createElement("td")
    editButtontd.appendChild(editButton)
    tableRow.appendChild(editButtontd)

    // Add completed row to table
    Table.appendChild(tableRow)
})
