import EditOutlined from "@/assets/icons/EditOutlined";
import CButton from "@/components/core/CButton";
import LargeScreenProfileSection from "@/components/layout/LargeScreenProfileSection";
import { type FC } from "react";

const Profile: FC = () => {
    const user = {
        name: "Ram Siya",
        mobile: "1234567890",
        location: "Kamareddy, 503111",
    };
    return (
        <div className="flex h-screen">
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between px-3 py-4 md:px-8 md:py-8 lg:px-16 border-b-2 border-primary">
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center text-md font-[500] uppercase">
                            {user.name}
                        </div>
                        <div className="flex flex-row items-center text-xs">
                            {user.mobile}
                        </div>
                        <div className="flex items-center text-xs">
                            {user.location}
                        </div>
                    </div>
                    <div className="flex">
                        <CButton
                            className="hidden md:flex items-center bg-transparent 
                                            text-primary px-2 py-1 rounded">
                            <EditOutlined className="mr-2" width="20px" height="20px" />Edit Profile
                        </CButton>
                        <CButton className="flex md:hidden bg-transparent border-none text-sm font-[600] text-primary px-2 py-1">EDIT</CButton>
                    </div>
                </div>
                <LargeScreenProfileSection />
            </div>
        </div>
    );
};

export default Profile;
