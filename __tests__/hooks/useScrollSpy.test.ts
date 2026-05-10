import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollSpy } from '@/lib/hooks/useScrollSpy'

const mockObserve = vi.fn()
const mockDisconnect = vi.fn()
let capturedCallbacks: Map<Element, IntersectionObserverCallback> = new Map()

beforeEach(() => {
  capturedCallbacks = new Map()
  mockObserve.mockClear()
  mockDisconnect.mockClear()
  vi.stubGlobal('IntersectionObserver', vi.fn((cb: IntersectionObserverCallback) => ({
    observe: (el: Element) => {
      mockObserve(el)
      capturedCallbacks.set(el, cb)
    },
    disconnect: mockDisconnect,
  })))
  document.body.innerHTML = `
    <section id="hero"></section>
    <section id="about"></section>
  `
})

describe('useScrollSpy', () => {
  it('returns empty string initially', () => {
    const { result } = renderHook(() => useScrollSpy(['hero', 'about']))
    expect(result.current).toBe('')
  })

  it('returns the id of the intersecting section', () => {
    const { result } = renderHook(() => useScrollSpy(['hero', 'about']))
    const heroEl = document.getElementById('hero')!
    const cb = capturedCallbacks.get(heroEl)!
    act(() => {
      cb([{ isIntersecting: true, target: heroEl } as unknown as IntersectionObserverEntry], {} as IntersectionObserver)
    })
    expect(result.current).toBe('hero')
  })

  it('updates when a different section intersects', () => {
    const { result } = renderHook(() => useScrollSpy(['hero', 'about']))
    const aboutEl = document.getElementById('about')!
    const cb = capturedCallbacks.get(aboutEl)!
    act(() => {
      cb([{ isIntersecting: true, target: aboutEl } as unknown as IntersectionObserverEntry], {} as IntersectionObserver)
    })
    expect(result.current).toBe('about')
  })

  it('disconnects observers on unmount', () => {
    const { unmount } = renderHook(() => useScrollSpy(['hero', 'about']))
    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })
})
