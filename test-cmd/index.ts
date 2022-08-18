import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypeStringify from 'rehype-stringify'
import {attacher} from '../src/index.mjs'

const tree = await unified()
    .use(remarkParse)
    .use(attacher, {marker:'Here is a paragraph'})
    .use(remarkRehype)
    .use(rehypeStringify)
    .process('# Hello world!\n' +
        'Here is a paragraph')

// console.log(tree)
console.log(String(tree))
console.log("")
console.log("")
