import Breadcrumbs from '@/components/shared/utilities/Breadcrumb';
import Link from 'next/link'

const NotFound = () => {
    const breadcrumbs = [{ href: '/not-found', title: 'Not Found' }]

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <section className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Go back home
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound;