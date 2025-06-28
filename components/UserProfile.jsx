import Image from "next/image";

const UserProfile = () => {
    return (
        <div className="hidden xl:flex fixed bottom-0 left-[40px] pointer-events-none select-none z-50">
            <Image
                src="/user-profile.png"
                alt="avatar"
                width={800}
                height={850}
                className="translate-z-0 w-full h-full"
            />
        </div>
    );
};

export default UserProfile;
