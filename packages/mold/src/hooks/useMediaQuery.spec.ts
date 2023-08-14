import { renderHook, setupMatchMediaMock } from '@/test-utils'
import useMediaQuery from './useMediaQuery'

describe('useMediaQuery hook', () => {
  beforeEach(() => {
    setupMatchMediaMock(false)
  })

  it('returns false initially', () => {
    const { result } = renderHook(() => useMediaQuery(768))
    expect(result.current).toBe(false)
  })

  it('returns true when the screen width is less than or equal to the given width', () => {
    setupMatchMediaMock(true)
    const { result } = renderHook(() => useMediaQuery(768))
    expect(result.current).toBe(true)
  })

  it('returns false when the screen width is greater than the given width', () => {
    setupMatchMediaMock(false)
    const { result } = renderHook(() => useMediaQuery(768))
    expect(result.current).toBe(false)
  })
})
