import FeaturedJobs from "@/components/jobs/featured-jobs"
import { JobSearch } from "@/components/jobs/job-search"
import LatestJobs from "@/components/jobs/latest-jobs"
import RecomendedJobs from "@/components/jobs/recomended-jobs"
import MainLayout from "@/components/layout/main-layout"
import ProfileSection from "@/components/profile/profile-section"

function Home() {
  return (<>

    {/* Profile Section */}
    <ProfileSection />

    {/* Main content */}
    <div className="flex-1">
      <div className="space-y-6">

        {/* Jobs Search */}
        <JobSearch />

        <div className="md:overflow-y-auto md:h-[600px] scrollbar">
          {/* Featured Jobs */}
          <FeaturedJobs /> <br /> <br />

          {/* Recommended Jobs */}
          <RecomendedJobs /> <br /><br />

          {/* Latest Jobs */}
          <LatestJobs />
        </div>

      </div>
    </div>

  </>
  )
}

Home.getLayout = (page) => {
  return <MainLayout page={page} />
}

export default Home;
