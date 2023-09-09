import Image from 'next/image';

export const AppLogo = () => {
    return (
        <Image
            src="/images/logo_only_nectTo.png" 
            alt="necto logo"
            width={80}
            height={80}
        />
    );
};
