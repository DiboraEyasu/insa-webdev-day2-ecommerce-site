const searchButton = document.getElementById('searchBtn');
const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');
console.log('Products JS file loaded');

const heading = document.getElementByTagName('title')

//searchButton.addEventListener('click',)

const products = [
    {
        name: 'Antique Chairs',
        category: 'Chairs',
        price: $120
    },
    {
        name: 'Modern chairs',
        category: 'Chairs',
        price: $110
    },
    {
        name: 'Oak Wood Table',
        category: 'Tables',
        price: $350
    },
    {
        name: 'Carved Frame',
        category: 'Decor',
        price: $45
    }
]

searchButton.addEventListener('click', performSearch);

searchForm.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        performSearch();
    }
}
)

function performSearch(){
    results.innerHTML = '';

    const query = searchInput.value.toLowerCase().trim();
    if (query === ''){
        results.innerHTML = '<p>Please enter a search item.</p>';
    }
    console.log('Searching for:', query);

    const filteredItems = products.filter(items=> items.toLowerCase().includes(query));
        if(filteredItems.length > 0){
        filteredItems.forEach(foundItem => {
            const resultParagraph = document.createElement('p');
            resultParagraph.textContent = foundItem; 
            results.appendChild(foundItem);
        });
    }
        else{
            results.innerHTML = <p class="no-results">No Results Found </p> 
        }
   
}