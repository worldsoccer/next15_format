"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { buttonVariants } from "../ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "../icon/icon";
import { useToast } from "@/hooks/use-toast";

export default function UserAuthForm() {
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false, // 成功時のリダイレクトを無効化
        address,
        password,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // 必要に応じてリダイレクト
      toast({
        title: "成功",
        description: "ログイン成功しました！",
      });
      window.location.href = "/dashboard";
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ログインエラー:", err.message);
        setError(err.message);
        toast({
          title: "エラー",
          description: "ログインできませんでした。",
          variant: "destructive",
        });
      } else {
        console.error("予期しないエラー:", err);
        setError("予期しないエラーが発生しました。");
        toast({
          title: "エラー",
          description: "予期しないエラーが発生しました。",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='grid gap-6'>
      <form onSubmit={handleLogin}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label htmlFor='adress'>アドレス</Label>
            <Input
              id='adress'
              placeholder='ユーザー名またはアドレス'
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className='grid gap-1'>
            <Label htmlFor='password'>パスワード</Label>
            <Input
              id='password'
              placeholder='********'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={cn(buttonVariants(), "mt-4")} type='submit' disabled={isLoading}>
            {isLoading ? <Icons.spinner className='animate-spin mr-2' /> : "ログイン"}
          </button>
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  );
}
