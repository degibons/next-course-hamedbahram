'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { EmailLoginFormData } from '@/lib/schema'
import LoadingDots from '@/components/ui/loading-dots'

const EmailSignInForm = ({ callbackUrl }) => {
  const [validationError, setValidationError] = useState(null)
  const [pending, setPending] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    // Reset errors
    setValidationError(null)

    // Get form data
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email } = Object.fromEntries(formData)

    // Validate form data
    const { error: zodError } = EmailLoginFormData.safeParse({ email })
    if (zodError) {
      setValidationError(zodError.format())
      return
    }

    // Send sign in email
    setPending(true)
    signIn('http-email', { email, callbackUrl }).then(() => {
      setPending(false)
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-y-2">
        <label className="font-semibold">Введите ваш емейл</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="hello@me.com"
          className="rounded-lg border border-gray-400 bg-transparent px-3 py-2"
          required
          onChange={() => setValidationError(null)}
        />
        {validationError && (
          <div className="mx-2 my-1 text-sm text-red-400">
            {validationError.email._errors.join(', ')}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-3 w-full rounded-lg border border-gray-400 px-3 py-2 disabled:cursor-wait"
      >
        {pending ? <LoadingDots color="#808080" /> : 'Войти'}
      </button>
    </form>
  )
}

export default EmailSignInForm
