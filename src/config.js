const config = {
  port: 1337,
 /*
  *  Read and Write image into this directory
  *  Works with relative (e.g. ./photos) and absolute (e.g. /Users/sagarpanda/Downloads) path
  *  To refer application root directory: '.'
  */
  baseUrl: './photos',
 /*
  *  upload input field name
  */
  fieldname: 'photos',
 /*
  *  maximum files upload at a time
  */
  maxFile: 3,
 /*
  *  allowed file extention while readFileSync
  */
  allowedExts: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
  contentType: {
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
    png: 'image/png',
    gif: 'image/gif',
    svg: 'image/svg+xml',
  }
};

export default config;
