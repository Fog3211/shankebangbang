// 检查时间
function checkDate(t) {
  let ct = new Date();
  if (ct.getFullYear() !== t.getFullYear()) {
    return t.getFullYear() + '-' + (t.getMonth() + 1);
  } else if (ct.getMonth() !== t.getMonth()) {
    return (t.getMonth() + 1) + '-' + t.getDate();
  } else if (ct.getDate() !== t.getDate()) {
    return (t.getMonth() + 1) + '-' + t.getDate();
  } else {
    return ct.getHours() + ':' + ct.getMinutes();
  }
}
// 格式化时间
function formatDate(t) {
  let year = t.getFullYear();
  let month = t.getMonth() + 1;
  let date = t.getDate();
  let hour = t.getHours();
  let minute = t.getMinutes();
  let second = t.getSeconds();
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

export {
  checkDate,
  formatDate
}
