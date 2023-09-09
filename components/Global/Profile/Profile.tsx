import Image from "next/image";

export const Profile = () => {
  return (
    <Image
      src="/images/avatar.jpg"
      alt="user dp"
      width={40}
      height={40}
      className="rounded-full cursor-pointer"
    />
  );
};
