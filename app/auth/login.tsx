import type { Route } from "./+types/login";

import LoginPage from "~/pages/auth/Login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login Page Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}