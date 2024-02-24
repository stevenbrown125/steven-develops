import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
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
            name: 'description',
            title: 'Description',
            description: 'Used for project listings as well as for SEO.',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'reference',
            to: { type: 'photo' }
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        }),
        defineField({
            name: 'startDate',
            title: 'Started on',
            type: 'date',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'completionDate',
            title: 'Completed on',
            type: 'date',
        }),
        defineField({
            name: 'liveURL',
            title: 'Live URL',
            type: 'slug',
            options: {
                maxLength: 96,
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
})
