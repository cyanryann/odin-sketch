const grid = document.querySelector(".grid");
const gridmaker = document.querySelector("#gridmaker");
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
                cell.style.backgroundColor="#000000";
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
