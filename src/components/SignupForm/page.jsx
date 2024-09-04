'use client'
import axios from "axios";
import { useState } from "react";

export default function SignupForm() {
  const [success, setSuccess] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const actionUrl = "/api";
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);

    try {
      const res = await axios.post(actionUrl, formObject);
      setSuccess(res.data.success);
    } catch (error) {
      console.error(error);
    }
  }

  if (success) {
    return <div className="text-green-400">{success}</div>;
  }

  return (
    <div className="max-w-sm">
      <form action={'/api'} method="post" onSubmit={handleSubmit}>
        <fieldset className="w-full inline-flex bg-white p-1.5 rounded-lg disabled:opacity-75 outline-3 focus-within:outline focus-within:outline-blue-600">
          <input
            name="email"
            type="text"
            className="w-full focus:outline-none p-2 rounded-md placeholder='Twoj email' "
          />
          <button className=" text-white font-bold whitespace-nowrap px-5 rounded-md bg-blue-600  enabled:hover:bg-blue-700 focus:outline-blue-800">
            Zapisz sie
          </button>
        </fieldset>
      </form>
    </div>
  );
}
