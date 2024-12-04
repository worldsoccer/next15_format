"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function PassWordForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [step, setStep] = useState<"search" | "reset">("search");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast(); // useToast フックの使用

  const handleUserSearch = async () => {
    setError(null);

    // console.log("env", process.env.NEXT_PUBLIC_TXK_API);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_TXK_API}/account/userSearch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ここを設定
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (data.success) {
        setUserId(data.userId);
        setStep("reset");
        toast({
          title: "成功",
          description: "ユーザーが見つかりました。",
        });
      } else {
        setError("ユーザーが見つかりませんでした");
        toast({
          title: "エラー",
          description: "ユーザーが見つかりませんでした。",
          variant: "destructive",
        });
      }
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
      toast({
        title: "エラー",
        description: "エラーが発生しました。",
        variant: "destructive",
      });
    }
  };

  const handlePasswordReset = async () => {
    setError(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_TXK_API}/account/resetPassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ここを設定
        body: JSON.stringify({ userId, password }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "成功",
          description: "パスワードをリセットしました。",
        });
        router.push("/login");
      } else {
        setError("パスワードのリセットに失敗しました");
        toast({
          title: "エラー",
          description: "パスワードのリセットに失敗しました。",
          variant: "destructive",
        });
      }
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
      toast({
        title: "エラー",
        description: "エラーが発生しました。",
        variant: "destructive",
      });
    }
  };

  return (
    <div className='flex flex-col items-center space-y-6'>
      <div className='text-center space-y-2'>
        {step === "search" ? (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>ユーザー検索</h1>
            <p className='text-sm text-muted-foreground'>ユーザー名を入力して検索してください。</p>
          </>
        ) : (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>パスワードリセット</h1>
            <p className='text-sm text-muted-foreground'>新しいパスワードを入力してください。</p>
          </>
        )}
      </div>
      <div className='w-full max-w-sm space-y-4'>
        {error && <p className='text-red-500 text-center'>{error}</p>}

        {step === "search" && (
          <>
            <input
              type='text'
              placeholder='ユーザー名'
              className='input w-full px-4 py-2 border rounded-md'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button
              className={cn(buttonVariants(), "mt-4 w-full")}
              onClick={handleUserSearch}
              // className='btn w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
              検索
            </button>
          </>
        )}

        {step === "reset" && (
          <>
            <input
              type='password'
              placeholder='新しいパスワード'
              className='input w-full px-4 py-2 border rounded-md'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className={cn(buttonVariants(), "mt-4 w-full")}
              onClick={handlePasswordReset}
              // className='btn w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
            >
              パスワードをリセット
            </button>
          </>
        )}
      </div>
    </div>
  );
}
