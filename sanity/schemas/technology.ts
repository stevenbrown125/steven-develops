import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'technology',
    title: 'Technology',
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
            name: 'icon',
            title: 'Icon',
            type: 'string'
        }),
    ]
})
