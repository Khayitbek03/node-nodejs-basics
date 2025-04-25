import {writeFile} from 'node:fs/promises';
import { existsSync } from 'node:fs';

const create=async () => {
    const filePath='./src/fs/files/fresh.txt';
    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        const content='I am fresh and young';
        await writeFile(filePath, content);
    }
};

await create();