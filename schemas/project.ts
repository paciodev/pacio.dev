import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'Link to github repo',
      type: 'url',
    }),
    defineField({
      name: 'live',
      title: 'Link to live preview',
      type: 'url',
    }),
    defineField({
      name: 'colorLight',
      title: 'Light accent color for project',
      type: 'color',
    }),
    defineField({
      name: 'colorDark',
      title: 'Dark accent color for project',
      type: 'color',
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'technologies',
      title: 'List of Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technology' } }]
    }),
    defineField({
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
