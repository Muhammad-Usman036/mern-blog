import React from "react";
import { Datepicker, Footer as FlowbiteFooter } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <FlowbiteFooter container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              {" "}
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Usman's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js projects
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Usman's Blog
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow Us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Hub
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="#"
            by="Usman's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-5 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={FaFacebook} />
            <FlowbiteFooter.Icon href="#" icon={AiFillInstagram} />
            <FlowbiteFooter.Icon href="#" icon={FaLinkedin} />
            <FlowbiteFooter.Icon href="#" icon={FaSquareGithub} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
