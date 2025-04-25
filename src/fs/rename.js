import fs from 'node:fs';
import {rename as renameFile} from 'node:fs/promises';

const rename=async () => {
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath='./src/fs/files/properFileName.md';

    if (fs.existsSync(newPath)||!fs.existsSync(oldPath)) {
        throw new Error('FS operation failed');
    } else {
        await renameFile(oldPath, newPath);
    }
};

await rename();