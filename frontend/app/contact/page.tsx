
import Breadcrumbs from '@/components/Breadcrumb';
import ContactForm from '@/components/ui/ContactForm';
import Figure from '@/components/ui/Figure';

export default function ContactPage() {


    return (
        <section >
            <header>
                <Breadcrumbs breadcrumbs={[{ href: '/contact', title: 'Contact' }]} />
                <h2>Contact</h2>
            </header>
            <div className='flex'>
                <div className="space-y-4 max-w-xl mx-auto dark:text-white flex-1">

                    <p>I'd love to work with you!</p>
                    <ContactForm />
                </div>
                <div className='w-[420px]'>

                    <Figure figure={{ href: "/images/rome-optimized.jpg", alt: "Rome", classes: 'mt-6 opacity-80 relative z-10' }} />
                </div>
            </div>
        </section>
    );
}
