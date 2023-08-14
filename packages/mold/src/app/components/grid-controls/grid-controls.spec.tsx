import React from 'react'
import { render } from '@/test-utils'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import GridControls from '.'

describe('svg canvas', () => {
  it('renders correctly', () => {
    const { getByRole, getByLabelText } = render(<GridControls />)
    const toggleButton = getByRole('button')
    const colorInput = getByLabelText('Grid Color:')

    expect(toggleButton).toBeInTheDocument()
    expect(colorInput).toBeInTheDocument()
    expect(colorInput).toHaveValue('#000000')
  })
  it('toggles grid color input', async () => {
    user.setup()
    const { queryByRole, getByRole } = render(<GridControls />)
    const colorInput = queryByRole('textbox', { name: 'Grid Color:' })
    const toggleButton = getByRole('button')
    await user.click(toggleButton)
    expect(colorInput).toBeNull()
  })
})
