import { FileCode } from "lucide-react";

const Aboutme = () => {
  return (
    <div className="grid m-auto py-10 px-24 justify-center grid-cols-2">
      <div>
        <div className="grid grid-rows-4 gap-1">
          <div className="flex items-center">
            <FileCode />
            <div className="p-2">
              <p>
                <span className="font-semibold">JavaScript</span>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, nisi nihil.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <FileCode />
            <div className="p-2">
              <p>
                <span className="font-semibold">JavaScript</span>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, nisi nihil.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <FileCode />
            <div className="p-2">
              <p>
                <span className="font-semibold">JavaScript</span>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, nisi nihil.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <FileCode />
            <div className="p-2">
              <p>
                <span className="font-semibold">JavaScript</span>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, nisi nihil.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <h1>
          <span className="font-semibold">Key Values</span> <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam hic
          voluptatum recusandae voluptate aliquid eius delectus quibusdam ex
          minus sed.
        </h1>
        <div>(timeliness, attention to detail, and clear communication)</div>
      </div>
    </div>
  );
};

export default Aboutme;
