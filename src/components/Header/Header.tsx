import { FC } from "react";
import logoParlem from "../../assets/parlem-logo.png";

const Header: FC = () => {
  return (
    <header className="flex items-center h-14 bg-white px-6 border-b-2 border-yellow shadow-bottom sticky top-0">
      <img src={logoParlem} alt="logo" className="h-6" />
    </header>
  );
};

export default Header;
