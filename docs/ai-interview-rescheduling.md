# AI Interview Rescheduling: candidate UI

Candidate-facing screens for **Smart Reminders & Rescheduling for AI Interviews** (PRD v1.0, 26 Oct 2026), built from Koyo UI components. Field notes from the Urban Company calling sheet shaped the copy and the reason placeholders. Every name, link and contact in the mock data is a placeholder.

## What's in the repo

| Block                     | Preview                                                                | What it is                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `interview-reschedule-01` | `/preview/ai-interview/interview-rescheduling/interview-reschedule-01` | The candidate page at the unique rescheduling link: reason form → fresh link → every status screen.        |
| `interview-reschedule-02` | `/preview/ai-interview/interview-rescheduling/interview-reschedule-02` | WhatsApp and email previews of every message in the rescheduling path, with timing and cancellation rules. |

Both are listed in the catalog under **Blocks → AI Interview → Interview Rescheduling**.

**Walking through the states.** The floating **Prototype** button (bottom right) switches the interview type (operational · Urban Company / coding), the candidate state, a failed first submit and a slow network. Deep links open a state directly:

```
?state=eligible | original-link-active | fresh-link-active | interview-started |
       interview-completed | final-link-expired | ineligible | invalid-link | load-error
&kind=operational | coding
```

## Design direction

After the first review the page was cut down to match the designer's mockup (OpenTable's "Modify your reservation"):

- One column: a small state heading, the square company logo with the role and one meta row, then a tinted banner that carries the key message.
- On the form, the blue banner says it's a one-time request valid for 24 hours, with the exact deadline if requested now.
- Reasons are compact Uber-style pills with no icons, several per row; the optional note and a full-width blue "Get new interview link" button follow.
- The "What to know before you start" panel, "What happens next" and the original-vs-new link box are gone. Need help is a single line.
- The whole form fits above the fold at 1280×800; on phones the button is pinned to the bottom.

