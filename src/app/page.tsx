import Cares from "@/UI/Cares";
import Features from "@/UI/Features";
import Productivity from "@/UI/Productivity";
import Unleash from "@/UI/Unleash";
import UserComments from "@/UI/UserComments";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col gap-4 justify-center items-center" >
    <Productivity/>
    <UserComments/>
    <Features/>
    <Cares/>
    <Unleash/>
   </div>
  );
}
