import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Providers } from './redux/Provider'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

const setupMatchMediaMock = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

export * from '@testing-library/react'
export { customRender as render, setupMatchMediaMock }
