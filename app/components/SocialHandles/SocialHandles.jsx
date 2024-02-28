import { FaFacebook, FaLink, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const SocialHandles = ({ className , brandHandle, iconSize}) => {
  return (
    <div>
      <span className={className}>
        <a
          className="text-gray-200"
          href={`https://www.facebook.com/${brandHandle.replace(/ /g, "")}/`}
          target="_black"
        >
          <FaFacebook size={iconSize} />
        </a>
        <a
          className="text-gray-500"
          href={`https://twitter.com/${brandHandle.replace(/ /g, "")}?lang=en`}
          target="_black"
        >
          <RiTwitterXLine size={iconSize} />
        </a>
        <a
          className="text-gray-500"
          href={`https://www.youtube.com/@${brandHandle.replace(/ /g, "")}`}
          target="_black"
        >
          <FaYoutube size={iconSize} />
        </a>
        <a
          className="  text-purple-400"
          href={`https://www.youtube.com/@${brandHandle.replace(/ /g, "")}`}
          target="_black"
        >
          <FaLink size={iconSize} />
        </a>
      </span>
    </div>
  );
};

export default SocialHandles;
