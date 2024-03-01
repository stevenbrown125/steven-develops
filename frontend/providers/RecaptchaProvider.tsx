import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

interface RecaptchaProviderProps {
  children: ReactNode
  siteKey: string
  nonce: string
}

interface RecaptchaContextType {
  isReCAPTCHALoaded: boolean
  executeRecaptcha: (action: string) => Promise<string | undefined>
}

const defaultContextValue: RecaptchaContextType = {
  isReCAPTCHALoaded: false,
  executeRecaptcha: async () => "",
}

interface ReCaptcha {
  ready(callback: () => void): void
  execute(siteKey: string, options: { action: string }): Promise<string>
}

declare global {
  interface Window {
    grecaptcha: ReCaptcha
    onloadRecaptchaCallback?: () => void
  }
}

const RecaptchaContext = createContext(defaultContextValue)

export const useRecaptcha = () => useContext(RecaptchaContext)

export const RecaptchaProvider = ({
  children,
  siteKey,
  nonce,
}: RecaptchaProviderProps) => {
  const [isReCAPTCHALoaded, setIsRecaptchaLoaded] = useState(false)

  useEffect(() => {
    loadReCAPTCHA(siteKey, setIsRecaptchaLoaded, nonce)
  }, [siteKey, nonce])

  const executeRecaptcha = async (action: string) => {
    if (!window.grecaptcha) {
      console.error("reCAPTCHA has not loaded yet.")
      return
    }
    return await window.grecaptcha.execute(siteKey, { action })
  }

  return (
    <RecaptchaContext.Provider value={{ isReCAPTCHALoaded, executeRecaptcha }}>
      {children}
    </RecaptchaContext.Provider>
  )
}

const loadReCAPTCHA = (
  siteKey: string,
  setIsRecaptchaLoaded: (value: boolean) => void,
  nonce: string,
) => {
  window.onloadRecaptchaCallback = () => {
    setIsRecaptchaLoaded(true)
  }

  const script = document.createElement("script")
  script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}&onload=onloadRecaptchaCallback`
  script.async = true
  script.defer = true
  script.nonce = nonce
  document.body.appendChild(script)
}
