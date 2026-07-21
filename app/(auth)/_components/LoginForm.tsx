"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "../_actions/authActions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/custom-ui/password-input";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, false);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    // if (state.success) {
    //   toast.success(state.message || "Login Successfully");

    //   router.push("/dashboard");
    // }

    if (!state.success) {
      toast.error(state.message || "Login failed");
    }
  }, [state, router]);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label className="md:text-base text-xs" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label className="md:text-base text-xs" htmlFor="password">
              Password
            </Label>
          </div>
          <PasswordInput id="password" name="password" required />
        </div>

        <div className="space-y-3">
          <Button type="submit" className="w-full cursor-pointer">
            {pending ? "Submitting..." : "Login"}
          </Button>

          <Button
            onClick={() => router.push("/register")}
            variant="outline"
            className="w-full cursor-pointer"
          >
            Create an Account
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
