# Steven Develops Portfolio Site

Welcome to my portfolio site!

For the frontend, I built this site using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) configured for static site generation.

For the backend, I built this site using [`npm create sanity@latest`](https://www.sanity.io/) configured to serve static content.

## Getting Started

### Environment Setup

To get started, you will need to have an account with [Sanity](https://www.sanity.io/) and have registered a project. You will need the projectId and your token. Update your `frontend/env.local` with:

```bash
SANITY_PROJECT_ID=your-project-id
SANITY_API_KEY=your-token
```

Then update your `sanity/sanity.cli.ts` and `sanity.config.ts` to use your project id.

Then you should be good to spin things up

### Firing up the application

Start with the sanity directory, and run

```bash
npm run dev
```

Then, in a new terminal, navigate to the frontend directory and run

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contact

Steven Brown
Email: [smbrown1@student.fullsail.edu](mailto:smbrown1@student.fullsail.edu)
