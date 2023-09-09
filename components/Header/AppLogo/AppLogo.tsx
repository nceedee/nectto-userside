import Image from "next/image";

export const AppLogo = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Image
      src="/images/logo_only_nectTo.png"
      alt="necto logo"
      width={width}
      height={height}
    />
  );
};
