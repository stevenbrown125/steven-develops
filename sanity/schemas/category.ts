import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: { type: 'photo' }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Used for category listings as well as for SEO.',
      type: 'string',
      validation: Rule => Rule.max(255).error(`SEO rules dictate descriptions should not be more than 255 characters.`)
    }),
  ],
})
