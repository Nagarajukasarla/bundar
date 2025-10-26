import type { ContainerProps } from "@/types/component";
import React from "react";

interface HeaderLogoProps extends ContainerProps {}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="flex-1 min-w-0">
                <div className="flex items-center">
                    <div className="w-5 h-5 my-[3px] flex-shrink-0 text-foreground">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 3H5L5.5 6M5.5 6L7 15H18L21 6H5.5Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <circle
                                cx="8"
                                cy="20"
                                r="1"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <circle
                                cx="17"
                                cy="20"
                                r="1"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <div className="ml-1 flex-shrink-0">
                        <h1 className="text-lg font-bold text-primary">Bundar</h1>
                    </div>
                </div>

                <div className="flex items-center ml-1" onClick={() => {}}>
                    <div className="relative flex items-center group w-full max-w-full text-sm">
                        <div
                            className="flex items-center w-full bg-transparent cursor-pointer"
                        >
                            <div className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                                <span className="font-semibold mr-1">Home -</span>
                                <span className="text-foreground">Snehapuri Colony, Kamareddy, 50311</span>
                            </div>
                            <svg
                                className="w-4 h-4 ml-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogo;
