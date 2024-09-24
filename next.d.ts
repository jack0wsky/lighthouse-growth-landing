import { useRouter, usePathname } from "next/navigation";

declare module "next/navigation" {
  import { Languages } from "@/shared/dictionaries/languages";

  interface ParamsReturn {
    lang: Languages;
    id: string;
  }

  function useRouter(): ReturnType<useRouter>;
  function useParams(): ParamsReturn {
    return {
      lang: Languages,
    };
  }
  function usePathname(): ReturnType<usePathname> {}
}
