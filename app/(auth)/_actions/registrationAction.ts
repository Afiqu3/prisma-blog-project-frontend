"use server";

import { RegistrationState } from "@/lib/types";

export const registrationAction = async (
  prevState: RegistrationState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const profilePhoto = formData.get("profilePhoto");

  const payload = {
    name,
    email,
    password,
    profilePhoto,
  };

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result;
};
