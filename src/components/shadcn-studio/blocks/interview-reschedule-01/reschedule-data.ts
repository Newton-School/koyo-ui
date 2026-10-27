// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusinessIcon,
  CameraIcon,
  CircleEllipsisIcon,
  CodeXmlIcon,
  HeartPulseIcon,
  LanguagesIcon,
  LaptopIcon,
  MonitorSmartphoneIcon,
  SunIcon,
  TimerIcon,
  TriangleAlertIcon,
  WifiIcon,
  BellRingIcon
} from 'lucide-react'

/*
 * Types
 * The page renders one of these states. Production code should map the platform's
 * reschedule-status API onto `RescheduleStatus`; the mock API at the bottom of this
 * file simulates every state for the prototype.
 */

export type InterviewKind = 'coding' | 'operational'

export type SupportContact = {
  name: string
  email?: string
  phone?: string
  hours?: string
}

export type InterviewDetails = {
  candidateFirstName: string
  company: {
    name: string
    monogram: string
    tileClassName: string
  }

  /** Identifies the exact invitation, e.g. the round, when a candidate has several (PRD §6.1, AC-11). */
  title: string
  role: string
  location?: string
  kind: InterviewKind
  durationMinutes: number
  languages: string[]
  originalLinkExpiresAt: string
  freshLinkValidityHours: number
  support: SupportContact
}

export type FreshLink = {
  url: string
  issuedAt: string
  expiresAt: string
}

/** `serverTime` is the server's clock when it answered; countdowns use it so a wrong device clock can't expire a link early. */
type ServerStamp = { serverTime?: string }

export type RescheduleStatus = (
  | { state: 'eligible'; interview: InterviewDetails }
  | { state: 'original-link-active'; interview: InterviewDetails; interviewUrl: string }
  | { state: 'fresh-link-active'; interview: InterviewDetails; freshLink: FreshLink }
  | { state: 'interview-started'; interview: InterviewDetails; startedAt?: string; interviewUrl?: string }
  | { state: 'interview-completed'; interview: InterviewDetails; completedAt: string }
  | { state: 'final-link-expired'; interview: InterviewDetails; freshLink: FreshLink }
  | { state: 'ineligible'; interview: InterviewDetails }
  | { state: 'invalid-link'; support: SupportContact }
) &
  ServerStamp

export type RescheduleState = RescheduleStatus['state']

export type ReasonId = 'busy' | 'forgot' | 'technical' | 'emergency' | 'other'

export type RescheduleRequest = {
  reason: ReasonId
  explanation: string
  idempotencyKey: string
}

export type SubmitResult =
  | { ok: true; status: Extract<RescheduleStatus, { state: 'fresh-link-active' }> }
  | { ok: false; code: 'already-used' | 'not-eligible'; status: RescheduleStatus }
  | { ok: false; code: 'temporary' }

export type RescheduleApi = {
  getStatus: () => Promise<RescheduleStatus>
  submit: (request: RescheduleRequest) => Promise<SubmitResult>
}

/*
 * Reasons
 * Labels are the five agreed options from the PRD (§6.2). Hints help candidates map
 * real-world situations (no laptop, travel, weak Wi-Fi) onto them.
 */

export const reasons: { id: ReasonId; label: string; hint: string; icon: LucideIcon }[] = [
  {
    id: 'busy',
    label: "I was busy or didn't have enough time",
    hint: 'Work, travel or other commitments',
    icon: BriefcaseBusinessIcon
  },
  {
    id: 'forgot',
    label: 'I forgot about the interview',
    hint: 'Missed the message or the deadline',
    icon: BellRingIcon
  },
  {
    id: 'technical',
    label: 'I faced a technical issue',
    hint: 'No laptop, weak internet, camera or app problem',
    icon: TriangleAlertIcon
  },
  {
    id: 'emergency',
    label: 'I had an unexpected personal or emergency situation',
    hint: 'Health, family or another urgent matter',
    icon: HeartPulseIcon
  },
  {
    id: 'other',
    label: 'Other',
    hint: 'Tell us more in the box below if you like',
    icon: CircleEllipsisIcon
  }
]

export const EXPLANATION_MAX_LENGTH = 500

/*
 * Readiness checklist
 * Shown before the candidate starts. Device and language lines are campaign
 * configuration, not platform rules — confirm them per campaign.
 */

export type ReadinessItem = { icon: LucideIcon; title: string; description: string }

