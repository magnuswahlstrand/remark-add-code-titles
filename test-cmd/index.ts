import remarkParse from 'remark-parse'
import {unified} from 'unified'
import {attacher} from '../src/index.mjs'

const tree = unified()
    .use(remarkParse)
    .use(attacher, {title:'hej'})
    .parse('' +
        '# Hello world!\n' +
        'Here is a paragraph')

// console.log(tree)
console.log(tree)
console.log("")
console.log("")

attacher()();
