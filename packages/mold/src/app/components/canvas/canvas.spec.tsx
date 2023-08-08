import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Canvas from '.'
import { Providers } from '@/redux/Provider'

describe('svg canvas', () => {
  // window.matchMedia = jest.fn().mockImplementation((query) => ({
  //   matches: false, // or true if you want the query to match
  //   media: query,
  //   onchange: null,

  //   addEventListener: jest.fn(),
  //   removeEventListener: jest.fn(),
  //   dispatchEvent: jest.fn(),
  // }))
  test('render svg in the document when the atleast as wide as tablet landscape', () => {
    const { getByTestId } = render(
      <Providers>
        <Canvas />
      </Providers>,
    )
    const svgElement = getByTestId('resume-root')
    expect(svgElement).toBeInTheDocument()
  })

  // Remember to move this up the tree as the svg should only render on element
  // plus NotLargeEnough should affect the whole app not just this component
  // test('render NotLargeEnough component when the screen is less than', () => {
  //   window.matchMedia = jest.fn().mockImplementation((query) => ({
  //     matches: true, // or true if you want the query to match
  //     media: query,
  //     onchange: null,
  //     addEventListener: jest.fn(),
  //     removeEventListener: jest.fn(),
  //     dispatchEvent: jest.fn(),
  //   }))
  //   const { getByText } = render(<Canvas />)

  //   expect(
  //     getByText('This screen size is not large enough'),
  //   ).toBeInTheDocument()
  // })
})
