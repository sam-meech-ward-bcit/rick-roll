
window.request = {
  getSync(url) {
    var request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
  },
  get(url, cb) {
    axios.get(url)
    .then(result => cb(null, result.data))
    .catch(error => cb(error))
  }
}
