const poshtikMenu = [
    {
        name: "Jonna Rotte Wrap",
        category: "Wrap",
        price: 60,
        isMillet: true
    },
    {
        name: "Paneer Protein Bowl",
        category: "Bowl",
        price: 80,
        isMillet: false
    },
    {
        name: "Ragi Sangati Bowl",
        category: "Bowl",
        price: 55,
        isMillet: true
    }
];

for (let i = 0; i < poshtikMenu.length; i++) {
    console.log(poshtikMenu[i]);
}
console.log("dishes modelled:",3);
const checkBtn = document.getElementById("check-order");

checkBtn.addEventListener("click", function () {

    const nameBox = document.getElementById("name");
    const qtyBox = document.getElementById("quantity");

    let customerName = nameBox.value;
    let howMany = qtyBox.value;

    const picked = document.querySelector("input[name='dish']:checked");
    let chosenDish = picked.value;

    console.log("customer name:", customerName);
    console.log("dish ordered:", chosenDish);
    console.log("quantity:", howMany);

    if (customerName === "") {
        console.log("⚠ the name field is empty");
    }

});