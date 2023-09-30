import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'site',
  title: 'Site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
