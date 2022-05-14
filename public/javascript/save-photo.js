const fs = require('fs');


const savePhoto = photoName => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../images/' + photoName, photoName, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Photo saved to file system!'
            });
            console.log('Photo saved to file system!');
        });
    });
};




module.exports = savePhoto;

savePhoto('test-photo.jpg');
// change 'test-photo.jpg' to the value that is entered in the photo upload form - will this capture the actual photo, or just the name?

