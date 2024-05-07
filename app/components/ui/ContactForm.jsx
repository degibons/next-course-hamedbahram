'use client'

import { addContactEntry } from '@/app/_actions'
import { useFormState, useFormStatus } from 'react-dom'

const ContactForm = () => {
  const [state, formAction] = useFormState(addContactEntry, null)

  return (
    <section className="mt-6 flex gap-6">
      <form action={formAction} className="flex flex-1 flex-col gap-4 sm:w-1/2">
        <input
          type="text"
          className="rounded-lg border border-gray-300 p-2"
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          className="rounded-lg border border-gray-300 p-2"
          name="message"
          placeholder="message"
        />
        <SubmitButton />
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="rounded-lg bg-black py-2 text-white disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default ContactForm
