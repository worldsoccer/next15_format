import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        address: { label: "Address", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // console.log("Credentials received:", credentials); // デバッグ
        if (!credentials?.address || !credentials?.password) {
          throw new Error("すべてのフィールドを入力してください");
        }

        console.log("process.env.NEXT_PUBLIC_TXK_API", process.env.NEXT_PUBLIC_TXK_API);
        const res = await fetch(`${process.env.NEXT_PUBLIC_TXK_API}/account/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ここを設定
          body: JSON.stringify({
            address: credentials.address,
            password: credentials.password,
          }),
        });

        if (!res.ok) {
          console.error("API failed:", await res.text()); // デバッグ
          throw new Error("認証に失敗しました");
        }

        const response = await res.json();
        // console.log("API response:", response);

        // API のレスポンスデータを適切にマッピング
        const user = response.data?.user;
        if (!user || !user["従業員番号"] || !user["アドレス"]) {
          throw new Error("不正なユーザーデータが返されました");
        }

        return {
          id: user["従業員番号"], // ユーザID
          name: user["従業員名"], // 名前
          address: user["アドレス"], // アドレス
          department: user["課名"],
          subDepartment: user["課名2"],
          position: user["管理職"],
          status: user["在籍ステータス"],
          processManagement: user["工程管理"],
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log("JWT callback:", { token, user });
      if (user) {
        token.id = user.id;
        token.address = user.address;
        token.name = user.name;
        token.department = user.department;
        token.subDepartment = user.subDepartment;
        token.position = user.position;
        token.status = user.status;
        token.processManagement = user.processManagement;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("Session callback:", { session, token });
      session.user = {
        ...session.user,
        id: token.id as string,
        address: token.address as string | null | undefined,
        name: token.name,
        department: token.department as string,
        subDepartment: token.subDepartment as string,
        position: token.position as string | null | undefined,
        status: token.status as string | null | undefined,
        processManagement: token.processManagement as number | null | undefined,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
