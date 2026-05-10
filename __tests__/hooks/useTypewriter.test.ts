import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTypewriter } from '@/lib/hooks/useTypewriter'

beforeEach(() => { vi.useFakeTimers() })
afterEach(() => { vi.useRealTimers() })

describe('useTypewriter', () => {
  it('starts with an empty string', () => {
    const { result } = renderHook(() => useTypewriter('hello', 50, 0))
    expect(result.current.displayed).toBe('')
    expect(result.current.done).toBe(false)
  })

  it('types one character per interval after delay', () => {
    const { result } = renderHook(() => useTypewriter('hi', 50, 0))
    act(() => { vi.advanceTimersByTime(50) })
    expect(result.current.displayed).toBe('h')
    act(() => { vi.advanceTimersByTime(50) })
    expect(result.current.displayed).toBe('hi')
  })

  it('sets done=true when complete', () => {
    const { result } = renderHook(() => useTypewriter('hi', 50, 0))
    act(() => { vi.advanceTimersByTime(100) })
    expect(result.current.done).toBe(true)
  })

  it('respects the initial delay before starting', () => {
    const { result } = renderHook(() => useTypewriter('hi', 50, 200))
    act(() => { vi.advanceTimersByTime(150) })
    expect(result.current.displayed).toBe('')
    act(() => { vi.advanceTimersByTime(100) })
    expect(result.current.displayed).toBe('h')
  })
})
