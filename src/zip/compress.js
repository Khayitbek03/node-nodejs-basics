import {createReadStream, createWriteStream, existsSync} from 'fs';
import {rm} from 'node:fs/promises';
import {createGzip} from 'zlib';
const compress=async () => {
    const ifilePath='./src/zip/files/fileToCompress.txt';
    const ofilepath='./src/zip/files/archive.gz'
    
    const readStream=createReadStream(ifilePath);
    const gzipStream=createGzip();
    const writeStream=createWriteStream(ofilepath);

    readStream.pipe(gzipStream).pipe(writeStream);

    if (existsSync(ifilePath)) {
        await rm(ifilePath);
    }
};

await compress();