import { MemberArrayType } from "../constants/Type";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function TeamMembers({
  memberArray,
}: Readonly<{
  memberArray: MemberArrayType[];
}>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {memberArray.map((member) => (
        <div key={member.name} className="flex justify-center items-center">
          <DirectionAwareHover
            imageUrl={member.imageUrl}
            className="h-[400px]"
          >
            <div className="p-4 max-w-52 bg-black bg-opacity-70 rounded-lg">
              <p className="font-bold text-xl text-white mb-1">
                {member.name}
              </p>
              <p className="font-normal text-sm text-gray-300 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-200">
                {member.description}
              </p>
            </div>
          </DirectionAwareHover>
        </div>
      ))}
    </div>
  );
}
