# Codehskarel-tester
Test karel submissions from codehs using [jskarel](https://github.com/freeuni-digital-technologies/jskarel)

## Coverage
![Statements](https://img.shields.io/badge/statements-74.03%25-red.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-42.85%25-red.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-39.39%25-red.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-86.58%25-yellow.svg?style=flat)

## Usage
### Test File syntax
Module should export these objects:
- config with karel starting position
- list of assertions. Function of karel, returning a chai test case

#### Example
This file checks that karel moved one position north and one position west, and picked up the beeper there

```javascript
const { expect } = require('chai')

const startingX = 2; // can generate a random number instead

module.exports.config = {
    karel: {
        position: [startingX, 2]
    },
    world: {
        beepers: [[startingX + 1, 3]]
    }
}

module.exports.assertions = [
    karel => expect(karel.position).eql({x: startingX + 1, y: 3}, 'karel should finish on 3x3'),
    karel => expect(karel.world.beepers).length(0, 'all beepers should be picked up')
]
```

### As a cli program
Output is a json representation of results (test name with )
```shell
test-codehs-submission --help
Usage: test-codehs-submission [options]

Options:
  -t, --test-file <testFile>  test file
  -f, --file <file>           submission file
```

### As a library

```typescript
import {testSubmission} from "codehskarel-tester";

// will fail the test if submission does not finish running within 2 seconds
testSubmission('./testFile.js', './submission.txt', 2000)
    .then((results: Result[]) => console.log(results))
```

returned object type:
```typescript
interface Result {
    passed?: boolean
    error?: boolean
    details?: string // error details
    message: string // test description
}
```
