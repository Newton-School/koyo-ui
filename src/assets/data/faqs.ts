export const faqs = [
  {
    question: 'Is Koyo UI free to use?',
    answer: 'Koyo UI is intended to be an open component system that can be used in Koyo apps and shared projects.'
  },
  {
    question: 'Is Koyo UI open source?',
    answer:
      'Yes. Koyo UI keeps the copy-and-paste shadcn/ui model and adapts the MIT-licensed Shadcn Studio codebase with Koyo naming, docs, and tokens.'
  },
  {
    question: 'What is the license for Koyo UI?',
    answer:
      'Koyo UI is MIT licensed. Koyo-specific additions should keep the same open-source-friendly posture unless changed later.'
  },
  {
    question: 'How does Koyo UI relate to Koyo Figma tokens?',
    answer:
      'Koyo UI maps Koyo-owned components to the same Figma component and token vocabulary used in design, including color, spacing, radius, typography, and state decisions.'
  },
  {
    question: 'What about base/store Figma components?',
    answer:
      'Base/store components are implementation and reference context. The catalog and docs focus on Koyo-owned components that product teams should copy and evolve.'
  },
  {
    question: 'Do I install Koyo UI as a package?',
    answer:
      'No. Koyo UI follows the shadcn copy-and-paste model: copy the component source into your app, then keep ownership of the local code.'
  },
  {
    question: 'Can I adapt Koyo UI components after copying them?',
    answer:
      'Yes. The copied code is meant to be adapted for product needs while staying aligned with Koyo tokens and shared component patterns.'
  },
  {
    question: 'Does Koyo UI support Tailwind CSS V4?',
    answer:
      "Yes. The current codebase uses Tailwind CSS v4 and CSS variables, which makes it a good fit for Koyo's global-token approach."
  },
  {
    question: 'Can I use Koyo UI with my existing shadcn/ui project?',
    answer:
      'Yes. You can copy Koyo variants and token-aligned CSS into an existing shadcn/ui project, then keep app-specific edits local.'
  }
]

export const introFaqs = [
  {
    question: 'Is this an alternative to shadcn/ui?',
    answer:
      'No. Koyo UI builds on the shadcn/ui copy-and-paste model and applies Koyo-specific tokens, docs, and component decisions.'
  },
  {
    question: 'Which Figma components does Koyo UI document?',
    answer:
      'The docs focus on Koyo-owned components and variants. Base/store components in Figma stay as implementation and reference context.'
  },
  {
    question: 'Where did this codebase come from?',
    answer:
      'Koyo UI is built on shadcn/ui patterns and adapted from the MIT-licensed Shadcn Studio codebase, with product-facing copy rewritten for Koyo.'
  },
  {
    question: 'How can I use Koyo UI components in my project?',
    answer:
      "Explore the catalog, copy the component or block source into your app, and adapt the local code to fit your project's needs."
  },
  {
    question: 'What is the license for Koyo UI?',
    answer:
      'The project is MIT licensed. Keep attribution where needed and confirm repository-level licensing before publishing externally.'
  },
  {
    question: 'How does Koyo UI stay aligned with Figma?',
    answer:
      'Components are written against Koyo component and token decisions so implementation follows the same color, spacing, radius, typography, and state vocabulary used in design.'
  },
  {
    question: 'Does Koyo UI support Tailwind CSS V4?',
    answer:
      "Yes. The current Koyo UI fork uses Tailwind CSS v4 and global CSS variables."
  },
  {
    question: 'Can I modify Koyo UI components or blocks after copying them?',
    answer:
      "Yes. After copying the source, you own the local implementation and can adjust behavior, styling, and integration details for your product."
  },
  {
    question: 'Can I use Koyo UI with my existing shadcn/ui project?',
    answer:
      'Yes. You can copy Koyo variants and token CSS into an existing shadcn/ui app, then adjust local behavior as needed.'
  }
]
