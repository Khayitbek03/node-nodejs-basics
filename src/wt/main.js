import { Worker } from 'node:worker_threads';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const workerPath = join(__dirname, 'worker.js');

  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath);

        worker.postMessage(10 + i);

        worker.on('message', (data) => {
          resolve({ status: 'resolved', data });
        });

        worker.on('error', () => {
          resolve({ status: 'error', data: null });
        });

        worker.on('exit', (code) => {
          if (code !== 0) {
            resolve({ status: 'error', data: null });
          }
        });
      })
    );
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