export const getReadinessItems = (interview: InterviewDetails): ReadinessItem[] => {
  const duration: ReadinessItem = {
    icon: TimerIcon,
    title: `Takes about ${formatDuration(interview.durationMinutes)}`,
    description: 'Keep some extra time free so you are not rushed.'
  }

  const internet: ReadinessItem = {
    icon: WifiIcon,
    title: 'Stable internet connection',
    description: "Use Wi-Fi or strong 4G. Don't switch networks during the interview."
  }

  const camera: ReadinessItem = {
    icon: CameraIcon,
    title: 'Camera and microphone on',
    description: 'Allow access when your browser asks. Keep your face clearly visible.'
  }

  const place: ReadinessItem = {
    icon: SunIcon,
    title: 'Quiet, well-lit place',
    description: 'Sit facing a light, away from noise, so you can finish without interruptions.'
  }

  if (interview.kind === 'coding') {
    return [
      duration,
      internet,
      {
        icon: LaptopIcon,
        title: 'Laptop or desktop computer',
        description: 'Use the latest Chrome. Coding questions need a full keyboard, so phones are not supported.'
      },
      {
        icon: CodeXmlIcon,
        title: 'Built-in code editor',
        description: 'Write and run code in Python, Java, C++ or JavaScript. Nothing to install.'
      },
      camera,
      place
    ]
  }

  return [
    duration,
    internet,
    {
      icon: MonitorSmartphoneIcon,
      title: 'Laptop or smartphone',
      description: 'Use Chrome on a laptop, or on an Android phone with a working front camera.'
    },
    {
      icon: LanguagesIcon,
      title: `Answer in ${formatList(interview.languages)}`,
      description: 'Speak clearly in the language you are most comfortable with.'
    },
    camera,
    place
  ]
}

/*
 * Formatting
 * Deadlines are always shown as an explicit IST date and time (PRD §8: don't rely on
 * relative phrases alone). Relative countdowns are an extra, never a replacement.
 */

const IST_TIME_ZONE = 'Asia/Kolkata'

export const formatIST = (iso: string, { withWeekday = true }: { withWeekday?: boolean } = {}) => {
  // Never crash the page over one bad timestamp from the API.
  if (Number.isNaN(new Date(iso).getTime())) return '—'

  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-IN', {
      timeZone: IST_TIME_ZONE,
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
      .formatToParts(new Date(iso))
      .map(part => [part.type, part.value])
  )

  // e.g. "Wed, 28 Oct 2026, 4:30 PM IST" — assembled by hand so every browser prints the same thing.
  const day = `${parts.day} ${parts.month} ${parts.year}`
  const period = parts.dayPeriod.toUpperCase()
  const time = `${parts.hour}:${parts.minute} ${period} IST`

  // 12:xx AM is easy to read as the wrong day, so name the night it belongs to; 12:00 PM reads as midnight to some.
  let hint = ''

  if (parts.hour === '12' && period === 'AM') {
    const previousDay = new Intl.DateTimeFormat('en-IN', { timeZone: IST_TIME_ZONE, weekday: 'long' }).format(
      new Date(new Date(iso).getTime() - 86_400_000)
    )

    hint = ` (${previousDay} night)`
  } else if (parts.hour === '12' && parts.minute === '00' && period === 'PM') {
    hint = ' (noon)'
  }

  return `${withWeekday ? `${parts.weekday}, ` : ''}${day}, ${time}${hint}`
}

/** The same instant in the viewer's own time zone, e.g. "11:30 AM, Wed 28 Oct". */
export const formatLocal = (iso: string, timeZone: string) =>
  new Intl.DateTimeFormat('en-IN', {
    timeZone,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  })
    .format(new Date(iso))
    .replace(/\b(am|pm)\b/, match => match.toUpperCase())

export const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes} minutes`

  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  const hourLabel = `${hours} hour${hours > 1 ? 's' : ''}`

  return rest ? `${hourLabel} ${rest} minutes` : hourLabel
}

/** Duration as an adjective, e.g. "45-minute" or "1-hour". */
export const formatDurationAdjective = (minutes: number) =>
  minutes % 60 === 0 ? `${minutes / 60}-hour` : `${minutes}-minute`

export const formatRemaining = (ms: number) => {
  if (!Number.isFinite(ms)) return ''
  if (ms <= 0) return 'Expired'

  const totalMinutes = Math.floor(ms / 60_000)

  if (totalMinutes < 1) return 'Less than a minute left'

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (!hours) return `${minutes} min left`

  return `${hours} h ${minutes.toString().padStart(2, '0')} min left`
}

export const formatList = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}` : (items[0] ?? '')

