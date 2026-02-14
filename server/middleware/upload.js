import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Path to the image folder
const staticDir = path.resolve(__dirname, '..', 'static');

//Create folder if not found
if (!fs.existsSync(staticDir)){
    fs.mkdirSync(staticDir);
}

//Configuring the file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, staticDir),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname) || '.jpg';
        cb(null, `${uuidv4()}${ext}`)
    }
});

const upload = multer({ storage });
export default upload;