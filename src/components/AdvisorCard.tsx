import Image from "next/image";

interface Advisor {
  name: string;
  image: string;
  school: string;
}

const AdvisorCard = ({ member }: { member: Advisor }) => {
  return (
    <div className="w-92 border border-gray-300 flex items-center py-4 pl-4 rounded-lg">
      <Image
        width="100"
        height="100"
        className="w-24 h-24 rounded-full shadow-lg"
        src={member.image}
        alt={member.name}
      />
      <div className="flex flex-col px-4">
        <h5 className="text-xl font-medium text-neutral">{member.name}</h5>
        <div className="mb-2 text-md text-gray-500">{member.school}</div>
      </div>
    </div>
  );
};

export default AdvisorCard;
