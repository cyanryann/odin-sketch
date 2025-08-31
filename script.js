const grid = document.querySelector(".grid");
const gridmaker = document.querySelector("#gridmaker");
const colors = document.querySelectorAll(".colors button");
let color = "#000000";
function makeGrid(x = 20) {
    for (let i = 0; i < x; i++)
    {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.justifyContent = "space-between";
        row.style.flexGrow = 1
        grid.append(row);
        for (let k = 0; k < x; k++)
        {
            let cell = document.createElement("div");
            cell.style.flexGrow=1;
            cell.id = "cell";

            row.append(cell);
            cell.addEventListener("mouseenter", () => {
                let ncolor = color;
                cell.style.backgroundColor= ncolor;
                console.log("writing!");
            })
        }
    }
    console.log("building");
}
makeGrid();
function clearGrid() {
    while (grid.childElementCount != 0)
    {
        grid.removeChild(grid.firstElementChild);
        console.log(grid.childElementCount);
    }
    console.log("clearing");

}
gridmaker.addEventListener("click", () => {
    clearGrid();
    let x = prompt("How many rows and columns do you want!");
    x = Math.min(100, x);
    makeGrid(x);
})
colors.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "black")
            color = "#000000";
        if (button.id == "white")
            color = "#FFFFFF";
        if (button.id == "red")
            color = "#FF0000";
        if (button.id == "blue")
            color = "#0000FF";
        if (button.id == "green")
            color = "#008000";
        colors.forEach((button) => {
            button.style.backgroundColor = "#dadadaff";
        })
        button.style.backgroundColor = color;
    })
})
