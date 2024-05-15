var saveButton = document.getElementById("saveButton");
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