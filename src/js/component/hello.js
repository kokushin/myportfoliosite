
class Hello {
  constructor() {
    this._init()
  }
  _init() {
    document.getElementById('app').innerHTML = '<h1>hello, world!</h1>'
  }
}

export default Hello
