import Image from "next/image";
import { Member, linkInfo, sortLinks } from "@/lib/members";

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="w-92 border border-gray-300 flex items-start py-4 pl-4 rounded-lg">
      <Image
        width="100"
        height="100"
        className="w-24 h-24 rounded-full shadow-lg object-cover"
        src={member.image}
        alt={member.name}
      />
      <div className="flex flex-col px-4">
        <h5 className="text-xl font-medium text-neutral">{member.name}</h5>
        <div className="mb-2 text-md text-gray-500">{member.title}</div>
        <div className="flex gap-3 text-xl text-neutral w-fit">
          {sortLinks(member.links).map((url) => {
            const { icon: Icon, label } = linkInfo(url);
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${label}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
