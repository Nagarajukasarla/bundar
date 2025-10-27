export const navigateTo = (currentPath: string, destinationPath: string, navigate: any) => {
    if (currentPath === destinationPath) return;
    navigate(destinationPath);
};
