import test from 'ava'
import store from '../../src/store'
import { ADD_TODO, ASYNC_ADD_TODO } from '../../src/store/mutation-types'

test.beforeEach(t => {
  const state = {
    items: [ ],
    count: 0
  }
  store.replaceState(state)
  t.context.store = store
  t.context.initCount = state.count
  t.context.initItemsLength = state.items.length
})

test('ADD_TODO', t => {
  const state = t.context.store.state
  t.context.store.dispatch(
    {type: ADD_TODO, count: t.context.initCount}
  )

  t.is(state.count, t.context.initCount + 1)
  t.is(state.items.length, t.context.initItemsLength + 1)
})

test('ADD_TODO_ASYNC', async t => {
  const state = t.context.store.state
  await t.context.store.dispatch(
    {type: ASYNC_ADD_TODO, count: t.context.initCount}
  )

  t.is(state.count, t.context.initCount + 1)
  t.is(state.items.length, t.context.initItemsLength + 1)
})
