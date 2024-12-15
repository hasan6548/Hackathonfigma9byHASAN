import Link from "next/link";

export default function HelpSection() {
  const links = [
    "FAQ",
    "Term & Condition",
    "Reporting",
    "Documentation",
    "Support Policy",
    "Privacy",
  ];
  return (
    <div className="help w-[150px]">
      <h3 className="text-xl font-bold mb-6">Help?</h3>
      <ul className="text-[16px] leading-6 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="/FAQ"
              className="hover:text-[#FF9F0D] transition duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  }
  
  