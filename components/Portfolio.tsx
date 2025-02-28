// import { Atom, BriefcaseBusiness, FileUser, Origami, Rss } from "lucide-react";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import CardPort from "./CardPort";

// const Portfolio = () => {
//   return (
//     <div className="px-24 m-auto grid grid-row-3">
//       <div className="mt-4 pt-10">Portfolio</div>
//       <div className="grid text-[32px] justify-between grid-cols-2">
//         <div>Lets have a look</div>
//         <Button className="w-[150px] justify-self-end" variant="link">
//           See All
//         </Button>
//       </div>
//       <div className="grid grid-cols-3 gap-5 py-12">
//         <div className="rounded-md grid-rows-2">
//           <Image
//             src="/personal.png"
//             alt="personalweb"
//             layout="responsive"
//             width={1}
//             height={1}
//             objectFit="cover"
//             className="rounded-t-md"
//           />
//           <div className="flex gap-x-3 px-3 pt-7 pb-3">
//             <BriefcaseBusiness />
//             <p className="font-semibold">Portfolio Website</p>
//           </div>
//           <p className="px-3">
//             A glimpse into my digital playground, allowing me to explore the use
//             of HTML, CSS, and Javascript to build a clean interactive website
//           </p>
//         </div>

//         <div>
//           <div className="rounded-md grid-rows-2">
//             <Image
//               src="/image.jpeg"
//               alt="image"
//               layout="responsive"
//               width={1}
//               height={1}
//               objectFit="cover"
//               className="rounded-t-md"
//             />
//             <div className="flex gap-x-3 px-3 pt-7 pb-3">
//               <Rss />
//               <p className="font-semibold">Personal Blog</p>
//             </div>
//             <p className="px-3">
//               I've been reflecting on my learning journey lately, and I've
//               shared fresh thoughts on the blog
//             </p>
//           </div>
//         </div>

//         <div>
//           <div className="rounded-md grid-rows-2">
//             <Image
//               src="/image.jpeg"
//               alt="image"
//               layout="responsive"
//               width={1}
//               height={1}
//               objectFit="cover"
//               className="rounded-t-md"
//             />
//             <div className="flex gap-x-3 px-3 pt-7 pb-3">
//               <Origami />
//               <p className="font-semibold">Company Profile</p>
//             </div>
//             <p className="px-3">
//               Foster innovation and collaboration in the team where we provide
//               an engaging English learning potential for students worldwide
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import { BriefcaseBusiness, Origami, Rss } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div id="port-section" className="px-24 m-auto grid grid-row-3">
      <div className="mt-4 pt-10">Portfolio</div>
      <div className="grid text-[32px] justify-between grid-cols-2">
        <div>Lets have a look</div>
        <Button className="w-[150px] justify-self-end" variant="link">
          See All
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-5 py-12">
        <div className="rounded-md grid-rows-2">
          <Image
            src="/personal.png"
            alt="personalweb"
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            className="rounded-t-md"
          />
          <div className="flex gap-x-3 px-3 pt-7 pb-3">
            <BriefcaseBusiness />
            <p className="font-semibold">Portfolio Website</p>
          </div>
          <p className="px-3">
            A glimpse into my digital playground, allowing me to explore the use
            of HTML, CSS, and Javascript to build a clean interactive website
          </p>
        </div>

        <div>
          <div className="rounded-md grid-rows-2">
            <Image
              src="/image.jpeg"
              alt="image"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-t-md"
            />
            <div className="flex gap-x-3 px-3 pt-7 pb-3">
              <Rss />
              <p className="font-semibold">Personal Blog</p>
            </div>
            <p className="px-3">
              Ive been reflecting on my learning journey lately, and Ive
              shared fresh thoughts on the blog
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-md grid-rows-2">
            <Image
              src="/image.jpeg"
              alt="image"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-t-md"
            />
            <div className="flex gap-x-3 px-3 pt-7 pb-3">
              <Origami />
              <p className="font-semibold">Company Profile</p>
            </div>
            <p className="px-3">
              Foster innovation and collaboration in the team where we provide
              an engaging English learning potential for students worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
