import {createHash} from 'crypto';
import {createReadStream} from 'fs';

const calculateHash=async () => {
    const filePath='./src/hash/files/fileToCalculateHashFor.txt';
    const hash=createHash('sha256');
    const stream=createReadStream(filePath);
    
    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('error', (err) => {
        console.error('Error reading file:', err);
    });
    
    stream.on('end', () => {
        const res=hash.digest('hex');
        console.log(res);
    })
};

await calculateHash();