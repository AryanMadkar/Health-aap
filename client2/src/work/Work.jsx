import React from "react";
import { motion, useAnimate } from "motion/react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiInstagram,
} from "react-icons/si";

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
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-black">
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
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

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  return (
    <a
      onMouseEnter={() => {
        animate(scope.current, {
          clipPath: [
            "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", // Final clip path on hover
          ],
        });
      }}
      onMouseLeave={() => {
        animate(scope.current, {
          clipPath: [
            "polygon(0 0, 100% 0%, 0 0, 0% 100%)", // Initial clip path
          ],
        });
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
      href={href}
    >
      <Icon className="text-xl font-bold sm:text-3xl md:text-4xl" />
      <motion.div
        ref={scope}
        style={{
          clipPath: "polygon(0 0, 100% 0%, 0 0, 0% 100%)", // Initial clip path
        }}
        className="absolute inset-0 grid place-content-center bg-black"
      >
        <Icon className="text-xl text-white sm:text-3xl md:text-4xl" />
      </motion.div>
    </a>
  );
};

export default Work;
