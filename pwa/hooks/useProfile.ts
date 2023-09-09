"use client";
import { useContext, useEffect } from "react";
import { useAtom } from "jotai";
import { personAtom } from "@/state/user/personAtom";
import { Web5Context } from "@/app/Web5Provider";

export default function useProfile() {
  const [profile, setProfile] = useAtom(personAtom);
  const web5Context = useContext(Web5Context);

  async function fetchProfile() {
    if (web5Context) {
      // fetch the profile metadata
      const profileRes = await web5Context.web5.dwn.records.query({
        message: {
          filter: {
            schema: "https://schema.org/Person",
            dataFormat: "application/ld+json",
          },
        },
      });

      let name = "";
      let imgUrl = "";

      if (profileRes.records)
        if (profileRes.records.length > 0) {
          const profile = await profileRes.records[
            profileRes.records.length - 1
          ].data.json();
          name = profile.name;

          // fetch the profile image
          if (profile.image) {
            const result = await web5Context.web5.dwn.records.query({
              message: {
                filter: {
                  recordId: profile.image,
                },
              },
            });

            if (result.records)
              if (result.records.length > 0) {
                const img = await result.records[0].data.blob();

                imgUrl = URL.createObjectURL(img);
              }
          }
        }

      setProfile({ name: name, image: imgUrl });
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [web5Context]);

  return { profile };
}
