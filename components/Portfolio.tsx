import { Atom } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="p-24 m-auto grid grid-row-3 gap-4">
      <div>Portfolio</div>
      <div className="grid text-[32px] justify-between grid-cols-2">
        <div>Lets have a look</div>
        <Button className="w-[150px] justify-self-end" variant="link">
          see all
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="border border-black rounded-md grid-rows-2">
          <Image src="/image.jpeg" alt="image" width={100} height={100} />
          <div className="flex">
            <Atom />
            <p>E-commerce</p>
          </div>
          <p>Platform for XYZ Retail React, Node.js, MongoDB, AWS</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Portfolio;
