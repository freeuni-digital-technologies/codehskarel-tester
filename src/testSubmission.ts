#!/usr/bin/env node

import { KarelTester} from "./karelTester";
import { program } from 'commander'
import * as path from "path";

program
    .requiredOption('-t, --test-file <testFile>', 'test file')
    .requiredOption('-f, --file <file>', 'submission file')
program.parse(process.argv)
const tester = new KarelTester(path.resolve(process.cwd(), program.testFile))
const res = tester.testSubmission(path.resolve(process.cwd(), program.file))

if (process.send) {
    process.send(res)
} else {
    console.log(JSON.stringify(res, null, '\t'))
}
