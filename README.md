## Trie tree.
### Search application demo.

1. Input valid string： Type string and press ``Enter``, the string would be inserted into tree.
2. Search：Type some keyword, the valid strings show under the input dom.
3. Demo: [trieTree-search](https://fatdoge.github.io/trieTree-search/)

### Function execute tips.
``` javascript
> let trie = new TrieTree() // Init a new tree
> trie.insert('aabc')
< a -> a -> b -> c // Split the input string,each char matches a node in the tree, if not exists, insert a new node.The end of the string turns the isEnd to true,it means the string is end.
> trie.search('aabc')
< true // Find if tree has the same string.(each char exists in the tree and the isEnd of last char in the tree is true )
> trie.insert('aabcd')
> trie.insert('aabcde')
> trie.insert('aabd')
> trie.startWith('aab')
> ['aabc', 'aabcd', 'aabcde', 'aabd'] // Return the valid strings-array.
```
