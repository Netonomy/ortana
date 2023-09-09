"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useProfile from "@/hooks/useProfile";

export default function AvatarProfile() {
  const { profile } = useProfile();
  return (
    <Avatar className="h-full w-full">
      {profile?.image && <AvatarImage src={profile.image} />}
      <AvatarFallback>
        {profile?.name?.split(" ")[0]?.charAt(0)}
        {profile?.name?.split(" ")[1]?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}
