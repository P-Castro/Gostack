import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    // destino dos arquivos
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    // recebe uma funçao
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        // fdf7adad7.png formato do nome do arquivo

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    }
  })
};
