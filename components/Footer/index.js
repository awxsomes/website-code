import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-4xl text-bold">Contact.</h1>
          <div className="mt-10">
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by {""}
        <Link href="https://www.linkedin.com/in/kevin-hwang-8a7627219/">
          <a className="underline underline-offset-1">Kevin Hwang</a>
        </Link>
        <p style={{'display': 'inline'}}> and </p>
        <Link href="https://www.linkedin.com/in/kenneth-wang-854606258/">
          <a className="underline underline-offset-1">Kenneth Wang</a>
        </Link>

        <br></br>
        <br></br>
        
        All donations to the club are tax deductible. Donate {""} 
        <Link href="https://hcb.hackclub.com/donations/start/glenelg-hs-competitive-programming-club">
          <a className="underline underline-offset-1">here </a>
        </Link>
        today!

      </h1>
    </>
  );
};

export default Footer;
