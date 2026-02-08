import { defineConfig, type IntrinsicTypeName } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';
import { structure } from './sanity/desk/structure';

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID ?? import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_STUDIO_DATASET ?? import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'company',
  title: 'Company',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter((template) => template.schemaType !== 'landingPage'),
  },
});
