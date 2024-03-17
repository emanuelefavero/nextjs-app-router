interface CounterState {
  count: number
}

interface CounterAction {
  type: 'increment' | 'decrement' | 'reset'
}

export default function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      }

    case 'decrement':
      return {
        count: state.count === 0 ? 0 : state.count - 1,
      }

    case 'reset':
      return {
        count: 0,
      }

    default:
      throw new Error('Unknown action.')
  }

  throw Error('Unknown action.')
}
