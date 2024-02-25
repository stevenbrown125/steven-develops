export default {
    name: 'codeBlock',
    title: 'Code Block',
    type: 'object',
    fields: [
        {
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'JavaScript', value: 'javascript' },
                    { title: 'TypeScript', value: 'typescript' },
                    { title: 'Python', value: 'python' },
                    { title: 'Java', value: 'java' },
                    { title: 'C#', value: 'csharp' },
                    { title: 'PHP', value: 'php' },
                    { title: 'Ruby', value: 'ruby' },
                    { title: 'Go', value: 'go' },
                    { title: 'C++', value: 'cpp' },
                    { title: 'CSS', value: 'css' },
                    { title: 'HTML', value: 'html' },
                    { title: 'Shell', value: 'shell' },
                    { title: 'YAML', value: 'yaml' },
                ],
                initialValue: 'javascript',
            },
        },
        {
            name: 'code',
            title: 'Code',
            type: 'text',
        },
    ],
    preview: {
        select: {
            language: 'language',
            code: 'code',
        },
        prepare(selection: any) {
            const { language, code } = selection;
            const codeSnippet = code ? code.substring(0, 50) + '...' : '';
            return {
                title: codeSnippet,
                subtitle: language ? `Language: ${language.toUpperCase()}` : 'No language specified',
            };
        },
    },
}
