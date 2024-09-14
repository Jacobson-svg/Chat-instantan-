const searchBar = document.querySelector('.users .search input');
var searchButton = document.querySelector('.users .search button');
var img = document.querySelector('.users .search button img');


searchButton.onclick = () => {
    searchBar.classList.toggle('active');
    searchBar.focus();
    searchButton.classList.toggle('active');
    
}
