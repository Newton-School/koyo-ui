/**
 * Candidate messages from PRD Appendix A, from the original-link reminders through the one-time
 * rescheduling path, as WhatsApp and email templates with `{{variables}}`, two fictional filled
 * examples and the timing/cancellation rules that product, ops and design review together.
 *
 * Before the original link expires nothing mentions rescheduling (§8): reminders only push the
 * candidate to start, and starting before the deadline is enough to finish later.
 *
 * WhatsApp formatting: `*bold*`, `• ` bullets, blank line between paragraphs. Bodies stay under
 * 1024 characters, no variable sits at the very start or end, and button labels are 25 characters or fewer.
 */

export const WHATSAPP_BODY_LIMIT = 1024
export const WHATSAPP_BUTTON_LIMIT = 25
export const SIGN_OFF = '– Koyo AI Interviews'
export const SENDER_NAME = 'Koyo AI Interviews'
export const SENDER_EMAIL = 'interviews@example.com'

export type ExampleKind = 'operational' | 'coding'

export type VariableKey =
  | 'candidate_name'
  | 'role_title'
  | 'company_name'
  | 'original_expiry_ist'
  | 'original_expiry_short'
  | 'fresh_expiry_ist'
  | 'fresh_expiry_short'
  | 'duration'
  | 'device_requirement'
  | 'support_contact'
  | 'original_interview_url'
  | 'reschedule_url'
  | 'interview_url'

export type MessageId = 'r1' | 'r2' | 'r3' | 'd1' | 'd2' | 'd7' | 'd3' | 'd4' | 'd5' | 'd6'

export type TimingRule = 'sane-hours' | 'campaign' | 'immediate'

export type MessageButton = {
  label: string
  url: Extract<VariableKey, 'original_interview_url' | 'reschedule_url' | 'interview_url'>
}

/**
 * Example send time. `full` is used in metadata and email headers, `short` in the sequence list,
 * `clock` and `day` in the WhatsApp mock, `iso` for `<time dateTime>`, and `note` says why it was picked.
 */
export type SendTime = {
  full: string
  short: string
  clock: string
  day: string
  iso: string
  note: string
}

export type MessageTemplate = {
  id: MessageId
  code: string
  name: string
  status: 'prd' | 'proposed'
  summary: string
  trigger: string
  timing: TimingRule
  send: SendTime
  cancellation: string
  scenarioNote?: string
  prdRefs: string[]
  whatsapp: { body: string; button?: MessageButton }
  email: {
    subject: string
    preheader: string
    heading: string
    howItWorks?: string[]
    button?: MessageButton
  }
}

export type SequenceEventId = 'original-invited' | 'original-expired' | 'form-submitted'

export type SequenceEvent = {
  type: 'event'
  id: SequenceEventId
  title: string
  description: string
  time: Pick<SendTime, 'full' | 'short' | 'iso'>
}

export type SequenceItem = SequenceEvent | { type: 'message'; id: MessageId }

/** A phase of the send sequence. The original-link expiry splits the page into before and after. */
export type SequenceGroup = {
  id: 'before-expiry' | 'after-expiry'
  label: string
  description: string
  items: SequenceItem[]
}

export type Example = {
  kind: ExampleKind
  label: string
  shortLabel: string
  candidateEmail: string
  values: Record<VariableKey, string>
}

export const timingRules: Record<TimingRule, { label: string; short: string; description: string }> = {
  'sane-hours': {
    label: 'Sane hours only · 9 AM–8 PM IST',
    short: 'Sane hours',
    description:
      'Post-expiry message. If it falls due outside 9 AM–8 PM IST, it waits for the next window (§5.2, FR-07).'
  },
  campaign: {
    label: 'Campaign-configured time · any hour',
    short: 'Any hour',
    description: 'Sent at the time set in the campaign, even outside sane hours (§5.1, §5.3, AC-14).'
  },
  immediate: {
    label: 'Immediately on issuance · any hour',
    short: 'Immediate',
    description: 'Proposed: sent the moment the fresh link is created, because the candidate just asked for it.'
  }
}

