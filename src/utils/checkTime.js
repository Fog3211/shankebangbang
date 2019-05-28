// 检查时间
function checkDate(t) {
  let ct = new Date();
  if (ct.getFullYear() !== t.getFullYear()) {
    return t.getFullYear() + '-' + formatDate(t.getMonth() + 1) +
      '-' + formatDate(t.getDate());
  } else if (ct.getMonth() !== t.getMonth()) {
    return formatDate(t.getMonth() + 1) + '-' + formatDate(t.getDate());
  } else if (ct.getDate() !== t.getDate()) {
    return formatDate(t.getMonth() + 1) + '-' + formatDate(t.getDate());
  } else {
    return formatDate(t.getHours()) + ':' + formatDate(t.getMinutes());
  }
}
// 格式化时间
function formatDate(t) {
  return t.toString().length === 2 ? t : '0' + t;
}

export {
  checkDate
}
