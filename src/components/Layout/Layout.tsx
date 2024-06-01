import { FC, ReactNode } from "react";

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-layout">
      <main className="w-full max-w-xl p-6">{children}</main>
    </div>
  );
};
export default Layout;
