import { Web5 } from "@tbd54566975/web5/browser";
// import { Web5 } from "@tbd54566975/web5";
import { useEffect, useState } from "react";
import config from "@/config";

export default function useWeb5() {
  const [web5, setWeb5] = useState<any | null>(null);
  const [did, setDid] = useState<string | null>(null);

  async function connect() {
    const { web5, did } = await Web5.connect({
      techPreview: {
        dwnEndpoints: [],
      },
    });

    setWeb5(web5);
    setDid(did);

    setWeb5(web5);
  }

  useEffect(() => {
    connect();
  }, []);

  return { web5, did };
}
