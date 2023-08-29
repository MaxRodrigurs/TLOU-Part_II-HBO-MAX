import { AiOutlineMail, AiFillLinkedin, AiFillGithub, AiFillBehanceCircle } from 'react-icons/ai';

interface IconLinkProps {
  href: string;
  icon: JSX.Element;
  color: string;
}

function IconLink({ href, icon, color }: IconLinkProps) {
  return (
    <a href={href} className={`hover:text-${color} duration-200`}>
      {icon}
    </a>
  );
}

function Footer() {
  return (
    <footer className="text-[#636363] font-gilroy-medium text-xs md:text-sm p-5 duration-100">
      <div className="flex justify-center items-center md:hidden">
        <ul className="flex justify-center items-center gap-10">
          <li>
            <IconLink href="mailto:maxrodrigurs@outlook.com" icon={<AiOutlineMail size={20} />} color="white" />
          </li>
          <li>
            <IconLink href="https://www.linkedin.com/in/anaximandrodrigurs/" icon={<AiFillLinkedin size={20} />} color="cyan-400" />
          </li>
          <li>
            <IconLink href="https://github.com/MaxRodrigurs" icon={<AiFillGithub size={20} />} color="gray-400" />
          </li>
          <li>
            <IconLink href="https://www.behance.net/maxrodrigurs" icon={<AiFillBehanceCircle size={20} />} color="blue-400" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
