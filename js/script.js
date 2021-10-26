const mainContainer = document.getElementById("main-container");

const row = document.createElement("div");
row.classList.add("row", "row-cols-5");
mainContainer.append(row);

const iconSelect = document.getElementById("icon-select");

//genero lista colori da usare per ogni tipo di icona
let iconColorsList = {
    animal: "blue",
    vegetable: "#ffa500",
    user: "#800080"
};

//genero griglia di icon cards
for (let i = 0; i < iconsList.length; i++) {
    let icon = iconsList[i];
    createIconCard(icon);
}


iconSelect.addEventListener("change", function () {
    row.innerHTML = "";

    const option = this.value;
    console.log(option);

    if (option !== "") {
        let icons = iconsListType(iconsList)[option]
        console.log(icons);
        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i];
            let type = option;
            icon.type = type;
            createIconCard(icon);
        };
    } else{
        for (let i = 0; i < iconsList.length; i++) {
            let icon = iconsList[i];
            createIconCard(icon);
        };
    };



})



















/****************************************************************************/
/* FUNCTIONS */
/****************************************************************************/

/**
 * Restituisce un oggetto le cui chiavi sono array di oggetti aventi tutti lo stesso tipo in comune
 * @param {arrya} iconsList 
 */
function iconsListType(iconsList) {
    let iconsListType = {};
    for (let i = 0; i < iconsList.length; i++) {

        let icon = iconsList[i];
        let { name, prefix, type, family } = icon;

        if (!iconsListType[type]) {

            iconsListType[type] = [];
        }


        iconsListType[type].push({
            name,
            prefix: prefix,
            family: family,
            color: iconColorsList[type]
        });
    }

    return iconsListType;
}


/**
 * Crea la struttura base di un'icon card
 * @param {object} icon 
 */
function createIconCard(icon) {
    const { name, prefix, type, family } = icon;
    let color = iconColorsList[type];
    icon.color = color;

    row.innerHTML += `<div class="col text-center my-5">
                        <div class="text-center fs-1 d-inline-block my_card py-3" style="width: 80%;">
                            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                            <h5 class="text-uppercase">${name}</h5>
                        </div>
                      </div>`
}