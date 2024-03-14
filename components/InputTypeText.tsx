'use client'

import { useState } from 'react'

export default function InputTypeText() {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Type something...'
      />
    </>
  )
}
