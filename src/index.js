// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const fileContent = "Newton School";
// const writeFile = async (fileName, fileContent) => {
//   // write code here
//   // dont change function name
// };

// module.exports = { writeFile };




const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";

const writeFile = async (fileName, fileContent) => {
  try {
    // create the file with the given filename and content
    await fs.writeFile(fileName, fileContent);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { writeFile };
