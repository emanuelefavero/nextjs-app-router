'use client'

import { useReducer } from 'react'
import counterReducer from '@/reducers/counterReducer'

export default function Page() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <>
      <h1>useReducer Page</h1>

      <p>
        TIP: useReducer is a React feature {'('}not Next.js{')'} but it still
        useful to know how to use it
      </p>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>C</button>
      <p>Count: {state.count}</p>
    </>
  )
}
