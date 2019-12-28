import multer from 'multer';
import config from './config';

// Create storage
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, config.baseUrl);
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log('fileFilter file', file);
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).array(config.fieldname, config.maxFile); //Field name and max count

const uploadImage = (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.end('Something went wrong!');
    }
    return res.end('File uploaded sucessfully!');
  });
};

export default uploadImage;
