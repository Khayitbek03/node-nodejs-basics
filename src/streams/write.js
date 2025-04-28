import {createWriteStream} from 'fs';
const write=async () => {
    const filePath='./src/streams/files/fileToWrite.txt';
    const writableStream=createWriteStream(filePath);

    process.stdin.pipe(writableStream);
};

await write();