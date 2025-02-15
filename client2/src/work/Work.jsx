import React from "react";
import { motion, useAnimate } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { FaLungsVirus } from "react-icons/fa6";
import { GiLiver } from "react-icons/gi";
import { FaDAndD } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

import {
  SiApple,
  SiLinkedin,
  SiSpotify,
  SiInstagram,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-[100vh] w-full flex items-center justify-center bg-black divide-black">
      <div className="mx-auto w-[78vw] h-full darkblue rounded-4xl overflow-hidden">
        <ClippathLinks />
      </div>
    </div>
  );
};

const ClippathLinks = () => {
  return (
    <div className="border-4 border-black text-black divide-y divide-black">
      <div className="grid grid-cols-2 divide-x divide-black">
        <Link to="/diabetes">
          <LinkBox Icon={IoMdAnalytics} />
        </Link>

        <Link to="/heart">
          <LinkBox Icon={FaHeartbeat} />
        </Link>
      </div>
      <div className="grid grid-cols-4 divide-x divide-black">
        <Link to="/lungcancer">
          <LinkBox Icon={FaLungsVirus} />
        </Link>
        <Link to="/liver">
          <LinkBox Icon={GiLiver} />
        </Link>
        <Link to="/breastcancer">
          <LinkBox Icon={FaDAndD} />
        </Link>
        <LinkBox Icon={SiApple} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-black">
        <LinkBox Icon={SiInstagram} href="#" />
        <LinkBox Icon={SiSpotify} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
      </div>
    </div>
  );
};

const LinkBox = ({ Icon, to, href }) => {
  const [scope, animate] = useAnimate();

  const content = (
    <div
      onMouseEnter={() =>
        animate(scope.current, {
          clipPath: ["polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"],
        })
      }
      onMouseLeave={() =>
        animate(scope.current, {
          clipPath: ["polygon(0 0, 100% 0%, 0 0, 0% 100%)"],
        })
      }
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl font-bold sm:text-3xl md:text-4xl" />
      <motion.div
        ref={scope}
        style={{
          clipPath: "polygon(0 0, 100% 0%, 0 0, 0% 100%)",
        }}
        className="absolute inset-0 grid place-content-center bg-black"
      >
        <Icon className="text-xl text-white sm:text-3xl md:text-4xl" />
      </motion.div>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : <a href={href}>{content}</a>;
};

export default Work;
