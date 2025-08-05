import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="bg-teal-900 flex justify-center items-center min-h-screen py-10">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/"
      />
    </div>
  );
}
