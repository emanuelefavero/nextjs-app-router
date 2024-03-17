interface CounterState {
  count: number
}

interface CounterAction {
  type: 'increment' | 'decrement'
}

export default function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
    }
  } else if (action.type === 'decrement') {
    return {
      count: state.count === 0 ? 0 : state.count - 1,
    }
  }

  throw Error('Unknown action.')
}
