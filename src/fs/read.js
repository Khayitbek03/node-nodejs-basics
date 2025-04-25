import fs from 'node:fs'
import fsPromises from 'node:fs/promises';

const read=async () => {
    const filePath='./src/fs/files/fileToRead.txt';
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        const content=await fsPromises.readFile(filePath, 'utf-8');
        console.log(content);
    }
};

await read();