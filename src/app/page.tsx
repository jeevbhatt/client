"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login");
  }, [router]);

  return null;
}

export default Home;
