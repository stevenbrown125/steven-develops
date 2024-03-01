const RecaptchaText = () => {
  return (
    <aside className="recaptcha-privacy text-xs py-4 max-w-[280px]">
      <p>
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
          className="pl-1 text-primary hover:opactiy-90"
        >
          Privacy Policy
        </a>{" "}
        and
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener"
          className="pl-1 text-primary hover:opactiy-90"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </aside>
  )
}

export default RecaptchaText
