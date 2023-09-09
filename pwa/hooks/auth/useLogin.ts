import { userDetailsAtom } from "@/state/user/userDetails";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { Web5 } from "@tbd54566975/web5/browser";
import { loadingAtom } from "@/state/loadingAtom";
import { useContext } from "react";
import { Web5Context } from "@/app/Web5Provider";

export default function useLogin() {
  const [, setUserDetails] = useAtom(userDetailsAtom);
  const router = useRouter();
  const [, setLoading] = useAtom(loadingAtom);
  const web5Context = useContext(Web5Context);

  async function login() {
    setLoading(true);
    // const { web5, did } = await Web5.connect({
    //   techPreview: {
    //     dwnEndpoints: [],
    //   },
    // });

    setUserDetails({ did: web5Context!.did });

    // Check if the user has a profile created

    const { records } = await web5Context?.web5.dwn.records.query({
      message: {
        filter: {
          schema: "https://schema.org/Person",
        },
      },
    });

    if (!records || records.length === 0) router.push("/register");
    else router.push("/home");

    setLoading(false);
  }

  return login;
}
