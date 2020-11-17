const DEBOUNCE_TIME = 500

const debounce = (fn, delay) => {
  let timer = null
  return function() {
    let ctx = this
    if(timer) clearTimeout(timer)
    timer = setTimeout((...rest) => {
      fn.apply(ctx,rest)
    }, delay)
  }
}

const handleInputChange = () => {
  let content = document.querySelector('#search').value
  let datasource = document.querySelector('#datasource')
  let fragment = document.createDocumentFragment()
  datasource.innerHTML = null
  trie.startWith(content.trim()).forEach(e => {
    const p = document.createElement('p')
    p.innerHTML = e
    fragment.appendChild(p)
  })
  datasource.appendChild(fragment)
}

const handleEnter = (event) => {
  const input = document.querySelector('#search')
  if(event.keyCode===13) {
    trie.insert(input.value.trim())
  }
  document.querySelector('#search').value
}


const main = () => {
  const input = document.querySelector('#search')
  datasource.addEventListener('click', event => {
    input.value = event.target.innerHTML
    handleInputChange()
    input.focus()
  })
  // 监听输入
  input.addEventListener('input', debounce(handleInputChange, DEBOUNCE_TIME))

  // 监听回车
  input.addEventListener('keydown', handleEnter)
}

main()
