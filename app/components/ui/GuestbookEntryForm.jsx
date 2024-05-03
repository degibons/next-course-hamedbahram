'use client'

import { addEntry } from '@/app/_actions'
import { useRef, useState } from 'react'

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
        className="rounded border bg-transparent px-3 py-1 dark:border-gray-600"
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
        className="rounded border bg-transparent px-3 py-1 dark:border-gray-600"
      />
      {validationError?.message && (
        <p className="text-sm text-red-500">
          {validationError.message._errors.join(', ')}
        </p>
      )}
      <button
        type="submit"
        // disabled={isMutating}
        className="rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm
