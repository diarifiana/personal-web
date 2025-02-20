import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] justify-items-center">
      <div className="grid pb-8 justify-items-center">
        <Avatar className="w-[200px] h-[200px]">
          <AvatarImage
            className="object-fit: fill"
            src="https://images.unsplash.com/photo-1612392549296-c7623f23665a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <p className="mt-5 text-2xl text-[#5F5F5F]">Diah</p>
        <p className="py-3 text-4xl">Web Developer</p>
        <p className="pt-3 text-lg text-center text-[#5F5F5F]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Earum fugiat, autem in iure exercitationem excepturi!
        </p>
      </div>

      <div className="flex h-full">
        <Button className="w-[150px] rounded-[30px]">Contact Me</Button>
        <Button className="w-[150px]" variant="link">
          View Portfolio
        </Button>
      </div>
    </div>
  );
};

export default Hero;
