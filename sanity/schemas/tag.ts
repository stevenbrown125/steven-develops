import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tag',
    title: 'Tag',
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
    ]
})