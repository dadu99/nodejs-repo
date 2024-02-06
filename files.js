const fs = require("fs");

fs.readFile("user-data.txt", (err, data) => {
  //read from file
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile("user-data.txt", "username=Max", (err) => {
  //write a file
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file!");
  }
});
