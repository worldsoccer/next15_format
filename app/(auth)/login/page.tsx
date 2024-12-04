import Link from "next/link";
import type { Metadata } from "next";
import UserAuthForm from "@/components/auth/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className='container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0'>
      <div className='mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>ログイン画面</h1>
          <p className='text-sm text-muted-foreground'>
            アドレス、パスワードを入力してログインできます。
          </p>
        </div>

        <UserAuthForm />

        <p className='px-8 text-center text-sm text-muted-foreground'>
          <Link href='/register' className='hover:text-brand underline underline-offset-4'>
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}