/*
 * Mock data & API (prototype only)
 * Names, links and contacts below are placeholders. Replace `createMockRescheduleApi`
 * with calls to the reschedule-status and reschedule-submit endpoints.
 */

const HOUR = 3_600_000
const IST_OFFSET = 5.5 * HOUR

/** ISO timestamp for a wall-clock time in IST, `dayOffset` days from today (IST). */
const atIST = (dayOffset: number, hours: number, minutes = 0) => {
  const nowIST = new Date(Date.now() + IST_OFFSET)

  return new Date(
    Date.UTC(nowIST.getUTCFullYear(), nowIST.getUTCMonth(), nowIST.getUTCDate() + dayOffset, hours, minutes) -
      IST_OFFSET
  ).toISOString()
}

const addHours = (iso: string, hours: number) => new Date(new Date(iso).getTime() + hours * HOUR).toISOString()

export const sampleInterviews: Record<InterviewKind, Omit<InterviewDetails, 'originalLinkExpiresAt'>> = {
  operational: {
    candidateFirstName: 'Ravi',
    company: { name: 'Urban Company', monogram: 'UC', tileClassName: 'bg-neutral-950 text-white' },
    title: 'AI screening interview',
    role: 'Operations Executive',
    location: 'Hyderabad',
    kind: 'operational',
    durationMinutes: 45,
    languages: ['English', 'Hindi'],
    freshLinkValidityHours: 24,
    support: {
      name: 'Urban Company Hiring Team',
      email: 'hiring-support@example.com',
      phone: '+91 98765 43210',
      hours: 'Mon–Sat, 9 AM–8 PM IST'
    }
  },
  coding: {
    candidateFirstName: 'Ananya',
    company: { name: 'Lumen Labs', monogram: 'LL', tileClassName: 'bg-koyo-color-purple-600 text-white' },
    title: 'Round 1 · AI coding interview',
    role: 'Software Engineer I · Frontend',
    location: 'Bengaluru',
    kind: 'coding',
    durationMinutes: 60,
    languages: ['English'],
    freshLinkValidityHours: 24,
    support: {
      name: 'Lumen Labs Talent Team',
      email: 'talent@example.com',
      hours: 'Mon–Fri, 10 AM–7 PM IST'
    }
  }
}

export const platformSupport: SupportContact = {
  name: 'Koyo candidate support',
  email: 'candidate-support@example.com',
  hours: 'Every day, 9 AM–8 PM IST'
}

const mockLinkUrl = (code: string) => `https://interview.example.com/start/${code}`

export const prototypeScenarios: { value: RescheduleState | 'load-error'; label: string }[] = [
  { value: 'eligible', label: 'Link expired · reschedule form' },
  { value: 'original-link-active', label: 'Original link still active' },
  { value: 'fresh-link-active', label: 'Fresh link active (revisit)' },
  { value: 'interview-started', label: 'Interview already started' },
  { value: 'interview-completed', label: 'Interview completed' },
  { value: 'final-link-expired', label: 'Fresh link expired · final' },
  { value: 'ineligible', label: 'Not eligible (updated by HR)' },
  { value: 'invalid-link', label: 'Invalid or broken link' },
  { value: 'load-error', label: "Couldn't load (offline)" }
]

export type PrototypeScenario = (typeof prototypeScenarios)[number]['value']

export type MockOptions = {
  scenario: PrototypeScenario
  kind: InterviewKind
  failFirstSubmit?: boolean
  latencyMs?: number
}

type MockNetwork = Pick<MockOptions, 'failFirstSubmit' | 'latencyMs'>

/**
 * `getNetwork` is read on every call, so the prototype can toggle slow network or failures without
 * resetting the mock backend (which would hand out a second link and break "one-time means one-time").
 */
