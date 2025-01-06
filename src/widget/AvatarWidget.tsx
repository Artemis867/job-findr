import React, {useEffect, useCallback} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function AvatarWidget () {


  return (
    <>
      <Card className="w-[300px]">
        <CardContent>
          <div className="flex justify-center">
            <Avatar className="m-1 mt-2 w-[60px] h-[60px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <br/>
          <div className="text-center text-sm">
            <span>Ron Jovi Paje</span>
            <br/>
            <span>Developer | NodeJS | ReactJS | Angular</span>
          </div>
          <br/>
          <div className="flex justify-center">
            <Button variant="outline" className="w-[100px] h-[35px]">Edit Bio</Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}