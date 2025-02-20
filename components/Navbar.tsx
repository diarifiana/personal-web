import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="grid m-auto grid-cols-2 items-center px-10 py-8 justify-between text-md">
      <div className="flex gap-x-4">
        <Mail />
        <p>diarifiana@gmail.com</p>
      </div>

      <div className="grid grid-cols-2 justify-items-end">
        <div></div>
        <div className="flex gap-8">
        <button>about</button>
        <button>contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
