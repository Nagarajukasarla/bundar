import { CartIcon, CategoriesIcon, HomeIcon } from "@/assets/icons";
import { useLocation, useNavigate } from "react-router-dom";

const BottomMenu = () => {
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    const navigateTo = (path: string) => {
        if (currentPath === path) return;
        navigate(path);
    }

    return (
        <div className="text-primary fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-around items-center h-14 md:hidden">
            <button className="flex w-full h-full justify-center items-center focus:outline-none" onClick={() => navigateTo("/")}
            >
                <HomeIcon width={24} height={24} />
            </button>
            <button className="flex w-full h-full justify-center items-center focus:outline-none" onClick={() => navigateTo("/products")}
            >
                <CategoriesIcon width={24} height={24} />
            </button>
            <button className="flex w-full h-full justify-center items-center focus:outline-none" onClick={() => navigateTo("/cart")}
            >
                <CartIcon width={24} height={24} />
            </button>
        </div>
    );
};

export default BottomMenu;
