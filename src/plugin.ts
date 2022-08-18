import {visit} from 'unist-util-visit';
import type {Root as MdastRoot} from "mdast";
import type {Plugin} from "unified";

// export const transformV1 = () => {
//     console.log("hej")
// }

export interface IOptions {
    marker: string;
}

export const transform = (marker: string) => {
    return (tree: MdastRoot) => {
        const visitor = (node: any) => {
            const {children} = node;
            console.log("childre", children, children.length, children[0].value, children[0].value === marker)
            console.log(children[0].value)
            console.log(marker)
            if (children.length >= 1 && children[0].value === marker) {
                console.log("matching", children, marker)
                node.type = 'code';
                node.children = undefined;
                node.lang = 'js';
                node.value = `const a = 1;`;
            }
        };
        console.log('yay')
        visit(tree, 'paragraph', visitor);
    }
}

type PluginOptions = {
    marker?: string;
};

export const attacher: Plugin<[PluginOptions], MdastRoot> = (config: PluginOptions = {}) => {
    console.log(config)
    return transform(config.marker ?? "");
};
