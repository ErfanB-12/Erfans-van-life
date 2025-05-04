import React from "react";
import {
  Link,
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);

    return redirect(pathname);
  } catch (err) {
    return err;
  }
}

export default function SignIn() {
  const message = useLoaderData();
  const navigation = useNavigation();
  const error = useActionData();

  return (
    <section className="signin-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <Form method="post" replace>
        <input
          className="email-input"
          name="email"
          type="email"
          placeholder="Email adress"
        />

        <input
          className="password-input"
          name="password"
          type="password"
          placeholder="Password"
        />

        <button
          className="form-submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "signing in ..." : "Sign in"}
        </button>
      </Form>

      <p>
        Don’t have an account? <Link to="/login">Create one now</Link>
      </p>
    </section>
  );
}
