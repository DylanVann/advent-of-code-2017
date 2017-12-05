import fs from 'fs'
import path from 'path'
import { checksum, checksumFactors } from './day-2'

const data = fs.readFileSync(path.join(__dirname, './day-2.data.txt'), 'utf-8')

console.log(checksum(data))
console.log(checksumFactors(data))
