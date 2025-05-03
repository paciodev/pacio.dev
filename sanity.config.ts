import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import StudioBar from './components/sanity/StudioBar'
import StudioLogo from './components/sanity/StudioLogo'

import { schemaTypes } from './schemas'
import { myTheme } from './theme'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: `Content_Managment_System_for_Pacios_projects`,
  title: `Content Managment System for Pacio's projects`,
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), colorInput()],

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