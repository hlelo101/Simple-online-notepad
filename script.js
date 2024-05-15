var saveButton = document.getElementById("saveButton");
var openButton = document.getElementById("openButton");
var textaera = document.getElementById("textarea");
var text;

saveButton.addEventListener("click", function() {
    text = textaera.value;
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "note.txt";
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
});

function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
  
    reader.onload = function() {
      let text = reader.result;
      document.getElementById('textarea').value = text;
    };
  
    reader.readAsText(file);
}