A matching prototype built with real [Grauity](https://grauity.newtonschool.co) components (`@newtonschool/grauity`: `NSButton`, `NSTextArea`, `NSErrorMessage`, `NSIcon`, `NSTypography`, `NSPill`, Grauity tokens) lives outside this repo, because this repo type-checks every `.tsx` file against its Tailwind setup. It uses the same states, copy and mock API, so either can be handed to engineering.

## Screens and the PRD

One page renders the state the server returns (PRD §7: "logical screens… not necessarily separate pages").

| `state`                                           | PRD                       | Headline                                        | Primary action                                 | Never shows                                        |
| ------------------------------------------------- | ------------------------- | ----------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| loading                                           | FR-08                     | skeleton                                        | —                                              | the form before eligibility is known               |
| `eligible`                                        | §6, §7.1, §8 screen 1     | Reschedule your interview                       | **Get New Interview Link**                     | Start/copy link, date pickers, "booked"/"approved" |
| (form) validation error                           | §8 screen 2               | inline: "Please choose a reason to continue."   | same                                           | colour-only errors, cleared input                  |
| (form) submitting                                 | §8 screen 3, FR-09        | button: "Getting your new link…"                | none (locked)                                  | a second clickable submit, early success           |
| (form) temporary failure                          | §11                       | "We couldn't create your new link"              | retry, same idempotency key                    | "option used", error codes                         |
| (form) unknown outcome                            | §11, App. B               | "We couldn't confirm your request"              | retry, which replays the same request          | any success or failure claim                       |
| `fresh-link-active` (just issued)                 | §7.2, §8 screen 4, AC-03  | Your new interview link is ready                | **Start Interview**                            | the form, "reschedule again"                       |
| `fresh-link-active` (revisit or duplicate submit) | §7.3, AC-04, AC-10        | Your new interview link is still active         | **Start Interview**                            | the form, a second link                            |
| `original-link-active`                            | §3.1, §8 guardrail, FR-06 | Your interview link is still active             | Start Interview (original link)                | any mention of rescheduling                        |
| `interview-started`                               | §7.3, AC-02, AC-09        | You've already started this interview           | Continue interview (hands off to the platform) | "missed", the form, a countdown                    |
| `interview-completed`                             | §8 screen 5               | You've completed this interview                 | —                                              | any start or reschedule action                     |
| `final-link-expired`                              | §5.4, §7.3, FR-12, AC-08  | Your interview link has expired                 | email / call HR (support repeated)             | Start, Get New Interview Link                      |
| `ineligible`                                      | §7.3, FR-13, AC-12        | Rescheduling isn't available for this interview | contact HR                                     | a reason that could reveal a rejection             |
| `invalid-link`                                    | §7.3, §8 screen 2         | This link isn't working                         | contact platform support                       | company or role (unknown)                          |
| `load-error`                                      | §8 screen 2               | We couldn't load your interview details         | Try again                                      | the form, error codes                              |

**Overlays:**

- Offline banner, with the CTA disabled.
- Under 3 hours left: a warning that says "start", not "finish".
- Coding interview on a phone: a laptop warning before submit and again on the confirmation.
- In-app browser (WhatsApp, Instagram…): "Open in Chrome" on the new-link screen.
- Local time is shown next to IST when the device isn't in India.
- "Not {first name}?" line on the form.

## Copy decisions

- **CTA stays "Get New Interview Link"** (PRD §6.1, §7.1, §8), not "Get a demo link". "Demo" sounds like a practice run, and this button uses up the candidate's only reschedule.
- **The deadline is "Start before {exact IST}".** The PRD only requires a _start_ before expiry; the candidate "may finish afterward under the existing interview-session rules". "Valid for 24 hours" is the explanation, and it appears in the bottom note.
- **The one-time notice is the blue banner above the reasons**, so it is read before submitting (§6.3). A short line under the CTA repeats it ("One-time request · valid for 24 hours", plus duration and stable internet), as requested. The new-link banner repeats "No further rescheduling" (§8).
- **The deadline is shown before submit**, as a live "If you request now, start by …" line (§8 guardrail 1).
- **Dates are always explicit.** Format: `Wed, 28 Oct 2026, 4:30 PM IST`. 12:xx AM gets "(Tuesday night)" and 12:00 PM gets "(noon)". Relative countdowns only ever appear next to the exact time.
- **Reasons are the five agreed labels, word for word** (§6.2), shown as pills. The note's placeholder changes with the chosen reason (technical issue → "I didn't have a laptop, or my internet kept dropping") to help candidates map real situations onto them. The note is always optional.
- **The copy never implies** HR approval, a booked slot, or that anyone will act on the free text.

## Wiring it to the real service

`InterviewReschedule` (named export) takes one prop, `api: RescheduleApi`:

```ts
type RescheduleApi = {
  getStatus: () => Promise<RescheduleStatus> // GET  /reschedule/{token}
  submit: (req: { reason; explanation; idempotencyKey }) => Promise<SubmitResult> // POST /reschedule/{token}
}
```

- **`getStatus`** returns one of the `RescheduleStatus` variants in `reschedule-data.ts`, plus an optional `serverTime`. Countdowns use `serverTime` to correct a wrong device clock. If `getStatus` throws, the page shows `load-error`. The page re-checks the status on tab focus, on back-forward cache restore, and once when a deadline passes on screen. If that check says the link still works, the page trusts the server. A late response never takes the view back to an older state.
- **`submit`** results:
  - `{ ok: true, status }`: the link was issued.
  - `{ ok: false, code: 'already-used' | 'not-eligible', status }`: the page redraws that state.
  - `{ ok: false, code: 'temporary' }`: issuance was rolled back, so the candidate can retry.
  - **Throwing** means the outcome is unknown. The page re-checks the status and never shows success unless a link exists.
- **Idempotency key.** Each request gets a key. If the outcome is unknown (timeout, dropped connection), the retry resends the same request with the same key, and the server must answer with the outcome of the first one (FR-09). After a definite `temporary` failure, nothing was created, so the next attempt is a new request with a new key.
- **Data the page needs** beyond the PRD §10 model:

  - interview `title`, `kind` (coding or operational)
  - `durationMinutes`, `languages`, `freshLinkValidityHours`
  - candidate first name
  - company name and monogram or logo

  Support details already exist in §10.

- **Device rules.** Coding interviews show a laptop warning to phone users before and after requesting a link. Move device rules to campaign config once Product confirms them (see Q3).
- **Analytics (§13).** A tap on Start Interview is not a start: the page stays on the link screen until the platform reports one.

## Edge cases handled in the UI

| Scenario                                      | Behaviour                                                                                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Double click / Enter during submit            | In-memory lock before the request; button `aria-disabled` with spinner; inputs locked; a retry after an unknown outcome reuses the same idempotency key.                                    |
| Timeout or dropped connection during submit   | Re-check status: link exists → confirmation; still eligible → "couldn't create"; check fails → "couldn't confirm", retry replays the same key.                                              |
| Second tab / device already submitted         | `already-used` → existing link with "You already have a new link".                                                                                                                          |
| Tab left open, link used or expired elsewhere | Quiet re-check on focus redraws the current state.                                                                                                                                          |
| Countdown hits zero on screen                 | Start disabled, "Checking…", status re-fetched; server decides `final-link-expired` vs started.                                                                                             |
| Candidate outside IST / wrong device clock    | IST first, local time as a second line; countdowns are corrected with `serverTime` and only ever trigger a re-check.                                                                        |
| Coding interview opened on a phone            | Laptop warning before submit and on confirmation; Share button to move the link to a computer.                                                                                              |
| WhatsApp / Instagram in-app browser           | "Open in Chrome" notice; copy falls back to `execCommand`, then "press and hold to copy".                                                                                                   |
| Offline                                       | Banner; CTA disabled with the reason in text; answers kept.                                                                                                                                 |
| Link forwarded to someone else                | First name only, plus "Not {name}? Please don't use this link".                                                                                                                             |
| Screen readers / keyboard                     | Focus moves to the new H1 and the tab title updates on every state change; errors use `role=alert` + `aria-describedby`; radio group with arrow keys; countdown isn't announced every tick. |
| Light and dark mode                           | Status tints use `color-mix()` with `--background`/`--foreground`, so they follow whichever theme variables are active, with or without a `.dark` class.                                    |

## Koyo design-system follow-ups

The reviews found two issues in shared Koyo components. These blocks work around them locally; the fixes belong in the design system.

- **Brand button contrast.** White text on `--koyo-brand` (`#d95a2b`) is 3.7:1, and the lighter hover colour is 2.7:1. WCAG AA needs 4.5:1 for button-sized text. These blocks use a slightly deeper mix of the same orange (about 5:1) that darkens on hover (`brandAction` in `reschedule-ui.tsx`). Consider darkening the token, or making hover darker instead of lighter.
- **`Progress` drops its `value`.** The primitive never passes `value` to the Radix root, so every progress bar is announced as indeterminate. The countdown bar here sets `aria-valuenow` and `aria-valuetext` itself.

## Open questions

The PRD already answers several questions: the 24-hour validity is fixed, the five reasons are agreed, the explanation is optional, contacting HR changes nothing, and nights are fine for fresh-link reminders. They're left out below.

**Blocking**

1. **What counts as "started" for an AI interview?** Opening the link, consent, the device/face check, or the first question? If checks count, candidates who failed on wifi or face detection (both in the calling sheet) can never reschedule, and a failed check burns the final link. _Default: the platform's start event after checks pass._
2. **Does the rescheduling form link expire?** It could close after a window, at campaign close, or never. _Default: open until a link is issued, the campaign closes or HR revokes it. Expired tokens show "This link isn't working — it may have expired"._
3. **Device rules per interview type.** Can operational (Urban Company) interviews be taken on a phone? 3 of the 15 stated reasons were "no laptop", so saying "a phone works" would remove a major blocker. _Default: operational = laptop or Android phone; coding = laptop/desktop only._
4. **Is the new link sent by WhatsApp/email as soon as it's issued?** Appendix A has no such message. The page doesn't claim it was sent; block 02 shows a proposed "fresh link issued" message.
5. **Does the platform report "in progress" separately from "completed"?** _Default: separate screens; "Continue interview" hands off to the platform._
6. **Is issuance atomic, with rollback on failure?** The "your one-time request hasn't been used" copy depends on it.
7. **Fallback support contact for invalid links.** These have no campaign to take a contact from.

**Non-blocking**

8. Who can read the optional explanation, and how long is it kept (§14.2)? The helper text makes no access claim until this is decided.
9. Is there an accommodation route (disability, language)? Every screen points to HR today.
10. Interview language per campaign (Telugu?), and page language (Hindi/Telugu translations)?
11. A "test your camera and mic" check that doesn't count as a start, offered on the confirmation screen only? This is where a "demo link" idea could live without competing with the CTA.
12. Branding and sender: Koyo, Newton School, or the hiring company first? What name do candidates see on WhatsApp?
13. Interview title: the form's meta row drops the round ("Round 1 · AI coding interview") to stay on one line. Is company + role enough to tell invitations apart (AC-11), or should the round show there too?
