import Foo from "../../js/Foo"
import assert from "power-assert"

describe('entry actions', () => {
  const name = 'test'
  let foo = null

  beforeEach(() => {
    foo = new Foo(name, 1)
  })
  afterEach(() => {
  })

  it('get_name', () => {
    assert(foo.get_name() === name)
  })

  it('concat_name', () => {
    const string = 'concat'
    assert(foo.concat_name(string) === 'Foo: testconcat')
  })
})
