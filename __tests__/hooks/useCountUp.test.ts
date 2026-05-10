import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCountUp } from '@/lib/hooks/useCountUp'

beforeEach(() => { vi.useFakeTimers() })
afterEach(() => { vi.useRealTimers() })

describe('useCountUp', () => {
  it('starts at 0', () => {
    const { result } = renderHook(() => useCountUp(100, false))
    expect(result.current).toBe(0)
  })

  it('does not count when inView is false', () => {
    const { result } = renderHook(() => useCountUp(100, false))
    act(() => { vi.advanceTimersByTime(2000) })
    expect(result.current).toBe(0)
  })

  it('reaches the target exactly after full duration', () => {
    const { result } = renderHook(() => useCountUp(100, true, 1500))
    act(() => { vi.advanceTimersByTime(1500) })
    expect(result.current).toBe(100)
  })

  it('is between 0 and target mid-animation', () => {
    const { result } = renderHook(() => useCountUp(100, true, 1500))
    act(() => { vi.advanceTimersByTime(750) })
    expect(result.current).toBeGreaterThan(0)
    expect(result.current).toBeLessThan(100)
  })

  it('starts counting when inView transitions from false to true', () => {
    const { result, rerender } = renderHook(
      ({ inView }: { inView: boolean }) => useCountUp(50, inView, 1500),
      { initialProps: { inView: false } },
    )
    expect(result.current).toBe(0)
    act(() => { rerender({ inView: true }) })
    act(() => { vi.advanceTimersByTime(1500) })
    expect(result.current).toBe(50)
  })

  it('works with decimal targets', () => {
    const { result } = renderHook(() => useCountUp(98.82, true, 1500))
    act(() => { vi.advanceTimersByTime(1500) })
    expect(result.current).toBeCloseTo(98.82)
  })
})
