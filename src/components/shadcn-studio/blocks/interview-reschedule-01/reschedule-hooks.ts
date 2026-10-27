'use client'

// React Imports
import { useEffect, useState } from 'react'

/** Current time, refreshed every `intervalMs`. `null` until mounted so server and client markup match. */
export const useNow = (intervalMs = 30_000) => {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const timer = setInterval(() => setNow(Date.now()), intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs])

  return now
}

/** Tracks `navigator.onLine`. Starts as `true` so the server render never shows the offline banner. */
export const useOnline = () => {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const update = () => setOnline(navigator.onLine)

    update()
    window.addEventListener('online', update)
    window.addEventListener('offline', update)

    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    }
  }, [])

  return online
}

/** True on phones and tablets (coarse pointer, narrow screen). `false` until mounted. */
export const useIsHandheld = () => {
  const [handheld, setHandheld] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse) and (max-width: 1024px)')
    const update = () => setHandheld(query.matches)

    update()
    query.addEventListener('change', update)

    return () => query.removeEventListener('change', update)
  }, [])

  return handheld
}

/** The viewer's own time zone, when it isn't IST. `null` on the server and for viewers in India. */
export const useLocalTimeZone = () => {
  const [timeZone, setTimeZone] = useState<string | null>(null)

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone

    setTimeZone(zone === 'Asia/Kolkata' || zone === 'Asia/Calcutta' ? null : zone)
  }, [])

  return timeZone
}

/** True inside in-app browsers (WhatsApp, Instagram, Facebook, Gmail, Truecaller…) that often block camera access. */
export const useInAppBrowser = () => {
  const [inApp, setInApp] = useState(false)

  useEffect(() => {
    setInApp(/WhatsApp|Instagram|FBAN|FBAV|FB_IAB|Line\/|Truecaller|GSA\/|; wv\)/i.test(navigator.userAgent))
  }, [])

  return inApp
}
