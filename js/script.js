const mainContainer = document.getElementById("main-container");

const row = document.createElement("div");
row.classList.add("row", "row-cols-5", "gy-5");
mainContainer.append(row);


for (let i = 0; i < iconsList.length; i++) {
    
    row.innerHTML += `<div class="col text-center">
                        <div class="text-center fs-1 border d-inline-block" style="width: 70%;">
                            <i class="fas fa-cat"></i>
                            <h5>CAT</h5>
                        </div>`

}
