import { HomePage, PageNotFound, WelcomePage } from "../pages";
// import LayoutProvider from "../provider/Layout.Provider";
// import UserProtectProvider from "../provider/User.Provider";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    access: "any",
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
    access: "any",
  },
  // {
  //   path: "/memos",
  //   element: (
  //     <LayoutProvider>
  //       <MemoPage />
  //     </LayoutProvider>
  //   ),
  //   access: "user",
  // },
  // {
  //   path: "/memos/:memoId",
  //   element: (
  //     <LayoutProvider>
  //       <MemoDetailPage />
  //     </LayoutProvider>
  //   ),
  //   access: "user",
  // },
  // {
  //   path: "/memos/:memoId/:nestMemoId",
  //   element: <NestMemoDetailPage />,
  //   access: "any",
  // },
  // {
  //   path: "/poems",
  //   element: (
  //     <LayoutProvider>
  //       <PoemPage />
  //     </LayoutProvider>
  //   ),
  //   access: "user",
  // },
  // {
  //   path: "/poems/:poemId",
  //   element: (
  //     <LayoutProvider>
  //       <PoemDetailPage />
  //     </LayoutProvider>
  //   ),
  //   access: "user",
  // },
  // {
  //   path: "/poems/:poemId/:nestPoemId",
  //   element: <NestPoemDetailPage />,
  //   access: "any",
  // },
  // {
  //   path: "/todos",
  //   element: (
  //     <LayoutProvider>
  //       <TodoPage />
  //     </LayoutProvider>
  //   ),
  //   access: "user",
  // },

  // {
  //   path: "/login",
  //   element: (
  //     <UserProtectProvider>
  //       <LoginPage />
  //     </UserProtectProvider>
  //   ),
  //   access: "any",
  // },
  // {
  //   path: "/register",
  //   element: (
  //     <UserProtectProvider>
  //       <RegisterPage />
  //     </UserProtectProvider>
  //   ),
  //   access: "any",
  // },
  // {
  //   path: "/user-guide",
  //   element: (
  //     <LayoutProvider>
  //       <UserGuidePage />
  //     </LayoutProvider>
  //   ),
  //   access: "any",
  // },
  {
    path: "*",
    element: <PageNotFound />,
    access: "any",
  },
];
