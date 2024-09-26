import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Navbar For Public Route
      {children}
    </div>
  );
};

export default layout;
