



// 时间
export const getCurrentTime = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  let currentTime = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekday: weekday[date.getDay()]
  }
  return currentTime
}