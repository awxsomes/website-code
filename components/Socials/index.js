import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>

        <Button key={0} onClick={() => window.open("https://github.com/Glenelg-Competitive-Programming")}>
          <img className = "socials" src="https://pngimg.com/uploads/github/github_PNG40.png" alt={"Github"}/>
        </Button>

        <Button key={1} onClick={() => window.open("mailto:glenelg.competitive.programming@gmail.com")}>
          <img className = "socials" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt={"Gmail"}/>
        </Button>

        <Button key={2} onClick={() => window.open("https://www.instagram.com/ghs_computing")}>
          <img className = "socials" src="https://th.bing.com/th/id/OIP.JtmXSh_uyZBaTg1eXd-NtgAAAA?rs=1&pid=ImgDetMain" alt={"Instagram"}/>
        </Button>

    </div>
  );
};

export default Socials;
