export default class Base {
  constructor(name, version) {
    this.name = name
    this.version = version
  }
  get_name () {
    return this.name
  }
  concat_name (string) {
    return this.name + string
  }
}
