const fs = require("fs");
const whatsapp = require("whatsapp-chat-parser");
const moment = require("moment");

moment.locale("en-US");

const fileContents = fs.readFileSync("Whatsapp chat history.txt", "utf8");

// whatsapp.parseString(fileContents).then((data) => {
//   for (const message of data) {
//     console.log(message);
//   }
// });

var result = whatsapp.parseStringSync(fileContents);

var wsMessages = {
  messages: [],
};

for (const message of result) {
  wsMessages.messages.push({
    date: moment(message.date).format("MM/DD/YYYY, h:mm:ss a"),
    author: message.author,
    message: message.message,
  });
}

console.log(wsMessages.messages);
