// 防抖
let timeout: number | null = null

function debounce(func: Function, wait = 300, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout)
  // 立即执行
  if (immediate) {
    // 第一次会立即执行，后面timeout不为空，则不会执行，直到timeout被重新赋值为null
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null
    }, wait)
    if (callNow) func()
  } else {
    timeout = setTimeout(() => {
      func()
    }, wait)
  }
}

export default debounce;
