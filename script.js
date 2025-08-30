const grid = document.querySelector(".grid");
function makeGrid() {
    for (let i = 0; i < 16; i++)
    {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "row";
        grid.append(row);
        for (let k = 0; k < 16; k++)
        {
            let cell = document.createElement("div");
            cell.id = "cell";
            row.append(cell);
        }
    }
}
makeGrid();