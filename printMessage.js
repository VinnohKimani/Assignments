function printMessage(message) {
  console.log(message);
}

// printMessage("Good Morning");
function sendMessage(message, callback) {
  callback(message);
}

sendMessage("hello", printMessage);
