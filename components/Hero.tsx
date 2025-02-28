// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "./ui/button";
// import { Download } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="grid grid-rows-[auto_1fr] justify-items-center">
//       <div className="grid pb-10 pt-5 justify-items-center">
//         <Avatar className="w-[200px] h-[200px]">
//           <AvatarImage
//             className="object-fit: fill"
//             src="https://images.unsplash.com/photo-1612392549296-c7623f23665a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="avatar"
//           />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>

//         <div className="space-y-3 text-center">
//           <p className="mt-5 text-[20px]">Hi! I'm Diah</p>
//           <p className="text-[42px]">
//             Web Developer
//             <br />
//             based in Indonesia
//           </p>
//           <p className="text-[16px] text-[#5F5F5F]">
//              A passion-driven team-player creating an engaging functional web
//             <br />
//             experiences and constantly seeking opportunities to innovate
//           </p>
//         </div>
//       </div>

//       <div className="flex h-full gap-5">
//         <Button className="w-[130px] rounded-[30px] text-[12px]">
//           Contact Me
//         </Button>
//         <Button className="w-[130px] text-[12px]" variant="link">
//           Download CV
//           <Download />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  const avatarSize = "w-[200px] h-[200px]";
  const headingTextSize = "text-[42px]";
  const subHeadingTextSize = "text-[20px]";
  const paragraphTextSize = "text-[16px] text-[#5F5F5F]";
  const buttonWidth = "w-[130px]";
  const buttonContactStyle = "rounded-[30px] text-[12px]";
  const buttonDownloadStyle = "text-[12px]";

  return (
    <section className="grid grid-rows-[auto_1fr] justify-items-center">
      <div className="grid pb-10 pt-5 justify-items-center">
        <Avatar className={avatarSize}>
          <AvatarImage
            src="https://images.unsplash.com/photo-1612392549296-c7623f23665a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Diah's Avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="space-y-3 text-center">
          <p className={`mt-5 ${subHeadingTextSize}`}>Hi! Im Diah</p>
          <h1 className={headingTextSize}>
            Web Developer
            <br />
            based in Indonesia
          </h1>
          <p className={paragraphTextSize}>
            A passion-driven team-player creating an engaging functional web
            <br />
            experiences and constantly seeking opportunities to innovate
          </p>
        </div>
      </div>

      <div className="flex h-full gap-5">
        <Button className={`${buttonWidth} ${buttonContactStyle}`}>
          Contact Me
        </Button>
        <Button className={`${buttonWidth} ${buttonDownloadStyle}`} variant="link">
          Download CV
          <Download />
        </Button>
      </div>
    </section>
  );
};

export default Hero;