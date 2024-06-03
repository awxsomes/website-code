import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>

        <Button key={0} onClick={() => window.open("https://github.com/Glenelg-Competitive-Programming")}>
          <img className = "socials" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt={"Github"}/>
        </Button>

        <Button key={1} onClick={() => window.open("mailto:glenelg.competitive.programming@gmail.com")}>
          <img className = "socials" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt={"Gmail"}/>
        </Button>

    </div>
  );
};

export default Socials;
