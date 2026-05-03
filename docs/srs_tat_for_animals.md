# TAT for Animals — Software Requirements Specification (SRS)

**Project:** tatforanimals.com — New Build
**Version:** 0.2
**Date:** April 2026
**Author:** Siyoul
**Client:** Tapas Fleming — TATLife®, Inc.
**Status:** In progress — updated after April 19 meeting

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Site Structure](#3-site-structure)
4. [Membership & Pricing](#4-membership--pricing)
5. [Functional Requirements](#5-functional-requirements)
6. [Content Management](#6-content-management)
7. [Payments](#7-payments)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Open Items](#9-open-items)

---

## 1. Project Overview

### 1.1 Background

TAT for Animals is a new, independent platform built specifically for animal owners.
TATLife.com remains exactly as it is — this site is built completely separately with no connection to or impact on tatlife.com.

### 1.2 Goals

- Build a dedicated membership platform for animal owners
- Provide automated billing and content access across two subscription tiers
- Enable Jez to manage content independently without developer assistance
- Operate fully independently from TATLife.com

### 1.3 Target Audience

Animal owners who want to help their animals feel calm and at ease — people who sense their animal is carrying something, and want to do something about it.

### 1.4 Out of Scope

- No changes of any kind to TATLife.com
- No 1:1 session booking
- No certification programs
- No complex course building
- No "For People" program section — the human healing dimension is woven into the homepage narrative, not a separate offering

### 1.5 Design Philosophy

The site follows a **minimal, experience-first** design principle. Visitors should feel something before they understand something. Every structural decision — navigation, page count, content order — serves this principle.

### 1.6 Color Direction

- Reference the existing tatlife.com website for color — specifically its brighter greens and oranges
- Avoid dark, heavy tones — lean toward lighter, warmer versions of the green/orange palette
- ⚠️ Exact color palette pending final confirmation from Tapas (April 2026)

---

## 2. Tech Stack

**Confirmed — April 19, 2026**

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js + TypeScript |
| Styling | Tailwind CSS |
| Content Management | Sanity CMS |
| Database & Auth | Supabase |
| Payments | Stripe + PayPal (separate integrations) |
| Hosting | Vercel |
| Email | Resend |
| Workflow Automation | Make.com *(optional — for future growth)* |

---

## 3. Site Structure

### 3.1 Navigation

```
[Logo]                              [Join]
```

For logged-in members:

```
[Logo]                              [My Account]
```

Navigation is intentionally minimal. A visitor's journey — feel something → trust it → join — should not be interrupted by links that lead away from the homepage before that journey is complete. About, FAQ, and supporting content live in the footer or as homepage scroll sections.

### 3.2 Pages

| Page | Content |
|------|---------|
| `/` | Hero → How It Works → Stories → Membership CTA → About Tapas |
| `/membership` | 2-tier pricing cards + signup flow |
| `/dashboard` | Members only — video library + webinar recordings |
| `/login` | Login / sign up |
| `/about` | Tapas intro + TAT for Animals story |
| `/faq` | Frequently asked questions |

### 3.3 Homepage Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Emotional hook — "Help your animal feel calm and at ease." |
| 2 | How It Works | Simple, feeling-based explanation of TAT for Animals |
| 3 | Stories | 2–3 real animal healing stories — specific and human |
| 4 | Membership | 2-tier cards + CTA |
| 5 | About Tapas | Trust signal — who Tapas is, why she built this |

> **Note on Stories:** 2–3 curated stories on the homepage. No "read more stories" link — confirmed by Tapas to avoid distracting new visitors from the purchase flow.

### 3.4 Visitor Journey

```
New visitor:      Homepage → Join → /membership → Payment → /dashboard
Returning member: Homepage → My Account → /dashboard
```

---

## 4. Membership & Pricing

| Tier | Price | Includes |
|------|-------|---------|
| **The Calm Library** | $27/mo | TAT for Animals video library (24 videos across 4 categories) |
| **The Calm Circle** | $47/mo | Everything in The Calm Library + monthly live webinar access + full archive of past recordings |

---

## 5. Functional Requirements

### 5.1 Authentication

- Email / password login
- Content access controlled by subscription tier
- Access granted automatically upon successful payment
- Access removed automatically after billing period ends on cancellation

### 5.2 Member Dashboard

| Section | Function |
|---------|---------|
| Video Library | 24 videos across 4 categories (Foundational · Main · Bonus 2025 · Bonus 2026), accessible by subscription tier |
| Webinar Recordings | Monthly recordings added after each live session (Premium tier) |
| Upcoming Webinars | List of upcoming webinar dates and times |
| Subscription Management | View current plan, upgrade, cancel |

### 5.3 Automation

- Stripe payment success → account created → welcome email sent automatically
- Subscription cancelled → access removed after billing period ends automatically
- Subscription renewal reminder sent 3 days before billing date
- Monthly webinar invitation sent automatically to eligible members before each session
- New webinar recording added to library → notification email sent to eligible members automatically

### 5.4 Data & Growth *(Phase 2)*

One of the core advantages of building on Next.js + Supabase is that subscriber behavior data can be collected from day one — and used to make smarter decisions over time.

**Questions this unlocks:**

- Which videos are watched most — and where do people stop?
- Which content is driving Premium upgrades?
- Which subscribers are at risk of cancelling — and when should we reach out?
- Which marketing channel (Instagram, YouTube, podcast) is actually converting to paid subscribers?

**What becomes possible:**

| Capability | How it works |
|------------|-------------|
| Content insight | Watch time + completion data per video → informs what Tapas creates next |
| Churn prevention | Subscribers inactive for 14+ days → automated re-engagement email |
| Marketing attribution | Track which channel brought each subscriber → spend budget where it converts |
| Webinar impact | Compare retention rates of webinar attendees vs. non-attendees |

None of this requires new tools — it's built on top of the same Supabase database from Phase 1. The data starts accumulating from launch, so by the time Phase 2 begins, there's already something to work with.

---

## 6. Database Schema (Supabase)

Three tables. All others handled by Stripe and Supabase Auth.

| Table | Purpose |
|-------|---------|
| `profiles` | User data + subscription tier (`basic` / `premium` / `none`) |
| `subscriptions` | Stripe subscription ID + status + billing dates |
| `video_watch_events` | Video and webinar watch history — built now for future data pipeline use |

### video_watch_events

| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | Primary key |
| `user_id` | uuid | References `profiles` |
| `content_id` | text | Sanity document ID |
| `content_type` | text | `'video'` or `'webinar'` |
| `watched_at` | timestamp | |
| `watch_duration` | integer | Seconds |
| `completed` | boolean | |

> Video and webinar content lives in Sanity CMS. Access control is handled server-side based on the `tier` field in `profiles` — no separate content_access table needed.

---

## 7. Content Management

### What Jez Can Do Independently

| Task | Method | Time |
|------|--------|------|
| Add monthly webinar recording | Sanity Studio — 3 steps | 5 min |
| Upload new video | Sanity Studio — 3 steps | 5 min |
| Update text / images | Sanity Studio | 10 min |

> Sanity Studio 3 steps: Log in → Create new entry + paste URL → Publish

### What Requires a Developer

- Adding new features
- Design changes
- Structural changes to pages

---

## 7. Payments

### Stripe
- Automated subscription billing
- Real-time access control via webhooks
- Self-service subscription cancellation

### PayPal
- Stripe does not natively support PayPal for US-based accounts
- Stripe and PayPal are integrated separately, running as two independent payment options side by side
- Both presented cleanly under a unified checkout interface

---

## 8. Non-Functional Requirements

### Performance
- Lighthouse score > 90 (mobile and desktop)
- Automatic image optimization (WebP)

### Security
- All content access verified server-side
- Stripe handles all payment data — no card information stored
- SSL required

### Accessibility
- WCAG 2.1 AA compliant
- Minimum 16px font, 44px touch targets

### Independence
- Jez: full independence for content management
- Replacement developer: any experienced Next.js developer can get up to speed in 1–2 days

---

## 9. Open Items

> ⚠️ Pending Tapas confirmation

| Item | Status |
|------|--------|
| Membership tier names | ✅ Confirmed — The Calm Library / The Calm Circle |
| Membership pricing | ✅ Confirmed — $27/mo / $47/mo |
| Membership benefits — exact inclusions per tier | ✅ Confirmed — see Section 4 |
| Access to 24 videos — Vimeo access granted | ✅ Jez added developer as Vimeo member |
| Tapas photos + Animals-specific images | ✅ Received |
| Animal healing stories for homepage | ⚠️ Pending Tapas / Jez |
| Timeline and budget estimate | ✅ Complete — see docs/estimate.md |
| FAQ page content — subscriber-only video content confirmed as members-only. /faq uses rewritten foundational content instead | ✅ Resolved |
| Recovery from Surgery — Tapas considering creating new video content on this topic | ⚠️ Pending — Tapas to confirm |
| PayPal Business account — whether existing account can be used | ⚠️ Pending — checking with Jez |
| Homepage intro video — 3–4 min TAT for Animals introduction | ✅ Tapas confirmed she will record this |

---

## 10. Timeline Estimate

Based on current scope. Assumes content (videos, photos, stories) and membership details are provided on a rolling basis.

| Phase | Scope | Duration |
|-------|-------|----------|
| **A** | Sanity CMS setup + schema + Next.js integration | 1 week |
| **B** | Homepage — Hero, How It Works, Stories, Pricing, About Tapas | 1.5 weeks |
| **C** | Dashboard — video library, webinar recordings, upcoming schedule | 1.5 weeks |
| **D** | /about and /faq pages | 0.5 weeks |
| **E** | Automation — Make.com + Resend (webinar invitations, recording notifications) | 1 week |
| **F** | PayPal integration | 0.5 weeks |
| **G** | QA + mobile optimization + domain setup | 1 week |
| **Total** | | **7 weeks** |

### Notes

- Timeline assumes membership tier names, pricing, and benefits are confirmed before Phase B begins
- Content (videos, photos, stories) can be swapped in at any phase — placeholders used until ready
- Real-world estimate with feedback cycles and content delays: **8–10 weeks**

---

*Last updated: April 2026 — v0.2*