export const variableLabels: Record<VariableKey, string> = {
  candidate_name: 'Candidate first name',
  role_title: 'Role title',
  company_name: 'Hiring company',
  original_expiry_ist: 'Original link expiry (IST)',
  original_expiry_short: 'Original link expiry, short',
  fresh_expiry_ist: 'Fresh link expiry (IST)',
  fresh_expiry_short: 'Fresh link expiry, short',
  duration: 'Interview duration',
  device_requirement: 'Device requirement',
  support_contact: 'HR / support contact',
  original_interview_url: 'Original interview URL',
  reschedule_url: 'Rescheduling form URL',
  interview_url: 'Fresh interview URL'
}

// Static example timeline (strings only, so server and client render the same thing).
const timeline = {
  originalInvited: {
    full: 'Sun, 25 Oct 2026, 11:00 PM IST',
    short: 'Sun 25 Oct · 11:00 PM',
    iso: '2026-10-25T23:00+05:30'
  },
  originalExpiry: {
    full: 'Mon, 26 Oct 2026, 11:00 PM IST',
    short: 'Mon 26 Oct · 11:00 PM',
    iso: '2026-10-26T23:00+05:30'
  },
  freshIssued: { full: 'Tue, 27 Oct 2026, 4:30 PM IST', short: 'Tue 27 Oct · 4:30 PM', iso: '2026-10-27T16:30+05:30' }
}

const supportLine = 'Need help? Contact {{support_contact}}.\n' + SIGN_OFF

// Original-link reminders: the candidate only has to START before the deadline (§3.1, AC-09).
const startRule =
  'You only need to *start* before this time. Once you start, you can finish under the usual interview rules.'

const originalReminderCancellation =
  'Cancelled once the interview starts (FR-05, AC-02). Status is re-checked right before sending (FR-04). Never sent after the original link expires: the post-expiry flow takes precedence (§5.1).'

const originalReminderRefs = ['§4.1', '§5.1', 'FR-02', 'FR-04', 'FR-05', 'AC-02', 'AC-14']

