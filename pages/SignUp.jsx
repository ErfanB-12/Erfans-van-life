import React from "react";
import {
  Link,
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import { signupUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const userName = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await signupUser({ userName, email, password });

    return null;
  } catch (err) {
    return err;
  }
}

export default function SignUp() {
  const message = useLoaderData();
  const navigation = useNavigation();
  const error = useActionData();

  return (
    <section className="signup-container">
      <h1>Create new account</h1>

      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <Form method="post" replace>
        <input
          className="name-input"
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="email-input"
          name="email"
          type="email"
          placeholder="Email adress"
          required
        />

        <input
          className="password-input"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button
          className="form-submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "signing up ..." : "Sign up"}
        </button>
      </Form>

      <p>
        Already have an account? <Link to="/signin">Login now</Link>
      </p>
    </section>
  );
}
