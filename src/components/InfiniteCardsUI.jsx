import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaReact,FaJs,FaNode,FaHtml5,FaCss3,FaWordpress,FaGit,FaPhp} from "react-icons/fa";
import { SiTailwindcss,SiMongodb,SiJquery,SiPostman,SiVercel,SiRender,SiExpress, SiMyanimelist, SiMysql, SiBootstrap } from "react-icons/si";

const InfiniteCardsUI = () => {
  const icons = [FaReact,FaNode,FaJs,SiMongodb,SiTailwindcss,FaHtml5,FaCss3,FaWordpress,FaGit,FaPhp,SiJquery,SiPostman,SiVercel,SiRender,SiExpress,SiMysql,SiBootstrap ]
    return (
        <div className=" flex flex-col antialiased items-center justify-center relative overflow-hidden my-5">
          <InfiniteMovingCards
            items={icons}
          />
        </div>
      );
}

export default InfiniteCardsUI