import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          {/* FORM GENERIC TEXTS */}
          <div className="space-y-2 text-center">
            <h1 className="text-xl md:text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 md:text-base text-xs">
              Enter your credentials to access your account
            </p>
          </div>

          {/* FORM */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
