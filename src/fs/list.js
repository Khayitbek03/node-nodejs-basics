import fs from 'node:fs';
import fsPromises from 'node:fs/promises';

const list=async () => {
    const filesPath='./src/fs/files';
    if (!fs.existsSync(filesPath)) {
        throw Error('FS operation failed');
    } else {
        const files = await fsPromises.readdir(filesPath);
        console.log(files);
    }
};

await list();