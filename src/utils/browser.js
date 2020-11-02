function BrowserType() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Firefox") >= 0) {
    return "Firefox"
  }
  else if (userAgent.indexOf("Chrome") >= 0) {
    return "Chrome"
  }
  else if (userAgent.indexOf("Opera") >= 0) {
    return "Opera"
  }
  else if (userAgent.indexOf("Safari") >= 0) {
    return "Safari"
  }
  if (window.document.documentMode) {
    return 'IE'
  }
  return 'Others'
}



export {
  BrowserType
}