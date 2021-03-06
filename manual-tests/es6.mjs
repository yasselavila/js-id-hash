import { IdHash } from '../dist/esm';

const PREDEFINED_SEED = 'vMtyxn0apz25ViNZBOJ3SjU8Pgcq6ELGTWCdKfwRe47brk1lIoYA9suhDmFHQX';

const hasher = new IdHash(PREDEFINED_SEED);

const m1 = 1000787934679764;
const r1_1 = hasher.encode(m1);
const r1_2 = hasher.decode(r1_1);

console.log(m1, r1_1, r1_1 === 'Bp'); // true
console.log(r1_1, r1_2, r1_2 === m1); // true
