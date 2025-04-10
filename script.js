const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let notes = []; 
notes = [
  "Science",
  "Math",
  "English",
  "Banana"
];


searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = ''; 

  if (searchTerm === '') return; 

  const filteredNotes = notes.filter(note => note.toLowerCase().includes(searchTerm));

  filteredNotes.forEach(note => {
    const listItem = document.createElement('li');
    listItem.textContent = note;
    searchResults.appendChild(listItem);
  });
});