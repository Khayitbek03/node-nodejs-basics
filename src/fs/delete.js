import {existsSync} from "node:fs"
import { unlink } from "node:fs/promises";

const remove=async () => {
    const filePath='./src/fs/files/fileToRemove.txt';

    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        await unlink(filePath);
    }
};

await remove();