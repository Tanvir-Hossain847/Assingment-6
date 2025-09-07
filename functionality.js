const loadCategoryBtn = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
fetch(url)
.then((res) => res.json())
.then((json) => displayCatergory(json.categories)
)
};

const loadTrees = (id) =>{
    const treeURL = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(treeURL)
    .then((res) => res.json())
    .then((treeData) => displayCard(treeData.plants)) 
}


// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500


const displayCard = (cards) => {
    //get the div and empty it
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";

    //get each elements
    for(let card of cards){
        // create a div
        const cardsDiv = document.createElement('div')
        cardsDiv.innerHTML = `
        <div class="card bg-white p-4 w-full h-full">
                    
                    <div>
                      <img src="${card.image}" alt="">
                    </div>

                    <div class="py-2">
                      <h3 class="py-2 inter font-semibold text-[14px]">${card.name}</h3>
                      <p class="inter text-[12px] opacity-80">${card.description}</p>
                    </div>

                    <div class="flex items-center justify-between py-2">
                      <h2 class="inter text-[14px] text-[#15803D] bg-[#DCFCE7] rounded-full p-2.5">${card.category}</h2>
                      <p class="inter text-[14px] font-semibold">${card.price}</p>
                    </div>

                    <button class="btn btn-wide bg-[#15803D] rounded-full text-white">Add To Cart</button>
                  </div>
      
        `
        //append
        cardContainer.append(cardsDiv)
    }
}


const displayCatergory = (catergories) => {
    // get the div and empty it
    // console.log(catergories);
    const categoryContainer = document.getElementById("catagory-container")
    categoryContainer.innerHTML = "";
    
    
    // category_name : "Fruit Tree"
    // id : 1
// small_description: "Trees that bear edible fruits like mango, guava, and jackfruit."




    // get each elements
    for(let category of catergories){
        // create a element
        // console.log(category);
        
        const categoryBtns = document.createElement("div")
        categoryBtns.innerHTML = `
        <button onclick= "loadTrees(${category.id})" class="bg-none w-full hover:bg-[#15803D] delay-700 border-none hover:text-white text-left py-2 px-1 inter rounded-[6px]">${category.category_name}</button>
        `

        // append
        categoryContainer.append(categoryBtns);
    }
}



loadCategoryBtn();