/**
 * @docs 字典树节点构造函数
 */
class TrieNode {
  constructor(value = null) {
    this.value = value // 当前节点值
    this.children = {} // 当前节点后代
    this.isEnd = false // 字符串结束标志
  }
}

/**
 * @docs 字典树构造函数
 */
class TrieTree {
  constructor() {
    this.root = new TrieNode()
    // 搜索关键字与符合条件的搜索列表map { str: []}
    this.searchList = {}
  }

  /**
   * 
   * @param {*} str 插入的字符串
   */
  insert(str) {
    let arr = str.split('')
    let curr = this.root
    for(let i = 0;i < arr.length;i++) {
      let isHaveChildNode = curr.children[arr[i]]
      if(!isHaveChildNode) {
        curr.children[arr[i]] = new TrieNode(arr[i])
      }
      curr = curr.children[arr[i]]
      if(i === arr.length - 1) {
        curr.isEnd = true
      }
    }
  }

  /**
   * 
   * @param {String} str 要搜索的字符串
   * @return {Boolean} 是否存在
   */
  search(str) {
    let arr = str.split('')
    let curr = this.root
    for(let i = 0;i < arr.length;i++) {
      if(!curr.children[arr[i]]) {
        return false
      }
      curr = curr.children[arr[i]]
      if(i === arr.length - 1) {
        return curr.isEnd
      }
    }
    return true
  }

  /**
   * 
   * @param {String} str 搜索关键字
   * @return {String-Array} 公共前缀字符串列表 
   */
  startWith(str) {
    // 缓存处理
    if(this.searchList[str]) {
      delete this.searchList[str]
    }
    this.searchList[str] = []
    let arr = str.split('')
    let curr = this.root
    let singleSearch = []
    for(let i = 0;i < arr.length;i++) {
      if(!curr.children[arr[i]]) {
        return []
      }
      curr = curr.children[arr[i]]

      singleSearch.push(curr.value)
      if(curr.isEnd && i === arr.length - 1) {
        this.searchList[str].push(singleSearch.join(''))
      }
      // 剩余子树进行dfs，若遇到isEnd标志则保存路径，拼接最长公共字符串（即经过的路径）
      if(i === arr.length - 1 && Object.keys(curr.children).length) {
        // 遍历树，保存路径
        this.travelTree(curr.children, str, this.searchList[str])
      }
    }
    return this.searchList[str]
  }

  /**
   * @TODO 找出树的所有路径，返回数组形式，路径为字符串形式
   * @param {*} tree 
   * @param {*} str 
   * @param {*} pathArr 
   */
  travelTree(tree, str, pathArr) {
    let singlePath = []
    
    const dfs = (tree) => {
      
      for(let childNodeKey in tree) {
        if(tree[childNodeKey]) {
          singlePath.push(tree[childNodeKey].value)
          dfs(tree[childNodeKey].children)
        }
        if(tree[childNodeKey].isEnd) {
          pathArr.push(str + singlePath.join(''))
        }
        singlePath.pop()
      }
    } 
    dfs(tree)
  }
}

let trie = new TrieTree()