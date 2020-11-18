[English](./README.md) | 简体中文
## 字典树使用场景之一
### 预览
![demo.png](https://i.loli.net/2020/11/17/5HnlcSkZe8r9vCP.png)
### 搜索联想DEMO。

1. 导入关键词： 输入字符串并按下``回车键``, 这个字符串将被插入到字典树中。
2. 搜索：输入一些字符, 符合条件的关键词将被展示在输入框下方。

### 实际执行过程.
``` javascript
> let trie = new TrieTree() // 初始化树
> trie.insert('aabc')
< a -> a -> b -> c // 切分字符串,每个字符串尝试顺序匹配树的节点, 若不存在则插入新节点。最后一个字符在匹配或插入树中的节点后会将该节点的isEnd字段置为true用于标识字符串结束。
> trie.search('aabc')
< true // 查找树中是否有相同节点。(按顺序逐一匹配节点并且末尾节点的isEnd字段为true)
> trie.insert('aabcd')
> trie.insert('aabcde')
> trie.insert('aabd')
> trie.startWith('aab')
> ['aabc', 'aabcd', 'aabcde', 'aabd'] // 返回符合要求的关键词数组
```
