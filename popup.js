// popup.js

document.addEventListener("DOMContentLoaded", function () {
  var removeNewlinesButton = document.getElementById("removeNewlinesButton");

  removeNewlinesButton.addEventListener("click", function () {
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();",
      },
      function (selectedText) {
        if (selectedText && selectedText[0]) {
          var cleanedText = selectedText[0].replace(/\n/g, " ");
          copyTextToClipboard(cleanedText);
        }
      }
    );
  });
});

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
