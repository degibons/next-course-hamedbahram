'use client'

import { addEntry } from '@/app/_actions'
import { useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import LoadingDots from '@/components/ui/loading-dots'

const GuestbookEntryForm = () => {
  const [validationError, setValidationError] = useState(null)
  const formRef = useRef(null)

  async function action(data) {
    const result = await addEntry(data)
    setValidationError(result?.error ?? null)
    !result?.error && formRef.current.reset()
  }

  return (
    <form
      className="flex max-w-sm flex-col gap-y-3 text-sm"
      action={action}
      ref={formRef}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="rounded-lg border border-gray-300 px-5 py-2.5 dark:border-gray-600"
      />
      {validationError?.name && (
        <p className="text-sm text-red-500">
          {validationError.name._errors.join(', ')}
        </p>
      )}
      <input
        type="text"
        name="message"
        placeholder="Your message..."
        className="rounded-lg border border-gray-300 px-5 py-2.5 dark:border-gray-600"
      />
      {validationError?.message && (
        <p className="text-sm text-red-500">
          {validationError.message._errors.join(', ')}
        </p>
      )}

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 disabled:cursor-wait disabled:bg-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:disabled:bg-transparent"
    >
      {pending ? <LoadingDots color="#808080" /> : 'Добавить'}
    </button>
  )
}

export default GuestbookEntryForm
