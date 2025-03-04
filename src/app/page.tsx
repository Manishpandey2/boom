"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  if(session){
    return (
      <>
        <Image src={session.user?.image as string} alt="profile" width={100} height={100}/>
        <h1>Hi {session.user?.name}</h1>
        <p>{session.user?.email}</p>

      </>
    )
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign IN With Google</button>
    </div>
  );
}
