import { SecretPasswordForm } from "./_components/secret-pass-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 flex items-center justify-center p-4">
      <SecretPasswordForm />
    </div>
  );
}
