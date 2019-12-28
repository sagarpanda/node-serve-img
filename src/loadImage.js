import fs from 'fs';
import url from 'url';
import config from './config';

const loadImage = (req, res) => {
  const pathname = url.parse(req.url).pathname;
  const extension = pathname.split('.').pop().toLowerCase();
  const reqImgUrl = req.params[0];

  const notAllowed = config.allowedExts.indexOf(extension) === -1;

  // console.log('- - - - - - - - -');
  // console.log('reqImgUrl: ', reqImgUrl);
  // console.log('pathname: ', pathname);
  // console.log('extension: ', extension);
  // console.log('notAllowed: ', notAllowed);

  const file = `${config.baseUrl}/${reqImgUrl}`;
  if(!fs.existsSync(file) || notAllowed) {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  } else {
    const fileToLoad = fs.readFileSync(file);
    res.set('Content-Type', config.contentType[extension]);
    res.status(200).end(fileToLoad, 'binary');
  }
}

export default loadImage;
