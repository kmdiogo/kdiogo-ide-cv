// Code from https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
// This file simply refactors the linked code to an ES6 class
// and slightly augments the logic to support case insensitive searches

class TrieNode {
    key?: string
    parent?: TrieNode = undefined
    children: {[key: string]: TrieNode} = {}
    end: boolean = false
    constructor(key?: string) {
        this.key = key
    }

    /**
     * Iterates through the parents to get the word.
     * Time complexity: O(k), k = word length
     */
    getWord() {
        const output = []
        let node: TrieNode | undefined = this
        while (node !== undefined) {
            output.unshift(node.key)
            node = node.parent
        }
        return output.join('')
    }
}

/**
 * Recursive function to find all words in the given node.
 */
function findAllWords(node: TrieNode, arr: string[]) {
    // base case, if node is at a word, push to output
    if (node.end) {
        arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
        findAllWords(node.children[child], arr);
    }
}

export class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * Inserts a word into the trie.
     * Time complexity: O(k), k = word length
     */
    insert(word: string) {
        let node = this.root; // we start at the root 😬

        // for every character in the word
        for(let i = 0; i < word.length; i++) {
            // check to see if character node exists in children.
            if (!node.children[word[i]]) {
                // if it doesn't exist, we then create it.
                node.children[word[i]] = new TrieNode(word[i]);

                // we also assign the parent to the child node.
                node.children[word[i]].parent = node;
            }

            // proceed to the next depth in the trie.
            node = node.children[word[i]];

            // finally, we check to see if it's the last word.
            if (i == word.length-1) {
                // if it is, we set the end flag to true.
                node.end = true;
            }
        }
    }

    /**
     * Check if it contains a whole word.
     * Time complexity: O(k), k = word length
     */
    contains(word: string) {
        let node = this.root;

        // for every character in the word
        for(let i = 0; i < word.length; i++) {
            // check to see if character node exists in children.
            if (node.children[word[i]]) {
                // if it exists, proceed to the next depth of the trie.
                node = node.children[word[i]];
            } else {
                // doesn't exist, return false since it's not a valid word.
                return false;
            }
        }

        // we finished going through all the words, but is it a whole word?
        return node.end;
    }

    /**
     * Returns every word with given prefix.
     * Time complexity: O(p + n), p = prefix length, n = number of child paths
     */
    find(prefix: string, caseSensitive = true) {
        let node = this.root;
        const output: string[] = [];

        // for every character in the prefix
        for(let i = 0; i < prefix.length; i++) {
            // make sure prefix actually has words
            const charChecks = caseSensitive ? [prefix[i]] : [prefix[i].toLowerCase(), prefix[i].toUpperCase()]
            let foundChild = false
            for (const char of charChecks) {
                if (node.children[char]) {
                    node = node.children[char];
                    foundChild = true
                    break
                }
            }
            if (!foundChild) {
                // there's none. just return it.
                return output;
            }
        }

        // recursively find all words in the node
        findAllWords(node, output);

        return output;
    }

    getStem() {
        function getStemNode(node: TrieNode): TrieNode {
            const childrenKeys = Object.keys(node.children)
            if (childrenKeys.length === 0 || childrenKeys.length > 1) {
                return node
            }
            return getStemNode(node.children[childrenKeys[0]])
        }
        const stemNode = getStemNode(this.root)
        return stemNode.getWord()
    }

    wordList() {
        const output: string[] = []
        findAllWords(this.root, output)
        return output
    }

}
