"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

//* 404 байхгүй хуудсанд default харагдана
//* DO NOT CHANGE IT
export default function NotFoundError() {
  const router = useRouter();
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Хуудас олдсонгүй</span>
        <p className="text-center text-muted-foreground">
          Таны хайж байгаа хуудас байхгүй бололтой
          <br /> эсвэл устсан байж магадгүй.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Буцах
          </Button>
          <Button onClick={() => router.push("/")}>Home хэсэгт очих</Button>
        </div>
      </div>
    </div>
  );
}
