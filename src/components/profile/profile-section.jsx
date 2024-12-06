import { ProfileHero } from "./profile-hero";
import { ProfileStats } from "./profile-stats";

const ProfileSection = () => {

    return (
        <div className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-20 space-y-6">
                <div className="overflow-hidden">
                    <ProfileHero />
                    <ProfileStats />
                </div>
            </div>
        </div>
    )

}

export default ProfileSection;