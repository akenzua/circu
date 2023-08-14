import React from 'react'
import { render, setupMatchMediaMock } from '@/test-utils'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import Wrapper from './'

describe('wrapper', () => {
  beforeEach(() => {
    setupMatchMediaMock(false)
  })

  it('render correctly', () => {
    const { getByTestId, getByRole, getByLabelText } = render(
      <Wrapper requiredScreenWidth={595} />,
    )
    const svgElement = getByTestId('resume-root')
    const toggleButton = getByRole('button')
    const colorInput = getByLabelText('Grid Color:')

    expect(svgElement).toBeInTheDocument()
    expect(toggleButton).toBeInTheDocument()
    expect(colorInput).toBeInTheDocument()
    expect(colorInput).toHaveValue('#000000')
  })

  it('toggle button removes the grid', async () => {
    user.setup()
    const { queryByTestId, getByRole } = render(
      <Wrapper requiredScreenWidth={595} />,
    )
    const svgElement = queryByTestId('resume-root')
    const toggleButton = getByRole('button')
    await user.click(toggleButton)
    expect(svgElement).not.toBeNull()
  })

  it('return NotLargeEnough when the screen size is mobile', () => {
    setupMatchMediaMock(true)
    const { getByText } = render(<Wrapper requiredScreenWidth={595} />)
    expect(
      getByText('This screen size is not large enough'),
    ).toBeInTheDocument()
  })
})
