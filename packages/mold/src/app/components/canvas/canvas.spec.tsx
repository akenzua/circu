import React from 'react'
import { render } from '@/test-utils'
import '@testing-library/jest-dom/extend-expect'

import Canvas from '.'

describe('svg canvas', () => {
  it('render svg in the document when the atleast as wide as tablet landscape', () => {
    const { getByTestId } = render(<Canvas />)
    const svgElement = getByTestId('resume-root')
    expect(svgElement).toBeInTheDocument()
  })
})
