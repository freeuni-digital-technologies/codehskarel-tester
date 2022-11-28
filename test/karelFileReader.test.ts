import { expect } from 'chai'
import * as fileReader from '../src/karelFileReader'

describe('read the file and extract non exported function', () => {
    it('add move function', () => {
        const submissionFile = process.cwd() + '/test/files/simple.k'
        const { main, karel } = fileReader.setUpSubmission(submissionFile, {})
        main()
        expect(karel.position).eql({ x: 3, y: 1 })
    })
})