import "next-auth";

type UserFields = {
  id: string;
  address?: string | null;
  name?: string | null;
  image?: string | null;
  department?: string | null; // 課名
  subDepartment?: string | null; // 課名2
  position?: string | null; // 管理職
  status?: string | null; // 在籍ステータス
  processManagement?: number | null; // 工程管理
};

declare module "next-auth" {
  interface Session {
    user: UserFields;
  }

  interface User extends UserFields {}

  interface JWT extends UserFields {}
}

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       address?: string | null;
//       name?: string | null;
//       image?: string | null;
//       department?: string | null; // 課名
//       subDepartment?: string | null; // 課名2
//       position?: string | null; // 管理職
//       status?: string | null; // 在籍ステータス
//       processManagement?: number | null; // 工程管理
//     };
//   }

//   interface User {
//     id: string;
//     address?: string | null;
//     name?: string | null;
//     image?: string | null;
//     department?: string | null; // 課名
//     subDepartment?: string | null; // 課名2
//     position?: string | null; // 管理職
//     status?: string | null; // 在籍ステータス
//     processManagement?: number | null; // 工程管理
//   }

//   interface JWT {
//     id: string;
//     address?: string | null;
//     name?: string | null;
//     department?: string | null; // 課名
//     subDepartment?: string | null; // 課名2
//     position?: string | null; // 管理職
//     status?: string | null; // 在籍ステータス
//     processManagement?: number | null; // 工程管理
//   }
// }