export const messages: Record<MessageId, MessageTemplate> = {
  r1: {
    id: 'r1',
    code: 'R1',
    name: 'Original reminder 1',
    status: 'prd',
    summary: 'First of three reminders for the original link. Direct link, exact deadline and a nudge to start early.',
    trigger:
      'The original link is still unused at the first campaign-configured reminder time (§4.1 step 2, §5.1, FR-02).',
    timing: 'campaign',
    send: {
      full: 'Mon, 26 Oct 2026, 11:00 AM IST',
      short: 'Mon 26 Oct · 11:00 AM',
      clock: '11:00 AM',
      day: '26 October 2026',
      iso: '2026-10-26T11:00+05:30',
      note: 'Example campaign timing: 12 hours before expiry. Each campaign sets its own times; the system never calculates them (§5.1, FR-02).'
    },
    cancellation: originalReminderCancellation,
    prdRefs: originalReminderRefs,
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Reminder: your AI interview for *{{role_title}}* at *{{company_name}}* is ready to start.',
        '*Start before: {{original_expiry_ist}}*',
        startRule,
        [
          'Before you start:',
          '• The interview takes about {{duration}}.',
          '• You need {{device_requirement}}, and a stable internet connection.',
          '• Find a quiet place where no one will disturb you.'
        ].join('\n'),
        'Start early so you have time to fix any device or internet problem. When you are ready, tap *Start Interview*.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'original_interview_url' }
    },
    email: {
      subject: 'Reminder: your {{company_name}} AI interview is ready',
      preheader: 'Start before {{original_expiry_short}}. It takes about {{duration}}.',
      heading: 'Your AI interview is ready to start',
      button: { label: 'Start Interview', url: 'original_interview_url' }
    }
  },
  r2: {
    id: 'r2',
    code: 'R2',
    name: 'Original reminder 2',
    status: 'prd',
    summary: 'Second original-link reminder. Leads with the exact expiry time and what the candidate needs to start.',
    trigger:
      'The original link is still unused at the second campaign-configured reminder time (§4.1 step 2, §5.1, FR-02).',
    timing: 'campaign',
    send: {
      full: 'Mon, 26 Oct 2026, 7:00 PM IST',
      short: 'Mon 26 Oct · 7:00 PM',
      clock: '7:00 PM',
      day: '26 October 2026',
      iso: '2026-10-26T19:00+05:30',
      note: 'Example campaign timing: 4 hours before expiry.'
    },
    cancellation: originalReminderCancellation,
    prdRefs: originalReminderRefs,
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Your AI interview for *{{role_title}}* at *{{company_name}}* is still waiting for you.',
        '*Your link expires on {{original_expiry_ist}}.*',
        startRule,
        [
          '• Set aside about {{duration}} with no calls or breaks.',
          '• You need {{device_requirement}}, and a stable internet connection.'
        ].join('\n'),
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'original_interview_url' }
    },
    email: {
      subject: 'Your interview link expires {{original_expiry_short}}',
      preheader: 'You only need to start before this time.',
      heading: 'Start your interview before the deadline',
      button: { label: 'Start Interview', url: 'original_interview_url' }
    }
  },
  r3: {
    id: 'r3',
    code: 'R3',
    name: 'Original reminder 3',
    status: 'prd',
    summary:
      'Last reminder before the original link expires. Deadline emphasis only: rescheduling is never mentioned before expiry (§8).',
    trigger:
      'The original link is still unused at the third campaign-configured reminder time (§4.1 step 2, §5.1, FR-02).',
    timing: 'campaign',
    send: {
      full: 'Mon, 26 Oct 2026, 10:00 PM IST',
      short: 'Mon 26 Oct · 10:00 PM',
      clock: '10:00 PM',
      day: '26 October 2026',
      iso: '2026-10-26T22:00+05:30',
      note: 'Example campaign timing: 1 hour before expiry. The copy still states the exact time, never "in 1 hour".'
    },
    cancellation: originalReminderCancellation,
    scenarioNote:
      '10:00 PM is outside sane hours, and that is allowed: original-link reminders follow the campaign timing, not the 9 AM–8 PM window (§5.1, AC-14).',
    prdRefs: [...originalReminderRefs, 'AC-13'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        '*Last reminder:* your AI interview link for *{{role_title}}* at *{{company_name}}* expires on *{{original_expiry_ist}}*.',
        startRule,
        'Start now so you are not rushed. The interview takes about {{duration}}, and you need a stable internet connection.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'original_interview_url' }
    },
    email: {
      subject: 'Last reminder: start your interview before {{original_expiry_short}}',
      preheader: 'Once you start, you can finish under the usual interview rules.',
      heading: 'Last reminder to start your interview',
      button: { label: 'Start Interview', url: 'original_interview_url' }
    }
  },
  d1: {
    id: 'd1',
    code: 'D1',
    name: 'Rescheduling invitation',
    status: 'prd',
    summary: 'Tells the candidate the original link expired and offers one new link through the rescheduling form.',
    trigger: 'The original link expired and the candidate never started the interview (§4.1 step 5).',
    timing: 'sane-hours',
    send: {
      full: 'Tue, 27 Oct 2026, 9:00 AM IST',
      short: 'Tue 27 Oct · 9:00 AM',
      clock: '9:00 AM',
      day: '27 October 2026',
      iso: '2026-10-27T09:00+05:30',
      note: 'Next sane-hours slot. The link expired at 11:00 PM, so the message waits until 9:00 AM (§5.2 example).'
    },
    cancellation:
      'Not sent if the candidate started before expiry, even if they finish later (§4.1 step 4, AC-02). Status is re-checked right before sending (FR-04).',
    prdRefs: ['§4.1', '§5.2', 'FR-04', 'FR-07', 'AC-01', 'AC-15'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Your AI interview link for *{{role_title}}* at *{{company_name}}* expired on {{original_expiry_ist}}. You did not start the interview, so you can get *one new link*.',
        'Tap the button below. Pick a reason. Your new link opens right away.',
        [
          'Before you tap:',
          '• The new link works for *24 hours* from the moment you get it.',
          '• This is a *one-time* request. You cannot reschedule this interview again.',
          '• The interview takes about {{duration}}.',
          '• You need {{device_requirement}}, and a stable internet connection.'
        ].join('\n'),
        'Only ask for the link when you can take the interview in the next 24 hours.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Reschedule interview', url: 'reschedule_url' }
    },
    email: {
      subject: 'Your {{company_name}} interview link expired – get a new one',
      preheader: 'One-time request. The new link works for 24 hours.',
      heading: 'Get one new interview link',
      howItWorks: [
        'Tap the button and pick why you missed the interview.',
        'Your new link opens right away.',
        'Start the interview within 24 hours.'
      ],
      button: { label: 'Reschedule interview', url: 'reschedule_url' }
    }
  },
  d2: {
    id: 'd2',
    code: 'D2',
    name: 'Rescheduling follow-up',
    status: 'prd',
    summary: 'One nudge if the candidate has not used the rescheduling form yet.',
    trigger:
      'The form is still not submitted after the campaign-configured interval and the candidate is still eligible (§4.1 step 6).',
    timing: 'sane-hours',
    send: {
      full: 'Tue, 27 Oct 2026, 6:00 PM IST',
      short: 'Tue 27 Oct · 6:00 PM',
      clock: '6:00 PM',
      day: '27 October 2026',
      iso: '2026-10-27T18:00+05:30',
      note: 'Example campaign interval (9 hours after the invitation), inside sane hours.'
    },
    cancellation: 'Cancelled as soon as the form is submitted (FR-11, AC-06). Only one follow-up is ever sent (AC-05).',
    scenarioNote:
      'In the fresh-link example that follows, the candidate submits at 4:30 PM, so this 6:00 PM follow-up would be cancelled. It is shown here for copy review.',
    prdRefs: ['§4.1', '§5.2', 'FR-07', 'FR-11', 'AC-05', 'AC-06', 'AC-15'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Reminder: you can still get a new AI interview link for *{{role_title}}* at *{{company_name}}*.',
        'It takes about 1 minute. Tap the button, pick a reason, and your new link is ready.',
        [
          '• The new link works for *24 hours* from the moment you get it.',
          '• This is a *one-time* request. You cannot reschedule this interview again.'
        ].join('\n'),
        'Only ask for it when you have {{duration}} free in the next 24 hours.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Reschedule interview', url: 'reschedule_url' }
    },
    email: {
      subject: 'Reminder: get your new {{company_name}} interview link',
      preheader: 'It takes about a minute. One-time request.',
      heading: 'You can still get a new link',
      button: { label: 'Reschedule interview', url: 'reschedule_url' }
    }
  },
  d7: {
    id: 'd7',
    code: 'D7',
    name: 'Fresh link issued',
    status: 'proposed',
    summary: 'Puts the new link in writing the moment it is created, so the candidate has it outside the browser tab.',
    trigger: 'The candidate submits the form and the fresh link is issued (§4.1 step 7, FR-10).',
    timing: 'immediate',
    send: {
      full: 'Tue, 27 Oct 2026, 4:30 PM IST',
      short: 'Tue 27 Oct · 4:30 PM',
      clock: '4:30 PM',
      day: '27 October 2026',
      iso: '2026-10-27T16:30+05:30',
      note: 'Same minute the fresh link is issued.'
    },
    cancellation:
      'Not in PRD Appendix A. Appendix A sends nothing at issuance, and reminder 1 may arrive hours later. Needs a product decision.',
    prdRefs: ['§4.1', '§6.4', 'FR-10', 'AC-03'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Here is your new AI interview link for *{{role_title}}* at *{{company_name}}*.',
        '*Start before: {{fresh_expiry_ist}}*',
        'This is your final chance. You cannot reschedule this interview again. The interview takes about {{duration}}.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'interview_url' }
    },
    email: {
      subject: 'Your new {{company_name}} interview link is ready',
      preheader: 'Start before {{fresh_expiry_short}}. This is your final link.',
      heading: 'Here is your new interview link',
      button: { label: 'Start Interview', url: 'interview_url' }
    }
  },
  d3: {
    id: 'd3',
    code: 'D3',
    name: 'Fresh-link reminder 1',
    status: 'prd',
    summary: 'First of three reminders for the fresh link. Direct link, exact deadline, final-chance warning.',
    trigger: 'The fresh link is still unused at the first campaign-configured reminder time (§5.3, FR-03).',
    timing: 'campaign',
    send: {
      full: 'Wed, 28 Oct 2026, 4:30 AM IST',
      short: 'Wed 28 Oct · 4:30 AM',
      clock: '4:30 AM',
      day: '28 October 2026',
      iso: '2026-10-28T04:30+05:30',
      note: 'Example campaign timing: 12 hours before expiry.'
    },
    cancellation:
      'Cancelled once the interview starts (FR-05). Never sent after the link expires or alongside the expiry message (AC-13).',
    scenarioNote:
      '4:30 AM is outside sane hours, and that is allowed: fresh-link reminders follow the campaign timing, not the 9 AM–8 PM window (§5.3).',
    prdRefs: ['§4.1', '§5.3', 'FR-03', 'FR-05', 'AC-07'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Your new AI interview link for *{{role_title}}* at *{{company_name}}* is ready.',
        '*Start before: {{fresh_expiry_ist}}*',
        'This is your *final chance*. You cannot reschedule this interview again.',
        'The interview takes about {{duration}}. Find a quiet place with a stable internet connection, then tap *Start Interview*.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'interview_url' }
    },
    email: {
      subject: 'Your new interview link – start before {{fresh_expiry_short}}',
      preheader: "This is your final chance. You can't reschedule this interview again.",
      heading: 'Your new interview link is ready',
      button: { label: 'Start Interview', url: 'interview_url' }
    }
  },
  d4: {
    id: 'd4',
    code: 'D4',
    name: 'Fresh-link reminder 2',
    status: 'prd',
    summary: 'Second fresh-link reminder. Leads with the exact expiry time and asks for an uninterrupted slot.',
    trigger: 'The fresh link is still unused at the second campaign-configured reminder time (§5.3, FR-03).',
    timing: 'campaign',
    send: {
      full: 'Wed, 28 Oct 2026, 12:30 PM IST',
      short: 'Wed 28 Oct · 12:30 PM',
      clock: '12:30 PM',
      day: '28 October 2026',
      iso: '2026-10-28T12:30+05:30',
      note: 'Example campaign timing: 4 hours before expiry.'
    },
    cancellation:
      'Cancelled once the interview starts (FR-05). Never sent after the link expires or alongside the expiry message (AC-13).',
    prdRefs: ['§4.1', '§5.3', 'FR-03', 'FR-05', 'AC-07'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'You have not started your AI interview for *{{role_title}}* at *{{company_name}}* yet.',
        '*Your link expires on {{fresh_expiry_ist}}.*',
        'This is your *final chance*. After this link expires, you cannot reschedule this interview again.',
        'Set aside about {{duration}} with no calls or breaks, and keep your internet on.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'interview_url' }
    },
    email: {
      subject: 'Your interview link expires {{fresh_expiry_short}}',
      preheader: "You haven't started yet. This is your final link.",
      heading: "You haven't started your interview yet",
      button: { label: 'Start Interview', url: 'interview_url' }
    }
  },
  d5: {
    id: 'd5',
    code: 'D5',
    name: 'Fresh-link reminder 3',
    status: 'prd',
    summary: 'Last reminder before the fresh link expires. Deadline emphasis, no further chances.',
    trigger: 'The fresh link is still unused at the third campaign-configured reminder time (§5.3, FR-03).',
    timing: 'campaign',
    send: {
      full: 'Wed, 28 Oct 2026, 3:30 PM IST',
      short: 'Wed 28 Oct · 3:30 PM',
      clock: '3:30 PM',
      day: '28 October 2026',
      iso: '2026-10-28T15:30+05:30',
      note: 'Example campaign timing: 1 hour before expiry. The copy still states the exact time, never "in 1 hour".'
    },
    cancellation:
      'Cancelled once the interview starts (FR-05). Never sent after the link expires or alongside the expiry message (AC-13).',
    prdRefs: ['§4.1', '§5.3', 'FR-03', 'FR-05', 'AC-07', 'AC-13'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        '*Last reminder:* your AI interview link for *{{role_title}}* at *{{company_name}}* expires on *{{fresh_expiry_ist}}*.',
        'You only need to *start* before this time. Start now so you are not rushed.',
        'There are no more chances after this. You cannot reschedule this interview again.',
        supportLine
      ].join('\n\n'),
      button: { label: 'Start Interview', url: 'interview_url' }
    },
    email: {
      subject: 'Last reminder: start your interview before {{fresh_expiry_short}}',
      preheader: 'No more chances after this link expires.',
      heading: 'Last reminder to start your interview',
      button: { label: 'Start Interview', url: 'interview_url' }
    }
  },
  d6: {
    id: 'd6',
    code: 'D6',
    name: 'Final expiry message',
    status: 'prd',
    summary: 'Closes the workflow. No button, repeats the HR/support contact and ends with "Thank you."',
    trigger: 'The fresh link expired and the interview was never started (§4.1 step 9, §5.4).',
    timing: 'sane-hours',
    send: {
      full: 'Wed, 28 Oct 2026, 4:30 PM IST',
      short: 'Wed 28 Oct · 4:30 PM',
      clock: '4:30 PM',
      day: '28 October 2026',
      iso: '2026-10-28T16:30+05:30',
      note: 'At fresh-link expiry. 4:30 PM is inside sane hours, so it goes out straight away.'
    },
    cancellation:
      'Never sent if the candidate started before expiry, even if the session finishes later (§5.4, AC-08). Closes automated rescheduling (FR-12).',
    prdRefs: ['§4.1', '§5.2', '§5.4', 'FR-07', 'FR-12', 'AC-08', 'AC-15', 'AC-16'],
    whatsapp: {
      body: [
        'Hi {{candidate_name}},',
        'Your AI interview link for *{{role_title}}* at *{{company_name}}* expired on {{fresh_expiry_ist}}. The interview was not started.',
        'This was your one-time reschedule, so we cannot send another link.',
        'If you have questions, please contact {{support_contact}}.',
        'Thank you.'
      ].join('\n\n')
    },
    email: {
      subject: 'Your {{company_name}} interview link has expired',
      preheader: 'No further rescheduling is available.',
      heading: 'Your interview link has expired'
    }
  }
}

