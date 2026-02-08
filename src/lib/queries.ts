export const LANDING_PAGE_QUERY = `
  *[_type == "landingPage" && _id == "landingPage"][0]{
    metaTitle,
    metaDescription,
    navLinks[]{ label, href },
    navCtaLabel,
    navCtaHref,
    heroBadge,
    heroHeading,
    heroDescription,
    heroBackgroundImage,
    heroCtaLabel,
    heroCtaHref,
    logoStripHeading,
    logoStripLogos[]{ name, logo },
    benefitsBadge,
    benefitsHeading,
    benefitsSubheading,
    benefitsItems[]{ title, content, image },
    featuresBadge,
    featuresHeadingLine1,
    featuresHeadingLine2,
    featuresCards[]{ title, description, image },
    howItWorksBadge,
    howItWorksHeading,
    howItWorksSteps[]{ title, description, image },
    statsBadge,
    statsHeadingLine1,
    statsHeadingLine2,
    statsMission,
    statsBackgroundImage,
    statsCards[]{ label, value, unit, description },
    testimonialBadge,
    testimonialQuote,
    testimonialAuthorName,
    testimonialAuthorRole,
    testimonialAvatars[]{ image },
    testimonialBackgroundImage,
    faqBadge,
    faqHeading,
    faqSubheading,
    faqItems[]{ question, answer },
    ctaHeading,
    ctaDescription,
    ctaButtonLabel,
    ctaButtonHref,
    ctaBackgroundImage,
    footerDescription,
    footerColumns[]{ heading, links[]{ label, href } },
    footerSocialLinks[]{ platform, url },
    footerCopyright,
    footerLegalLinks[]{ label, href }
  }
`;

// Page builder queries
export const ALL_PAGES_QUERY = `
  *[_type == "page" && defined(slug.current)]{ "slug": slug.current }
`;

export const PAGE_BY_SLUG_QUERY = `
  {
    "page": *[_type == "page" && slug.current == $slug][0]{
      title,
      metaTitle,
      metaDescription,
      sections[]{
        _type,
        _key,
        _type == "heroBlock" => {
          badge, heading, description, backgroundImage, ctaLabel, ctaHref
        },
        _type == "logoStripBlock" => {
          heading, logos[]{ name, logo }
        },
        _type == "benefitsBlock" => {
          badge, heading, subheading, items[]{ title, content, image }
        },
        _type == "featuresBlock" => {
          badge, headingLine1, headingLine2, cards[]{ title, description, image }
        },
        _type == "howItWorksBlock" => {
          badge, heading, steps[]{ title, description, image }
        },
        _type == "statsBlock" => {
          badge, headingLine1, headingLine2, mission, backgroundImage, stats[]{ label, value, unit, description }
        },
        _type == "testimonialBlock" => {
          badge, quote, authorName, authorRole, avatars[]{ image }, backgroundImage
        },
        _type == "faqBlock" => {
          badge, heading, subheading, items[]{ question, answer }
        },
        _type == "ctaBlock" => {
          heading, description, ctaLabel, ctaHref, backgroundImage
        }
      }
    },
    "site": *[_type == "landingPage" && _id == "landingPage"][0]{
      navLinks[]{ label, href },
      navCtaLabel,
      navCtaHref,
      footerDescription,
      footerColumns[]{ heading, links[]{ label, href } },
      footerSocialLinks[]{ platform, url },
      footerCopyright,
      footerLegalLinks[]{ label, href }
    }
  }
`;
