const products = [
    "Detox Energy",
    "Amita φρουτοποτο",
    "Amita Motion",
    "Amita Peach",
    "Amita Visino",
    "Amita Fun Κόκκινο",
    "Amita Fun Μπλε",
    "Fuse Peach",
    "Fuse Λεμόνι",
    "Schweppes Tonic",
    "Fuse Passion",
    "Coca Cola",
    "Coca Cola Zero Zero",
    "Coca Cola Zero",
    "Coca Cola Light",
    "Fanta Πορτοκάλι",
    "Schweppes Grape",
    "Sprite",
    "Fanta Free Μπλε",
    "Fanta Lemon",
    "Schweppes Soda",
    "Sol",
    "Farland",
    "0.0",
    "Radler",
    "Milo Klefti",
    "Fischer",
    "Murphy's",
    "Alfa",
    "Mamos",
    "Heineken",
    "Vikos Pink",
    "Vikos Βύσσινο",
    "Vikos Soda",
    "Three Cents Ginger Beer",
    "Three Cents Pink",
    "Red Bull",
    "Red Bull Free",
    "Monster Mango",
    "Monster White",
    "Monster Black"
];


let stock = JSON.parse(localStorage.getItem("lazyStock")) || {};



products.forEach(product => {

    if(stock[product] === undefined){

        stock[product] = 0;

    }

});



function saveStock(){

    localStorage.setItem(
        "lazyStock",
        JSON.stringify(stock)
    );

}




const productsDiv = document.getElementById("products");

const searchInput = document.querySelector(".search input");




function showProducts(list){


    productsDiv.innerHTML = "";



    list.forEach(product => {



        const card = document.createElement("div");

        card.className = "product-card";



        card.innerHTML = `

            <h3>${product}</h3>


            <div class="controls">

                <button class="minus">
                    -
                </button>


                <span>
                    ${stock[product]}
                </span>


                <button class="plus">
                    +
                </button>

            </div>

        `;



        const number = card.querySelector("span");



        card.querySelector(".plus").onclick = () => {


            stock[product]++;

            number.textContent = stock[product];

            saveStock();


        };




        card.querySelector(".minus").onclick = () => {



            if(stock[product] > 0){


                stock[product]--;


                number.textContent = stock[product];


                saveStock();


            }


        };



        productsDiv.appendChild(card);



    });


}





showProducts(products);






searchInput.addEventListener("input", () => {



    const text = searchInput.value.toLowerCase();



    const filteredProducts = products.filter(product =>


        product.toLowerCase().includes(text)


    );



    showProducts(filteredProducts);



});







const fridgeButton = document.getElementById("fridgeButton");



fridgeButton.onclick = () => {


    window.location.href = "fridge.html";


};







// Ενεργοποίηση εφαρμογής PWA

if("serviceWorker" in navigator){


    navigator.serviceWorker.register("sw.js")

    .then(() => {

        console.log("LazyLeaf App Ready");

    });


}