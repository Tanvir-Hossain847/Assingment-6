const loadCategoryBtn = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
fetch(url)
.then((res) => res.json())
.then((json) => displayCatergory(json.categories)
)
};


const removeActive = () =>{
    const alltreebtn = document.querySelectorAll(".all-TreeBtn")
    alltreebtn.forEach((btn => btn.classList.remove("active")))
    
}


const loadTrees = (id) =>{
    manageSpinner(true);
    const treeURL = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(treeURL)
    .then((res) => res.json())
    .then((treeData) => {
        removeActive()
        const btnclicked = document.getElementById(`btn-${id}`)
        btnclicked.classList.add("active")
        displayCard(treeData.plants)
    }) 
};

const loadallTrees = () => {
    manageSpinner(true);
    const alltrees = 'https://openapi.programming-hero.com/api/plants'
    fetch(alltrees)
    .then((res) => res.json())
    .then((alltrees) => {
        removeActive()
        const btnclicked = document.getElementById(`allBtn`)
        btnclicked.classList.add("active")
        displayallTrees(alltrees.plants)
    })
};


const loadDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    // console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((details) => displayDetails(details.plants))
};


const manageSpinner = (status)=>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    }else{
        document.getElementById("card-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
};

const loadCart = (items)=> {
    fetch(`https://openapi.programming-hero.com/api/plant/${items}`)
    .then((res) => res.json())
    .then((cart) => displayCart(cart.plants))
}


const displayCart = (cartItem) => {
    console.log(cartItem);
    const cartContainer = document.getElementById("cart-container")
    cartContainer.innerHTML ="";

        const cartItemBtn = document.createElement('div')
        cartItemBtn.innerHTML = `
        amefasdjfklasdjflkjadsklfhdjksf
        `

        cartContainer.append(cartItemBtn);
}


const displayDetails = (details) => {
    // console.log(details);
    
    const detailsBox = document.getElementById("detail-container");
    detailsBox.innerHTML = `
     <div class="bg-white">
      <h1 class="font-bold inter text-[32px]">${details.name}</h1>
      <img class="py-3 rounded-4xl h-[350px] w-full object-cover" src="${details.image}" alt="">
      <p><span class="inter font-bold">Category:</span> ${details.category}</p>
      <p class="py-3"><span class="inter font-bold">Price:</span> ৳${details.price}</p>
      <p><span class="inter font-bold">Description:</span> ${details.description}</p>
      </div>
    `;
    document.getElementById('my_modal_3').showModal();
};



// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500

const displayallTrees = (trees) => {    
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";
     // all trees
    for(let tree of trees){
        const cardsDiv = document.createElement('div')
        cardsDiv.innerHTML = `
        <div class="card bg-white p-4 h-100">
                    
                    <div>
                      <img class="object-cover rounded-[8px] h-[150px] w-full" src="${tree.image}" alt="">
                    </div>

                    <div class="py-2">
                      <h3 onclick= "loadDetails(${tree.id})" class="py-2 inter font-semibold text-[14px]">${tree.name}</h3>
                      <p class="inter text-[12px] opacity-80 overflow-hidden text-ellipsis line-clamp-3">${tree.description}</p>
                    </div>

                    <div class="flex items-center justify-between py-2">
                      <h2 class="inter text-[14px] text-[#15803D] bg-[#DCFCE7] rounded-full p-2.5">${tree.category}</h2>
                      <p class="inter text-[14px] font-semibold">৳${tree.price}</p>
                    </div>

                    <button onclick="loadCart(${tree.id})" class="btn btn-wide w-full bg-[#15803D] self-end rounded-full text-white">Add To Cart</button>
                  </div>
        `

        cardContainer.append(cardsDiv);
    }
    manageSpinner(false);
}


const displayCard = (cards) => {
    //get the div and empty it
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";

    //get each elements
    for(let card of cards){
        // create a div
        const cardsDiv = document.createElement('div')
        cardsDiv.innerHTML = `
        <div class="card bg-white p-4 h-100">
                    
                    <div>
                      <img class="object-cover rounded-[8px] h-[150px] w-full" src="${card.image}" alt="">
                    </div>

                    <div class="py-2">
                      <h3 onclick= "loadDetails(${card.id})" class="py-2 inter font-semibold text-[14px]">${card.name}</h3>
                      <p class="inter text-[12px] opacity-80 overflow-hidden text-ellipsis line-clamp-3">${card.description}</p>
                    </div>

                    <div class="flex items-center justify-between py-2">
                      <h2 class="inter text-[14px] text-[#15803D] bg-[#DCFCE7] rounded-full p-2.5">${card.category}</h2>
                      <p class="inter text-[14px] font-semibold">৳${card.price}</p>
                    </div>

                    <button onclick="loadCart(${card})" class="btn btn-wide bg-[#15803D] self-end rounded-full text-white">Add To Cart</button>
                  </div>
      
        `
        //append
        cardContainer.append(cardsDiv)
    }
    manageSpinner(false);
}


const displayCatergory = (catergories) => {
    // get the div and empty it
    // console.log(catergories);
    const categoryContainer = document.getElementById("catagory-container")
    categoryContainer.innerHTML = "";
    
    
        const allPlantbtn = document.createElement("div")
        allPlantbtn.innerHTML = `
        <button id="allBtn" onclick= "loadallTrees()" class="bg-none w-full hover:bg-[#15803D] my-1 all-TreeBtn active delay-700 border-none hover:text-white text-left py-2 px-1 inter rounded-[6px]">All Plants</button>
        `
        categoryContainer.appendChild(allPlantbtn);

    // get each elements
    for(let category of catergories){
        // create a element
        // console.log(category);
        

        const categoryBtns = document.createElement("div")
        categoryBtns.innerHTML = `
        <button id="btn-${category.id}" onclick= "loadTrees(${category.id})" class="all-TreeBtn my-1 bg-none w-full hover:bg-[#15803D] delay-700 border-none hover:text-white text-left py-2 px-1 inter rounded-[6px]">${category.category_name}</button>
        `

        // append
        categoryContainer.append(categoryBtns);
    }
}



loadCategoryBtn();
loadallTrees();