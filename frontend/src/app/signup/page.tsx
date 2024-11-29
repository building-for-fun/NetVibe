'use client';

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../auth/auth";

export default function Signup() {
  const [state, action] = useFormState(signup, undefined)

  return (
    <div className="w-full max-w-xs">

    <form action={action} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      {state?.errors?.name && <p className="text-red-700 text-sm">{state.errors.name}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      {state?.errors?.email && <p className="text-red-700 text-sm">{state.errors.email}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
      </div>
      {state?.errors?.password && (
        <div className="mb-4">
          <p className="text-red-700 text-sm">Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error} className="text-red-700 text-sm">- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton />
    </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Sign Up
    </button>
  )
}