export const createMockRescheduleApi = (
  { scenario, kind }: Pick<MockOptions, 'scenario' | 'kind'>,
  getNetwork: () => MockNetwork = () => ({})
): RescheduleApi => {
  const wait = <T>(value: T) =>
    new Promise<T>(resolve => setTimeout(() => resolve(value), getNetwork().latencyMs ?? 900))

  const base = sampleInterviews[kind]
  const code = kind === 'coding' ? 'LL-4C7M-ZQ2W' : 'UC-7HQ2-XK9P'
  let hasFailed = false
  let issued: FreshLink | null = null
  const handledKeys = new Set<string>()

  const interviewWith = (originalLinkExpiresAt: string): InterviewDetails => ({ ...base, originalLinkExpiresAt })

  // Still-active links expire at 11 PM IST today, or tomorrow when less than an hour is left today.
  const todayAt11PM = atIST(0, 23)
  const upcoming11PM = new Date(todayAt11PM).getTime() > Date.now() + HOUR ? todayAt11PM : atIST(1, 23)
  let originalExpiry = scenario === 'original-link-active' ? upcoming11PM : atIST(-1, 23)

  if (scenario === 'fresh-link-active') {
    const issuedAt = new Date(Date.now() - 3.4 * HOUR).toISOString()

    issued = { url: mockLinkUrl(code), issuedAt, expiresAt: addHours(issuedAt, base.freshLinkValidityHours) }
    originalExpiry = addHours(issuedAt, -2)
  }

  const stamp = <T extends RescheduleStatus>(status: T): T => ({ ...status, serverTime: new Date().toISOString() })

  const resolveStatus = (): RescheduleStatus => {
    if (issued) {
      return new Date(issued.expiresAt).getTime() <= Date.now()
        ? { state: 'final-link-expired', interview: interviewWith(originalExpiry), freshLink: issued }
        : { state: 'fresh-link-active', interview: interviewWith(originalExpiry), freshLink: issued }
    }

    switch (scenario) {
      case 'original-link-active':
        return {
          state: 'original-link-active',
          interview: interviewWith(originalExpiry),
          interviewUrl: mockLinkUrl(`${code}-0`)
        }
      case 'interview-started':
        return {
          state: 'interview-started',
          interview: interviewWith(originalExpiry),
          startedAt: addHours(originalExpiry, -0.3),
          interviewUrl: mockLinkUrl(`${code}-0`)
        }
      case 'interview-completed':
        return {
          state: 'interview-completed',
          interview: interviewWith(originalExpiry),
          completedAt: addHours(originalExpiry, -1.6)
        }

      case 'final-link-expired': {
        const issuedAt = atIST(-2, 10, 12)

        return {
          state: 'final-link-expired',
          interview: interviewWith(atIST(-3, 23)),
          freshLink: { url: mockLinkUrl(code), issuedAt, expiresAt: addHours(issuedAt, base.freshLinkValidityHours) }
        }
      }

      case 'ineligible':
        return { state: 'ineligible', interview: interviewWith(originalExpiry) }
      case 'invalid-link':
        return { state: 'invalid-link', support: platformSupport }
      default:
        return { state: 'eligible', interview: interviewWith(originalExpiry) }
    }
  }

  return {
    getStatus: () =>
      scenario === 'load-error'
        ? new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Network error')), getNetwork().latencyMs ?? 900)
          )
        : wait(stamp(resolveStatus())),

    submit: ({ idempotencyKey }) => {
      const current = stamp(resolveStatus())

      // A retry with the same key gets the outcome of the first request, as it stands now (PRD FR-09).
      if (handledKeys.has(idempotencyKey)) {
        return wait<SubmitResult>(
          current.state === 'fresh-link-active'
            ? { ok: true, status: current }
            : { ok: false, code: 'already-used', status: current }
        )
      }

      if (current.state === 'fresh-link-active' || current.state === 'final-link-expired') {
        return wait<SubmitResult>({ ok: false, code: 'already-used', status: current })
      }

      if (current.state !== 'eligible') {
        return wait<SubmitResult>({ ok: false, code: 'not-eligible', status: current })
      }

      if (getNetwork().failFirstSubmit && !hasFailed) {
        hasFailed = true

        return wait<SubmitResult>({ ok: false, code: 'temporary' })
      }

      const issuedAt = new Date().toISOString()

      issued = { url: mockLinkUrl(code), issuedAt, expiresAt: addHours(issuedAt, base.freshLinkValidityHours) }
      handledKeys.add(idempotencyKey)

      return wait<SubmitResult>({
        ok: true,
        status: stamp({ state: 'fresh-link-active', interview: interviewWith(originalExpiry), freshLink: issued })
      })
    }
  }
}
