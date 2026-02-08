import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';
import 'dotenv/config';

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const ASSETS = path.resolve('public/assets');

// All unique images to upload
const imageFiles = [
  'alessio-soggetti-gdE-5Oui1Y0-unsplash.webp',
  'alessio-soggetti-zxcBR3zNc7I-unsplash.webp',
  'daniel-leone-g30P1zcOzXo-unsplash.webp',
  'konstantin-kleine-V1NVvXmO_dk-unsplash.webp',
  'michal-parzuchowski-EFvP9cHipMQ-unsplash.webp',
  'michal-parzuchowski-HbhJyWnE9Oo-unsplash.webp',
  'olivier-miche-OZACaaUskhg-unsplash.webp',
  'paul-earle-wVjd0eWNqI8-unsplash.webp',
  'wijnand-boerma-CdX_HD9EO_g-unsplash.webp',
  'logos/gmail.svg',
  'logos/slack.svg',
  'logos/notion.svg',
  'logos/linear.svg',
  'logos/asana.svg',
  'logos/outlook.svg',
];

async function uploadImage(filePath) {
  const fullPath = path.join(ASSETS, filePath);
  const filename = path.basename(filePath);
  const contentType = filePath.endsWith('.svg') ? 'image/svg+xml' : 'image/webp';

  console.log(`  Uploading ${filePath}...`);
  const asset = await client.assets.upload('image', createReadStream(fullPath), {
    filename,
    contentType,
  });
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function run() {
  console.log('Uploading images to Sanity CDN...\n');

  // Upload all images and build a map
  const refs = {};
  for (const file of imageFiles) {
    refs[file] = await uploadImage(file);
  }

  console.log(`\nAll ${imageFiles.length} images uploaded. Patching document...\n`);

  // Helper to make image ref with a key
  const img = (file) => refs[file];
  const imgWithKey = (file, key) => ({ ...refs[file], _key: key });

  // Patch the landingPage document with image references
  await client
    .patch('landingPage')
    .set({
      // Hero
      heroBackgroundImage: img('alessio-soggetti-gdE-5Oui1Y0-unsplash.webp'),

      // Benefits items (patch each item's image)
      'benefitsItems[_key=="b1"].image': img('paul-earle-wVjd0eWNqI8-unsplash.webp'),
      'benefitsItems[_key=="b2"].image': img('alessio-soggetti-gdE-5Oui1Y0-unsplash.webp'),
      'benefitsItems[_key=="b3"].image': img('michal-parzuchowski-EFvP9cHipMQ-unsplash.webp'),
      'benefitsItems[_key=="b4"].image': img('konstantin-kleine-V1NVvXmO_dk-unsplash.webp'),

      // Feature cards
      'featuresCards[_key=="f1"].image': img('konstantin-kleine-V1NVvXmO_dk-unsplash.webp'),
      'featuresCards[_key=="f2"].image': img('michal-parzuchowski-HbhJyWnE9Oo-unsplash.webp'),
      'featuresCards[_key=="f3"].image': img('olivier-miche-OZACaaUskhg-unsplash.webp'),

      // How It Works steps
      'howItWorksSteps[_key=="h1"].image': img('michal-parzuchowski-EFvP9cHipMQ-unsplash.webp'),
      'howItWorksSteps[_key=="h2"].image': img('daniel-leone-g30P1zcOzXo-unsplash.webp'),
      'howItWorksSteps[_key=="h3"].image': img('paul-earle-wVjd0eWNqI8-unsplash.webp'),
      'howItWorksSteps[_key=="h4"].image': img('alessio-soggetti-gdE-5Oui1Y0-unsplash.webp'),

      // Stats background
      statsBackgroundImage: img('alessio-soggetti-gdE-5Oui1Y0-unsplash.webp'),

      // Testimonial
      testimonialBackgroundImage: img('alessio-soggetti-zxcBR3zNc7I-unsplash.webp'),

      // CTA background
      ctaBackgroundImage: img('daniel-leone-g30P1zcOzXo-unsplash.webp'),
    })
    .commit();

  // Testimonial avatars and logo strip need full array replacement
  // since they are image-only items
  await client
    .patch('landingPage')
    .set({
      testimonialAvatars: [
        { _type: 'testimonialAvatar', _key: 'a1', image: img('michal-parzuchowski-EFvP9cHipMQ-unsplash.webp') },
        { _type: 'testimonialAvatar', _key: 'a2', image: img('daniel-leone-g30P1zcOzXo-unsplash.webp') },
        { _type: 'testimonialAvatar', _key: 'a3', image: img('paul-earle-wVjd0eWNqI8-unsplash.webp') },
        { _type: 'testimonialAvatar', _key: 'a4', image: img('alessio-soggetti-gdE-5Oui1Y0-unsplash.webp') },
        { _type: 'testimonialAvatar', _key: 'a5', image: img('konstantin-kleine-V1NVvXmO_dk-unsplash.webp') },
        { _type: 'testimonialAvatar', _key: 'a6', image: img('wijnand-boerma-CdX_HD9EO_g-unsplash.webp') },
      ],
      logoStripLogos: [
        { _type: 'logoItem', _key: 'lg1', name: 'Gmail', logo: img('logos/gmail.svg') },
        { _type: 'logoItem', _key: 'lg2', name: 'Slack', logo: img('logos/slack.svg') },
        { _type: 'logoItem', _key: 'lg3', name: 'Notion', logo: img('logos/notion.svg') },
        { _type: 'logoItem', _key: 'lg4', name: 'Linear', logo: img('logos/linear.svg') },
        { _type: 'logoItem', _key: 'lg5', name: 'Asana', logo: img('logos/asana.svg') },
        { _type: 'logoItem', _key: 'lg6', name: 'Outlook', logo: img('logos/outlook.svg') },
      ],
    })
    .commit();

  console.log('Done! All images uploaded and linked to the landing page document.');
}

run().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
