import Image from "next/image";

const UserProfile = () => {

    return (
        <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
            <Image
                src="/user-profile.png"
                alt="avatar"
                width={737}
                height={678}
                className="translate-z-0 w-full h-full"
            />
        </div>
    );
};

export default UserProfile;
