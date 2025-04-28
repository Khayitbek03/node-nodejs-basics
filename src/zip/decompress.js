import {createReadStream, createWriteStream, existsSync} from 'fs'
import {rm} from 'node:fs/promises';
import {createGunzip} from 'zlib';
const decompress=async () => {
    const ifilePath='./src/zip/files/archive.gz';
    const ofilepath='./src/zip/files/fileToCompress.txt'
    
    const readStream=createReadStream(ifilePath);
    const gzipStream=createGunzip();
    const writeStream=createWriteStream(ofilepath);

    readStream.pipe(gzipStream).pipe(writeStream);

    if (existsSync(ifilePath)) {
        await rm(ifilePath);
    }
};

await decompress();