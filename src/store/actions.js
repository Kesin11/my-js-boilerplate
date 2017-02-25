import { ADD_TODO } from './mutation-types'

export const add = (context, payload) => {
  context.commit(ADD_TODO, payload)
}
// mutations must be synchronous
// so async feature should be written in actions
export const async_add = (context, payload) => {
  return new Promise(resolve => {
    setTimeout(() => {
      context.commit(ADD_TODO, payload)
      resolve()
    }, 1000)
  })
}
