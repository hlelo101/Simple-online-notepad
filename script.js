// Store the elements in variables
const textarea = document.querySelector('textarea');
var saveButton = document.getElementById("saveButton");
var openButton = document.getElementById("openButton");
var textaera = document.getElementById("textarea");
var bar = document.getElementById("bar");
var searchButton = document.getElementById("searchButton");
var text;
// Save function
function saveText() {
  text = textaera.value;
  var blob = new Blob([text], { type: "text/plain" });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = "note.txt";
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
}
// Save button
saveButton.addEventListener('click', function() {
  saveText();
});
// Read button
function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
  
    reader.onload = function() {
      let text = reader.result;
      document.getElementById('textarea').value = text;
    };
  
    reader.readAsText(file);
}
// Hide cursor while typing
textarea.addEventListener('keydown', () => {
  document.body.style.cursor = 'none';
});

textarea.addEventListener('blur', () => {
  document.body.style.cursor = 'default';
});

bar.addEventListener('mouseover', function() {
  document.body.style.cursor = 'default';
});
// Save document when CTRL+S is pressed
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      saveText();
  }
});
// Search function
searchButton.addEventListener('click', function() {
  // Put the words from the textarea in an array
  var textareaValue = textarea.value;
  var wordsArray = textareaValue.split(/\s+/);
  console.log(wordsArray);
  // Search
  var searchFor = prompt('Search for:');
  if (wordsArray.includes(searchFor)) {
    console.log('Searched word found');
    var regex = new RegExp('\\b' + searchFor + '\\b', 'gi');
    var index = textarea.value.search(regex);
    if (index !== -1) {
      textarea.focus();
      textarea.setSelectionRange(index, index + searchFor.length);
    } else {
      console.error(searchFor + ' wasn\'t found');
      alert('Error: "' + searchFor + '" wasn\'t found');
    }
  } else {
    // Error handling
    if(searchFor!=null) {
      console.error(searchFor + ' wasn\'t found');
      alert('Error: "' + searchFor + '" wasn\'t found');
    }
  }
});