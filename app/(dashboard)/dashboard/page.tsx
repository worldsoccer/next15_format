// import FolderItem from "@/components/dashboard/folder-item";
// import { db } from "@/lib/db";
// import { getCurrentUser } from "@/lib/session";
import React from "react";
import DashBoardHeader from "@/components/dashboard/dashboard-header";
import DashBoardShell from "@/components/dashboard/dashboard-shell";
import DashBoardContent from "@/components/dashboard/dashboard-content";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
    return null;
  }

  const ClientSideWrapper = () => {
    return (
      <DashBoardShell>
        <DashBoardHeader heading='ダッシュボード' text='データを管理します'>
          {/* 他のコンポーネント */}
        </DashBoardHeader>
        <DashBoardContent session={session} />
      </DashBoardShell>
    );
  };

  return <ClientSideWrapper />;
}
