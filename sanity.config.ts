import { defineConfig, WorkspaceOptions } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme';
import StudioLogo from './components/sanity/StudioLogo';
import StudioBar from './components/sanity/StudioBar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig<WorkspaceOptions>({
  name: `Content_Managment_System_for_Pacios_projects`,
  title: `Content Managment System for Pacio's projects`,
  basePath: '/admin',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioBar
    }
  },

  theme: myTheme
})