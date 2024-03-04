"use client"
import { useFormik } from "formik"
import { contactSchema } from "@/lib/validation"
import { useRecaptcha } from "@/providers/RecaptchaProvider"
import RecaptchaText from "@/components/shared/utilities/RecaptchaText"

const ContactForm = () => {
  const { executeRecaptcha } = useRecaptcha()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      city: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      try {
        if (!executeRecaptcha) throw "Execute recaptcha not yet available"
        const gReCaptchaToken = await executeRecaptcha("contactFormSubmit")
        console.log(gReCaptchaToken)
        if (values.city !== "") {
          // Failed Honeypot
          throw "Invalid input"
        }
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            gRecaptchaToken: gReCaptchaToken,
          }),
        })
        console.log("sent")
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps("name")}
          className="block w-full mt-1 rounded-md shadow-sm border-zinc-300 focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="mt-1 text-xs text-red-500 dark:text-red-400">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          className="block w-full mt-1 rounded-md shadow-sm border-zinc-300 focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="mt-1 text-xs text-red-500 dark:text-red-400">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Phone
        </label>
        <input
          id="phone"
          type="text"
          {...formik.getFieldProps("phone")}
          className="block w-full mt-1 rounded-md shadow-sm border-zinc-300 focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="mt-1 text-xs text-red-500 dark:text-red-400">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>

      <div className="invisible absolute h-[1px] w-[1px]">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          City
        </label>
        <input
          id="city"
          type="text"
          {...formik.getFieldProps("city")}
          className="block w-full mt-1 rounded-md shadow-sm border-zinc-300 focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Message
        </label>
        <textarea
          id="message"
          {...formik.getFieldProps("message")}
          className="block w-full mt-1 rounded-md shadow-sm border-zinc-300 focus:border-primary focus:ring-primary sm:text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
          rows={4}
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="mt-1 text-xs text-red-500 dark:text-red-400">
            {formik.errors.message}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex justify-center px-8 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-primary dark:hover:bg-primary"
      >
        Send Message
      </button>
      <RecaptchaText />
    </form>
  )
}

export default ContactForm
