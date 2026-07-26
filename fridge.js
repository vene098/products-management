let stock = JSON.parse(localStorage.getItem("lazyStock")) || {};



const container = document.getElementById("fridgeProducts");




function saveStock(){

    localStorage.setItem(
        "lazyStock",
        JSON.stringify(stock)
    );

}





function showFridge(){


    container.innerHTML = "";



    const availableProducts = Object.keys(stock).filter(product => {


        return stock[product] > 0;


    });





    if(availableProducts.length === 0){


        container.innerHTML = `

            <div style="text-align:center; margin-top:40px;">

                <h2>
                    🧊 Το ψυγείο είναι άδειο
                </h2>

                <p>
                    Πρόσθεσε προϊόντα από την αποθήκη
                </p>

            </div>

        `;


        return;


    }







    availableProducts.forEach(product => {



        const card = document.createElement("div");

        card.className = "product-card";





        card.innerHTML = `


            <h3>
                ${product}
            </h3>


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


            saveStock();


            showFridge();


        };






        card.querySelector(".minus").onclick = () => {



            if(stock[product] > 0){


                stock[product]--;


                saveStock();


                showFridge();


            }



        };






        container.appendChild(card);



    });



}






showFridge();







document.getElementById("backButton").onclick = () => {


    window.location.href = "index.html";


};