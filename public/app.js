// Sample sheet music database
const sheetMusicDB = [
  {
    title: "Für Elise",
    composer: "Beethoven",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Beethoven_Fur_Elise_sheet_music.png"
  },
  {
    title: "Moonlight Sonata",
    composer: "Beethoven",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Beethoven_Moonlight_Sonata_sheet_music.png"
  },
  {
    title: "Prelude in C Major",
    composer: "Bach",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bach_Prelude_in_C_major_BWV_846_sheet_music.png"
  }
];

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const results = sheetMusicDB.filter(music =>
    music.title.toLowerCase().includes(query) ||
    music.composer.toLowerCase().includes(query)
  );
  displayResults(results);
});

function displayResults(results) {
  resultsDiv.innerHTML = '';
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>No sheet music found.</p>';
    return;
  }
  results.forEach(music => {
    const div = document.createElement('div');
    div.className = 'sheet-music';
    div.innerHTML = `
      <strong>${music.title}</strong> by ${music.composer}
      <button class="print-btn" onclick="printSheet('${music.image}')">Print</button>
      <br><img src="${music.image}" alt="${music.title}" style="max-width:100%;margin-top:8px;">
    `;
    resultsDiv.appendChild(div);
  });
}

window.printSheet = function(imageUrl) {
  const win = window.open('', '_blank');
  win.document.write(`<img src='${imageUrl}' style='width:100%'>`);
  win.print();
  win.close();
};
