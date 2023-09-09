import Password from "@/types/Password";
import { useAtom } from "jotai";
import { passwordsAtom } from "@/state/storage/passwordsAtom";
import { useContext, useEffect } from "react";
import { DateSort } from "@tbd54566975/dwn-sdk-js";
import { loadingAtom } from "@/state/loadingAtom";
import { Web5Context } from "@/app/Web5Provider";

export default function usePasswords() {
  const web5Context = useContext(Web5Context);
  const [passwords, setPasswords] = useAtom(passwordsAtom);
  const [, setLoading] = useAtom(loadingAtom);

  async function uploadPassword(password: Password) {
    if (web5Context) {
      const result = await web5Context.web5.dwn.records.create({
        data: password,
        message: {
          schema: "https://netonomy.io/passwordSchema",
        },
      });

      setPasswords((prevPasswords) => [password, ...prevPasswords]);
    }
  }

  async function fetchPasswords() {
    if (web5Context) {
      const passwordsRes = await web5Context.web5.dwn.records.query({
        message: {
          filter: {
            schema: "https://netonomy.io/passwordSchema",
          },
          dateSort: DateSort.CreatedDescending,
        },
      });

      const _passwords: Password[] = [];
      if (passwordsRes.records) {
        for (const password of passwordsRes.records) {
          let passwordObj: Password = await password.data.json();
          passwordObj.recordId = password.id;

          _passwords.push(passwordObj);
        }

        setPasswords(_passwords);
      }
    }
  }

  async function deletePassword(recordId: string) {
    if (web5Context) {
      setLoading(true);
      try {
        await web5Context.web5.dwn.records.delete({
          message: {
            recordId: recordId,
          },
        });

        setPasswords((prevPasswords) =>
          prevPasswords.filter((password) => password.recordId !== recordId)
        );
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPasswords();
  }, []);

  return { uploadPassword, passwords, deletePassword };
}
