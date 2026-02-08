import { createClient } from '@sanity/client';
import 'dotenv/config';

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const doc = {
  _id: 'landingPage',
  _type: 'landingPage',

  // SEO
  metaTitle: 'Aireply — Your Intelligent Copilot for Every Message',
  metaDescription: 'Aireply helps you summarize, respond, and manage all your messages with clarity, so you stay ahead without the overwhelm.',

  // Navigation
  navLinks: [
    { _type: 'navLink', _key: 'nav1', label: 'Benefits', href: '#benefits' },
    { _type: 'navLink', _key: 'nav2', label: 'Features', href: '#features' },
    { _type: 'navLink', _key: 'nav3', label: 'How it works', href: '#how-it-works' },
    { _type: 'navLink', _key: 'nav4', label: 'Testimonials', href: '#testimonials' },
    { _type: 'navLink', _key: 'nav5', label: 'FAQ', href: '#faq' },
  ],
  navCtaLabel: 'Get started',
  navCtaHref: '#',

  // Hero
  heroBadge: 'Introducing a new era',
  heroHeading: 'Your intelligent *copilot* for every message',
  heroDescription: 'Aireply helps you summarize, respond, and manage all your inbox with clarity, so you stay ahead without the overwhelm.',
  heroCtaLabel: 'Get Started',
  heroCtaHref: '#',

  // Logo Strip
  logoStripHeading: 'Seamlessly connect with your favorite tools',

  // Benefits
  benefitsBadge: 'Benefits',
  benefitsHeading: 'Why Aireply?',
  benefitsSubheading: 'Designed for clarity and calm',
  benefitsItems: [
    {
      _type: 'benefitItem',
      _key: 'b1',
      title: 'Save time effortlessly',
      content: 'Focus on what truly matters. Aireply handles the heavy lifting \u2014 summarizing, organizing, and prioritizing your messages so you can stay ahead without the extra effort.',
    },
    {
      _type: 'benefitItem',
      _key: 'b2',
      title: 'Stay clear and focused',
      content: 'Cut through inbox clutter with AI-powered prioritization that surfaces what matters most, keeping you focused on high-impact conversations.',
    },
    {
      _type: 'benefitItem',
      _key: 'b3',
      title: 'Communicate with ease',
      content: 'Generate thoughtful replies in seconds that match your tone and style. Aireply learns how you communicate and helps you respond faster.',
    },
    {
      _type: 'benefitItem',
      _key: 'b4',
      title: 'Work across channels',
      content: 'Connect all your communication tools \u2014 email, Slack, and more \u2014 into one unified experience. Manage everything from a single dashboard.',
    },
  ],

  // Features
  featuresBadge: 'Features',
  featuresHeadingLine1: 'Summarize, prioritize, and act with ease',
  featuresHeadingLine2: 'through an AI that simplifies your day.',
  featuresCards: [
    {
      _type: 'featureCard',
      _key: 'f1',
      title: 'Smart summaries',
      description: 'Get instant, accurate summaries of long emails and chaotic threads.',
    },
    {
      _type: 'featureCard',
      _key: 'f2',
      title: 'Reply generator',
      description: 'Aireply drafts replies in your tone, ready for review, edit, and send.',
    },
    {
      _type: 'featureCard',
      _key: 'f3',
      title: 'Priority detection',
      description: "See what's urgent, what's pending, and what can wait with total clarity.",
    },
  ],

  // How It Works
  howItWorksBadge: 'How it works',
  howItWorksHeading: 'How Aireply brings *calm to your inbox*',
  howItWorksSteps: [
    {
      _type: 'howItWorksStep',
      _key: 'h1',
      title: 'Connect your inbox',
      description: 'Quickly and securely connect your inbox and apps \u2014 Aireply integrates smoothly into your existing workflow.',
    },
    {
      _type: 'howItWorksStep',
      _key: 'h2',
      title: 'AI analyzes your messages',
      description: 'Aireply reads and understands the context of every conversation, categorizing messages by priority, urgency, and required action.',
    },
    {
      _type: 'howItWorksStep',
      _key: 'h3',
      title: 'Take action with clarity',
      description: 'Review smart summaries, use suggested replies, and manage your inbox with confidence. Stay on top of everything without the overwhelm.',
    },
    {
      _type: 'howItWorksStep',
      _key: 'h4',
      title: 'Learn and adapt over time',
      description: 'Aireply continuously learns your communication style and preferences, getting smarter with every interaction to deliver increasingly personalized results.',
    },
  ],

  // Stats
  statsBadge: 'Philosophy',
  statsHeadingLine1: 'Made to quiet the noise',
  statsHeadingLine2: 'Aireply helps you focus.',
  statsMission: 'Our mission is to create technology that feels calm, intentional, and human. Aireply blends thoughtful design with quiet intelligence, helping you stay focused on what truly matters.',
  statsCards: [
    {
      _type: 'statCard',
      _key: 's1',
      label: 'Processing speed',
      value: '8\u00d7',
      description: 'Faster inbox triage across all channels.',
    },
    {
      _type: 'statCard',
      _key: 's2',
      label: 'Reply efficiency',
      value: '3.5',
      unit: 'hrs/day',
      description: 'Less time writing, more time doing real work.',
    },
    {
      _type: 'statCard',
      _key: 's3',
      label: 'Tone accuracy',
      value: '98%',
      description: 'Replies that sound naturally like you.',
    },
  ],

  // Testimonial
  testimonialBadge: 'Testimonials',
  testimonialQuote: 'Aireply has completely changed how I handle communication. Long threads that used to drain my time now become clear, simple summaries I can act on instantly. For the first time in years, my inbox actually feels manageable.',
  testimonialAuthorName: 'Joanna Smith',
  testimonialAuthorRole: 'Project Manager',

  // FAQ
  faqBadge: 'FAQs',
  faqHeading: 'Got any questions?',
  faqSubheading: "We've got answers",
  faqItems: [
    {
      _type: 'faqItem',
      _key: 'q1',
      question: 'What exactly does Aireply do?',
      answer: 'Aireply reads, summarizes, and helps you reply to emails \u2014 in your own tone. It organizes what matters so you can focus, not sift through messages.',
    },
    {
      _type: 'faqItem',
      _key: 'q2',
      question: 'Does Aireply replace my email client?',
      answer: 'No \u2014 Aireply works alongside your existing email client and communication tools. It integrates seamlessly with Gmail, Outlook, Slack, and more, enhancing your workflow without replacing the tools you already use.',
    },
    {
      _type: 'faqItem',
      _key: 'q3',
      question: 'Is my data private and secure?',
      answer: 'Absolutely. Security is our top priority. All data is encrypted in transit and at rest. We never sell your data or use it to train models. Aireply is SOC 2 compliant and follows industry best practices for data protection.',
    },
    {
      _type: 'faqItem',
      _key: 'q4',
      question: 'Can I train Aireply to sound like me?',
      answer: 'Yes! Aireply learns your communication style over time. The more you use it, the better it gets at matching your tone, vocabulary, and preferences. You can also provide direct feedback to fine-tune its responses.',
    },
  ],

  // CTA
  ctaHeading: 'Inbox zero, *reimagined*',
  ctaDescription: 'Join thousands who have transformed their communication workflow. Let Aireply bring clarity and calm to every conversation.',
  ctaButtonLabel: 'Get early access',
  ctaButtonHref: '#',

  // Footer
  footerDescription: 'A calm AI copilot that helps you find focus in your inbox.',
  footerColumns: [
    {
      _type: 'footerColumn',
      _key: 'col1',
      heading: 'Product',
      links: [
        { _type: 'navLink', _key: 'p1', label: 'Overview', href: '#' },
        { _type: 'navLink', _key: 'p2', label: 'Features', href: '#features' },
        { _type: 'navLink', _key: 'p3', label: 'Integrations', href: '#' },
        { _type: 'navLink', _key: 'p4', label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      _type: 'footerColumn',
      _key: 'col2',
      heading: 'Company',
      links: [
        { _type: 'navLink', _key: 'c1', label: 'About', href: '#' },
        { _type: 'navLink', _key: 'c2', label: 'Philosophy', href: '#' },
        { _type: 'navLink', _key: 'c3', label: 'Careers', href: '#' },
        { _type: 'navLink', _key: 'c4', label: 'Press', href: '#' },
      ],
    },
    {
      _type: 'footerColumn',
      _key: 'col3',
      heading: 'Resources',
      links: [
        { _type: 'navLink', _key: 'r1', label: 'Journal', href: '#' },
        { _type: 'navLink', _key: 'r2', label: 'Help center', href: '#' },
        { _type: 'navLink', _key: 'r3', label: 'Guides', href: '#' },
        { _type: 'navLink', _key: 'r4', label: 'Contact', href: '#' },
      ],
    },
  ],
  footerSocialLinks: [
    { _type: 'socialLink', _key: 'so1', platform: 'instagram', url: '#' },
    { _type: 'socialLink', _key: 'so2', platform: 'youtube', url: '#' },
    { _type: 'socialLink', _key: 'so3', platform: 'linkedin', url: '#' },
    { _type: 'socialLink', _key: 'so4', platform: 'x', url: '#' },
  ],
  footerCopyright: '\u00a92026 Aireply. All rights reserved.',
  footerLegalLinks: [
    { _type: 'navLink', _key: 'l1', label: 'Privacy policy', href: '#' },
    { _type: 'navLink', _key: 'l2', label: 'Term of service', href: '#' },
  ],
};

async function seed() {
  console.log('Seeding landing page content to Sanity...');
  const result = await client.createOrReplace(doc);
  console.log(`Done! Document ID: ${result._id}`);
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
