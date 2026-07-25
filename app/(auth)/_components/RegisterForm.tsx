"use client";

import { PasswordInput } from "@/components/custom-ui/password-input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { registrationAction } from "../_actions/registrationAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(registrationAction, false);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Register Successfully");

      router.push("/login");
    }

    if (!state.success) {
      toast.error(state.message || "Login failed");
    }
  }, [state, router]);

  return (
    <form action={action}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="website">Photo URL</FieldLabel>
          <Input
            id="website"
            name="profilePhoto"
            type="url"
            placeholder="https://example.com"
          />
          <FieldDescription>Your image url.</FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <PasswordInput id="password" name="password" minLength={4} required />
          <FieldDescription>
            Must be at least 4 characters long.
          </FieldDescription>
        </Field>

        {/* <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <PasswordInput
            id="confirm-password"
            name="confirmPassword"
            required
          />
          <FieldDescription>Please confirm your password.</FieldDescription>
        </Field> */}

        <FieldGroup>
          <Field>
            <Button type="submit">
              {pending ? "Creating..." : "Create Account"}
            </Button>
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <Link href="/login" className="no-underline!">
                Sign in
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;
