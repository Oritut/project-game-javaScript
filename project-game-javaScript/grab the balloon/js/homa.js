const listing = document.getElementById('listing');
const data = ['Item 1', 'Item 2', 'Item 3'];

data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listing.appendChild(li);
});