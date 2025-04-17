import fs from 'fs';
import path from 'path';

export const deleteFiles = (filePath: string[]) => {
    const mainDirectory = path.join(process.cwd());
    filePath.forEach(file => {
        fs.rmSync(`${mainDirectory}/src/${file}`)
    })
}