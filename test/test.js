import test from 'ava'

test.beforeEach(t => {
  t.context.num = 2
})

test('t.context', t => {
  t.is(t.context.num, 2, 't.context.num is 2')
})

test('assertion', t => {
  const foo = {'foo': 2, 'bar': 1}
  t.is(foo['foo'], 2, 'is')
  t.deepEqual(foo, {'foo': 2, 'bar': 1}, 'deepEqual')
})

test('async/await', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})
