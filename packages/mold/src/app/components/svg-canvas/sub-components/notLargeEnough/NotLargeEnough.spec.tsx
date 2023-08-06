import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NotLargeEnough from './NotLargeEnough'

describe('NotLargeEnough component', () => {
  test('renders correct message in the component', () => {
    const { getByText } = render(<NotLargeEnough />)

    expect(
      getByText('This screen size is not large enough'),
    ).toBeInTheDocument()
  })
})
