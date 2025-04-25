import fs from 'node:fs';
import fsPromises from 'node:fs/promises'

const copy=async () => {
    const filesCopyFolderPath = './src/fs/files_copy';
    const filesFolderPath='./src/fs/files';
    
    if (fs.existsSync(filesCopyFolderPath)|| !fs.existsSync(filesFolderPath)) {
        throw new Error('FS operation failed');
    } else {
        await fsPromises.cp(filesFolderPath, filesCopyFolderPath, {recursive: true});
    }
};

await copy();
