import { navLink } from './objects/navLink';
import { benefitItem } from './objects/benefitItem';
import { featureCard } from './objects/featureCard';
import { howItWorksStep } from './objects/howItWorksStep';
import { statCard } from './objects/statCard';
import { faqItem } from './objects/faqItem';
import { testimonialAvatar } from './objects/testimonialAvatar';
import { logoItem } from './objects/logoItem';
import { footerColumn } from './objects/footerColumn';
import { socialLink } from './objects/socialLink';
import { landingPage } from './landingPage';

// Section blocks (page builder)
import { heroBlock } from './blocks/heroBlock';
import { logoStripBlock } from './blocks/logoStripBlock';
import { benefitsBlock } from './blocks/benefitsBlock';
import { featuresBlock } from './blocks/featuresBlock';
import { howItWorksBlock } from './blocks/howItWorksBlock';
import { statsBlock } from './blocks/statsBlock';
import { testimonialBlock } from './blocks/testimonialBlock';
import { faqBlock } from './blocks/faqBlock';
import { ctaBlock } from './blocks/ctaBlock';
import { page } from './page';

export const schemaTypes = [
  // Object types
  navLink,
  benefitItem,
  featureCard,
  howItWorksStep,
  statCard,
  faqItem,
  testimonialAvatar,
  logoItem,
  footerColumn,
  socialLink,
  // Section blocks
  heroBlock,
  logoStripBlock,
  benefitsBlock,
  featuresBlock,
  howItWorksBlock,
  statsBlock,
  testimonialBlock,
  faqBlock,
  ctaBlock,
  // Document types
  landingPage,
  page,
];
