import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
  RiExternalLinkLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com",
  //   Icon: RiYoutubeLine,
  // },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com",
  //   Icon: RiInstagramLine,
  // },
  // {
  //   name: "Facebook",
  //   link: "https://facebook.com",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/alfredo-allan-teixeira-ba2701149/",
    Icon: RiLinkedinFill,
  },
  {
    name: "Github",
    link: "https://github.com/alfredo-allan",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg icon-mobile-offset">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon className="text-2xl md:text-3xl" aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
