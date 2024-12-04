"use client";

import { Session } from "next-auth";

export default function DashboardContent({ session }: { session: Session }) {
  return (
    <div>
      <h1>ようこそ、{session.user?.name ?? "ゲスト"} さん！</h1>
      <p>従業員番号: {session.user?.id ?? "未設定"}</p>
      <p>アドレス: {session.user?.address ?? "未設定"}</p>
      <p>課名: {session.user?.department ?? "未設定"}</p>
      <p>課名2: {session.user?.subDepartment ?? "未設定"}</p>
      <p>管理職: {session.user?.position ?? "未設定"}</p>
      <p>在籍ステータス: {session.user?.status ?? "未設定"}</p>
      <p>工程管理: {session.user?.processManagement ?? "未設定"}</p>
    </div>
  );
}
