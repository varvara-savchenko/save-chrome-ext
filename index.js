let myInfo = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    myInfo.push(inputEl.value);
    inputEl.value = "";
    renderInfo();
})

function renderInfo() {
    let listItems = "";
    for (let i = 0; i < myInfo.length; i++) {
        listItems += `
        <li>
        <a href=${myInfo[i]} target="_blank">${myInfo[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}
