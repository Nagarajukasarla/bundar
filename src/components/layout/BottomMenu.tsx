import React from "react";
import { CartIcon, CategoriesIcon, HomeIcon } from "@/assets/icons";

const BottomMenu = () => {
  return (
    <nav className="text-primary fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-around items-center h-14 md:hidden">
      <button className="flex flex-col items-center focus:outline-none">
        <HomeIcon width={24} height={24} />
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <CategoriesIcon width={24} height={24} />
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <CartIcon width={24} height={24} />
      </button>
    </nav>
  );
};

export default BottomMenu;
