import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

test('Page', async () => {
  render(<Page />)

  expect(
    screen.getByRole('heading', { name: /Vitest Unit Testing/i })
  ).toBeDefined()
})