export const sequence: SequenceGroup[] = [
  {
    id: 'before-expiry',
    label: 'Before expiry',
    description: 'Original link',
    items: [
      {
        type: 'event',
        id: 'original-invited',
        title: 'Original invitation sent',
        description: 'Example campaign: link valid for 24 hours.',
        time: timeline.originalInvited
      },
      { type: 'message', id: 'r1' },
      { type: 'message', id: 'r2' },
      { type: 'message', id: 'r3' }
    ]
  },
  {
    id: 'after-expiry',
    label: 'After expiry',
    description: 'One-time rescheduling',
    items: [
      {
        type: 'event',
        id: 'original-expired',
        title: 'Original link expires',
        description: 'Candidate never started. Outside sane hours.',
        time: timeline.originalExpiry
      },
      { type: 'message', id: 'd1' },
      { type: 'message', id: 'd2' },
      {
        type: 'event',
        id: 'form-submitted',
        title: 'Candidate submits form → fresh link issued',
        description: 'One fresh link, valid for 24 hours.',
        time: timeline.freshIssued
      },
      { type: 'message', id: 'd7' },
      { type: 'message', id: 'd3' },
      { type: 'message', id: 'd4' },
      { type: 'message', id: 'd5' },
      { type: 'message', id: 'd6' }
    ]
  }
]

