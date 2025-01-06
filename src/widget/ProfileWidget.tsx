import React, {useEffect, useCallback} from "react";
import HomeNotificationWidget from "@/widget/HomeNotificationWidget";
import AvatarWidget from "@/widget/AvatarWidget";

export default function ProfileWidget() {
  
  return (
    <>
      <AvatarWidget/>
      <HomeNotificationWidget/>
    </>
  );
}