const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
  getHome: home
};






// Referenced from Multer Tutorial: https://github.com/bezkoder/nodejs-upload-image-mysql.git

// const path = require("path");

// const home = (req, res) => {
//   return res.sendFile(path.join(`${__dirname}/../views/index.html`));
// };

// module.exports = {
//   getHome: home
// };
