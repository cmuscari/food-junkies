const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data
      );

      return res.send(`Photo has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload photo: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};







// Referenced from Multer Tutorial: https://github.com/bezkoder/nodejs-upload-image-mysql.git

// const fs = require("fs");

// const db = require("../models");
// const Image = db.images;

// const uploadFiles = async (req, res) => {
//   try {
//     console.log(req.file);

//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }

//     Image.create({
//       type: req.file.mimetype,
//       name: req.file.originalname,
//       data: fs.readFileSync(
//         __basedir + "/resources/static/assets/uploads/" + req.file.filename
//       ),
//     }).then((image) => {
//       fs.writeFileSync(
//         __basedir + "/resources/static/assets/tmp/" + image.name,
//         image.data
//       );

//       return res.send(`Photo has been uploaded.`);
//     });
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying upload photo: ${error}`);
//   }
// };

// module.exports = {
//   uploadFiles,
// };