/** Message ids of a group, in send order (events skipped). */
export const messagesIn = (group: SequenceGroup) =>
  group.items.flatMap(item => (item.type === 'message' ? [item.id] : []))

/** Every message in send order. Drives the counter, previous/next, the picker and URL validation. */
export const messageOrder = sequence.flatMap(messagesIn)

const sharedTimes = {
  original_expiry_ist: timeline.originalExpiry.full,
  original_expiry_short: '26 Oct, 11:00 PM IST',
  fresh_expiry_ist: 'Wed, 28 Oct 2026, 4:30 PM IST',
  fresh_expiry_short: '28 Oct, 4:30 PM IST'
}

/** Fictional people, companies and contacts. Never use real candidates from the calling sheet. */
export const examples: Record<ExampleKind, Example> = {
  operational: {
    kind: 'operational',
    label: 'Operational · Urban Company',
    shortLabel: 'Operational',
    candidateEmail: 'ravi@example.com',
    values: {
      candidate_name: 'Ravi',
      role_title: 'Operations Executive',
      company_name: 'Urban Company',
      ...sharedTimes,
      duration: '45 minutes',
      device_requirement: 'a laptop or Android phone with a working camera and mic',
      support_contact: 'Urban Company Hiring Team · hiring-support@example.com · +91 98765 43210',
      original_interview_url: 'https://interview.example.com/start/UC-5FJW-3MBA',
      reschedule_url: 'https://interview.example.com/r/UC-4M8T-2QZL',
      interview_url: 'https://interview.example.com/start/UC-7HQ2-XK9P'
    }
  },
  coding: {
    kind: 'coding',
    label: 'Coding · Lumen Labs',
    shortLabel: 'Coding',
    candidateEmail: 'ananya@example.com',
    values: {
      candidate_name: 'Ananya',
      role_title: 'Software Engineer I · Frontend',
      company_name: 'Lumen Labs',
      ...sharedTimes,
      duration: '1 hour',
      device_requirement: 'a laptop or desktop with Chrome, a webcam and mic',
      support_contact: 'Lumen Labs Talent Team · talent@example.com',
      original_interview_url: 'https://interview.example.com/start/LL-8WQM-2TCJ',
      reschedule_url: 'https://interview.example.com/r/LL-9C2D-5WQN',
      interview_url: 'https://interview.example.com/start/LL-3KDP-8VRA'
    }
  }
}

