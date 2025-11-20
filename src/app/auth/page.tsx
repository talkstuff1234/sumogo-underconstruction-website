// src/app/(auth)/login/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    // In a real app, you’d call an API here
    if (role === "admin") {
      localStorage.setItem("userRole", "admin");
      router.push("/admin/dashboard");
    } else {
      localStorage.setItem("userRole", "user");
      router.push("/landing");
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={handleLogin}>Continue</button>
    </main>
  );
}
