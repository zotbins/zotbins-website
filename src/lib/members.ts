import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface Member {
  name: string;
  title: string;
  team: string | null;
  image: string;
  links: string[];
}

interface LinkType {
  hosts: string[];
  icon: IconType;
  label: string;
}

const linkedin: LinkType = { hosts: ["linkedin.com"], icon: FaLinkedin, label: "LinkedIn" };
const linkTypes: LinkType[] = [
  linkedin,
  { hosts: ["github.com"], icon: FaGithub, label: "GitHub" },
  { hosts: ["instagram.com"], icon: FaInstagram, label: "Instagram" },
  { hosts: ["x.com", "twitter.com"], icon: FaXTwitter, label: "X" },
  { hosts: ["youtube.com", "youtu.be"], icon: FaYoutube, label: "YouTube" },
];
const email = { icon: FaEnvelope, label: "Email" };
const fallback = { icon: FaLink, label: "Website" };

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

export const linkInfo = (url: string): { icon: IconType; label: string } => {
  if (url.startsWith("mailto:")) return email;
  const host = hostOf(url);
  return (
    linkTypes.find((t) =>
      t.hosts.some((h) => host === h || host.endsWith(`.${h}`))
    ) ?? fallback
  );
};

const rank = (url: string) => (linkInfo(url) === linkedin ? 0 : 1);
const sortKey = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").toLowerCase();

/** LinkedIn first, then alphabetical. */
export const sortLinks = (links: string[]) =>
  [...links].sort(
    (a, b) => rank(a) - rank(b) || sortKey(a).localeCompare(sortKey(b))
  );
