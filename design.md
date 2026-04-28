# design.md

## Design Intent

- Establish a bold, editorial visual direction with strong typographic hierarchy and purposeful asymmetry.
- Create an unforgettable visual moment upfront on the landing experience using layered translucency and subtle texture overlays behind expressive hero typography.
- Define three distinct product surface personalities: expressive and engaging marketing, focused and trustworthy authentication, and data-dense, efficient dashboard.
- Marketing surfaces use contrast-rich, dynamic layouts; authentication flows prioritize clarity and low distraction; dashboard emphasizes operational clarity with subdued tones and precise information hierarchy.
- Avoid generic SaaS hero templates, purple-gradients on white backgrounds, and symmetric, repetitive content structures.

## Information Architecture

- Primary routes:
  - `/` (Public landing, primary CTA: Signup)
  - `/login` (Auth, redirect authenticated users to dashboard, primary CTA: Sign in)
  - `/signup` (Auth, redirect authenticated users to dashboard, primary CTA: Create Account)
  - `/forgot-password` (Auth, form for password reset request, non-authenticated access)
  - `/reset-password` (Auth, token validation and reset form with fallback)
  - `/dashboard` (Authenticated main app shell)
  - `404` (Public not found)
  - `403` (Unauthorized)
  - `offline` (Connectivity fallback)
- Guard behavior:
  - Public routes open to all users.
  - Auth routes redirect unauthenticated users to `/login`.
  - Login/signup redirect authenticated users to `/dashboard`.
  - Reset-password validates token and handles invalid/expired tokens gracefully.

## Layout System

- Use consistent primary container widths with responsive padding for desktop and mobile.
- Marketing sections leverage full-width bands with distinct background treatments to create rhythm and hierarchy.
- Vertical spacing uses a clear section system: larger spacing between major sections, moderate between subsections.
- Landing page incorporates at least one intentional grid-breaking or overlapping element in hero or feature blocks to reinforce memorability.
- Employ a post-login shell dividing screen into:
  - Top bar for global navigation and status
  - Sidebar with persistent app navigation
  - Content header for page-level actions and titles
  - Content area for main interactive and data surfaces

## Design Tokens

- Token categories:
  - Color: semantic roles for surfaces, text, accents, borders, and status states.
  - Typography: roles for display, body, labels, and monospace.
  - Spacing and rhythm: modular scale-based values for margin, padding, and gaps.
  - Radius and border: consistent corner rounding and border weights.
  - Elevation: layered shadow levels for depth.
- Colors:
  - Project-specific palette rooted in a restrained, trustworthy blue base with a vibrant orange accent for primary actions.
  - Strong contrast maintained for accessibility, especially text on backgrounds.
  - Accent colors used sparingly to preserve emphasis.
- Rationale:
  - Blue base conveys professionalism and trust.
  - Orange accents introduce warmth and call attention to CTAs.
  - Restraint in accent use ensures clear visual hierarchy.

## Typography

- Split roles between expressive display fonts and pragmatic utility fonts.
- Typography system chosen for a modern, readable appearance fitting both editorial marketing and dense dashboard content.
- Hierarchy:
  - Hero and section titles use large, expressive display styles with clamp scaling.
  - Headings and subheadings adopt medium weight, clear scales.
  - Body text, metadata, and labels use simpler, highly legible fonts emphasizing clarity.
- Expressive typography limited to marketing surfaces and hero sections; forbidden in data tables and dense UI regions.
- Display and body font pairing chosen for contrast: display lends personality, body ensures functional reading comfort.

## Interaction & Motion

- Global interaction states standardized: hover (color/lightness shift), focus-visible (clear outlines), disabled (muted), and press feedback (scale or shade).
- Motion signature:
  - Staggered text and element entrances on hero onboarding.
  - Scroll-triggered reveal for major marketing sections.
  - Defined transitions for state changes emphasizing subtlety.
- Motion principles:
  - Purposeful and minimal to avoid distraction.
  - Content supportive to enhance user understanding.
- Reduced motion preference respected with user OS settings.

## Authentication UX

- Auth surfaces employ a low distraction, high trust design.
- Screens overview:
  - Sign in
  - Sign up
  - Forgot password
  - Reset password
- Forms provide immediate validation feedback and contextual error messages.
- Success confirmations appear with clear, reassuring messaging.
- Desktop layouts favor split screen optional trust panels; mobile layouts remain streamlined and focused.

## Dashboard UX

- Persistent shell with navigation and status visible across views.
- First screen emphasizes key metrics, recent activity, and actionable quick links.
- Data densities tuned to balance clarity with information richness.
- Messages adapt to role/permission context when needed.
- Use progressive disclosure to surface details without overwhelming users.

## UX States

- Comprehensive states handled uniformly throughout:
  - Loading: skeleton or spinner placeholders maintaining layout.
  - Empty: clear message with suggestions or CTAs.
  - Error: concise actionable messaging with retry options.
  - Success: confirmation and next-step prompts.
  - Offline: connectivity status with graceful fallback actions.
  - 403: unauthorized notice with guidance.
  - 404: friendly not found message with navigation options.
- States maintain layout stability and consistent style.

## Forms & Trust UX

- Baseline:
  - Validation on blur and submission.
  - Inline, contextual error feedback.
  - Predictable submit lifecycle including disabling submit while processing.
- Sensitive actions prompt explicit trust signals.
- Session expiration warnings encourage re-authentication with minimal disruption.

## Accessibility & Responsive Behavior

- Keyboard navigation integrated and focus states always visible.
- Semantic HTML labeling used throughout.
- Contrast ratios meet WCAG AA standards or higher.
- Mobile-first design approach with flexible layouts and adaptive navigation.
- Section collapses for complex dashboards on small viewports.
- Dashboard and authentication screens tailored for responsive usability.

## Content & Microcopy

- Voice calibrated per surface:
  - Marketing: persuasive, concise, outcome-focused.
  - Authentication: clear, reassuring, straightforward.
  - Dashboard: direct, functional, operational.
- CTAs emphasized with clear, action-oriented text.
- Error messages use plain language with actionable next steps.
- Copy length capped to maintain scanning efficiency.

## Implementation Notes

- Prioritize reusable Tailwind + shadcn-style components and shared layout primitives.
- Leverage existing component library for consistency.
- Ensure route-level completeness for all major surfaces.
- Follow spacing and visual rhythm tokens for layout.
- Employ defined design tokens and typography consistently.
- Implement state UX as standardized components to reuse across flows.

## QA Checklist

- Visual consistency across breaks and states.
- Interaction fidelity: hover, focus-visible, disabled, press feedback.
- Accessibility: keyboard, semantics, contrast compliance.
- Responsive behavior verified on common device widths.
- UX states tested for loading, empty, error, success, offline, 403, 404.

## Definition of Done

- All required sections from intent through QA checklist completed without conflict.
- Rules concrete and scannable with no ambiguous language.
- Output sufficient for deterministic React + Tailwind + shadcn-style implementation.
- Unforgettable visual moment and tone fully defined.
- UX state coverage confirmed.
- Accessibility and responsive baselines enforced.