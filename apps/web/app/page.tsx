"use client"
import { randomUUID } from "crypto";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  const roomId = () => {

    const room = randomUUID()
    console.log(room);

    return room;
  }

  return (
   <div className="">

      <button className=""
      onClick={() => {
        console.log("hello")
        router.push(`/room/${roomId()}`)

      }}
      
      >
        Start Creating
      </button>
      <p className="text-white">white</p>

   </div>
  );
}
