"use client";

import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/auth/useLogin";

export default function LoginButton() {
  const login = useLogin();

  return (
    <Button
      className="w-80"
      onClick={async () => {
        login();
      }}
    >
      Login
    </Button>
  );
}
