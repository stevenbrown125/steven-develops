"use client"
import { useFormik } from 'formik';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { contactSchema } from '@/lib/validation';

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      city: ''
    },
    // validationSchema: contactSchema,
    onSubmit: async (values) => {
      try {
        if (!executeRecaptcha) throw "Execute recaptcha not yet available";
        const gReCaptchaToken = await executeRecaptcha("contactFormSubmit");

        if (values.city !== '') { // Failed Honeypot
          throw "Invalid input"
        }
        // const response = await fetch('/api/contact', {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json, text/plain, */*",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     ...values,
        //     gRecaptchaToken: gReCaptchaToken,
        //   }),
        // })
        console.log('sent')

      } catch (error) {
        console.log(error)
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Name</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
        {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-xs mt-1 dark:text-red-400">{formik.errors.name}</div> : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Email</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs mt-1 dark:text-red-400">{formik.errors.email}</div> : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Phone</label>
        <input id="phone" type="text" {...formik.getFieldProps('phone')} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
        {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-xs mt-1 dark:text-red-400">{formik.errors.phone}</div> : null}
      </div>

      <div className='invisible absolute h-[1px] w-[1px]'>
        <label htmlFor="city" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">City</label>
        <input id="city" type="text" {...formik.getFieldProps('city')} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Message</label>
        <textarea id="message" {...formik.getFieldProps('message')} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" rows={4}></textarea>
        {formik.touched.message && formik.errors.message ? <div className="text-red-500 text-xs mt-1 dark:text-red-400">{formik.errors.message}</div> : null}
      </div>

      <button type="submit" className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-primary dark:hover:bg-primary">
        Send Message
      </button>
    </form>
  );
}
