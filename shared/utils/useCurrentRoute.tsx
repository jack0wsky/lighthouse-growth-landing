import { usePathname } from "next/navigation";

export const useCurrentRoute = (path: string) => {
  const pathname = usePathname();
  return pathname === path;
};
