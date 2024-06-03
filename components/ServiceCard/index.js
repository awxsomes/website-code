import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "The Glenelg Competitive Programming Team is a coding organization founded by and for high school students interested in competitive programming ficsally sponsored by the Hack Club Foundation which is a 501(c)(3) organization. We have competed and placed first in presitigious competitions such as Lockheed Martin CodeQuest. Our mission is not just to code well, but more importantly to have fun while doing"}
      </p>
    </div>
  );
};

export default ServiceCard;