export const VARIABLE_PATTERN = /\{\{([a-z_]+)\}\}/g

export const isVariableKey = (value: string): value is VariableKey => value in variableLabels

/** Replaces every `{{variable}}` with its example value. Unknown names are left as-is. */
export const fillTemplate = (template: string, values: Record<VariableKey, string>) =>
  template.replace(VARIABLE_PATTERN, (match, name: string) => (isVariableKey(name) ? values[name] : match))

/** Counts characters the way WhatsApp does (Unicode code points, so "•" and "–" count as one). */
export const countCharacters = (text: string) => Array.from(text).length

/** Unique variables used across the given strings, in first-use order. */
export const variablesIn = (...texts: string[]) => {
  const found = new Set<VariableKey>()

  texts.forEach(text => {
    for (const match of text.matchAll(VARIABLE_PATTERN)) {
      if (isVariableKey(match[1])) found.add(match[1])
    }
  })

  return [...found]
}

/** WhatsApp rejects templates whose body starts or ends with a variable. */
export const hasEdgeVariable = (body: string) => /^\{\{[a-z_]+\}\}/.test(body) || /\{\{[a-z_]+\}\}$/.test(body.trim())

export const getMessageChecks = (message: MessageTemplate, example: Example) => {
  const filledBody = fillTemplate(message.whatsapp.body, example.values)
  const length = countCharacters(filledBody)
  const templateLength = countCharacters(message.whatsapp.body)
  const buttonLength = message.whatsapp.button ? countCharacters(message.whatsapp.button.label) : null

  return {
    filledBody,
    length,
    templateLength,
    remaining: WHATSAPP_BODY_LIMIT - length,
    withinLimit: length <= WHATSAPP_BODY_LIMIT,
    buttonLength,
    buttonWithinLimit: buttonLength === null || buttonLength <= WHATSAPP_BUTTON_LIMIT,
    edgeVariable: hasEdgeVariable(message.whatsapp.body)
  }
}
