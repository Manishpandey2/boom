"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign IN With Google</button>
    </div>
  );
}
