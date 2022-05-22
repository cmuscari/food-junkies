module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    });
  
    return Image;
  };






  // Referenced from Multer Tutorial: https://github.com/bezkoder/nodejs-upload-image-mysql.git

  // module.exports = (sequelize, DataTypes) => {
  //   const Image = sequelize.define("image", {
  //     type: {
  //       type: DataTypes.STRING,
  //     },
  //     name: {
  //       type: DataTypes.STRING,
  //     },
  //     data: {
  //       type: DataTypes.BLOB("long"),
  //     },
  //   });
  
  //   return Image;
  // };
  
  