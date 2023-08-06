import { useState, useCallback, useEffect } from 'react'

const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    const handleChange = (e: MediaQueryListEvent) => updateTarget(e)

    media.addEventListener('change', handleChange)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [updateTarget, width])

  return targetReached
}

export default useMediaQuery
