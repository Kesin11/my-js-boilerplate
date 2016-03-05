import Base from './Base'

export default class Foo extends Base {
  constructor(name, version) {
    super(name, version)
    this.name = name
  }
  get_name () {
    return this.name
  }
  concat_name (string) {
    return `Foo: ${this.name}${string}`
  }
}
