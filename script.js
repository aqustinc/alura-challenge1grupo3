const inputText = document.querySelector(".input-texto");
const message = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");

function encryptButton() {
  const encrypedText = encrypt(inputText.value);
  message.value = encrypedText;
  message.style.backgroundImage = "none";
  inputText.value = "";
}

function encrypt(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encryptedString = encryptedString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }
  return encryptedString;
}

function unencryptButton() {
  const unencryptedText = unencrypt(inputText.value);
  message.value = unencryptedText;
  inputText.value = "";
}

function unencrypt(unencryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  unencryptedString = unencryptedString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (unencryptedString.includes(matrixCode[i][1])) {
      unencryptedString = unencryptedString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }

  return unencryptedString;
}

function copy() {
  message.select();
  navigator.clipboard.writeText(message.value);
  message.value = "";
  alert("Texto copiado");
}
