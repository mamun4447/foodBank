const fetchData = id => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then((response) => response.json())
        .then((data) => makeFoodCard(data.meals));

}

const makeFoodCard = (data) => {
    const cardElement = document.getElementById("cardElement");

    data.forEach(element => {
        console.log(element)
        const cardMake = document.createElement("div");
        cardMake.innerHTML = `<div onclick="makeOrder()" class="border border-2 rounded m-2 shadow-xl p-2">
        <figure class="px-10 pt-10">
            <img src="${element.strMealThumb}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center py-2">
            <h2 class="text-2xl">${element.strMeal.slice(0,10)}</h2>
            <p class="text-xl">Category: ${element.strCategory}</p>
            
        </div>
        </div>
    `;
        cardElement.appendChild(cardMake);
    });

}

document.getElementById("searchBtn").addEventListener("click", function() {
    const searchField = document.getElementById("searchField");
    const searchValue = searchField.value;
    fetchData(searchValue);
});
fetchData('');