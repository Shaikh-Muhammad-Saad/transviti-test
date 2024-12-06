import JobCard from "./job-card";

const LatestJobs = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-start">
                <h2 className="text-xl font-light text-gray-900">Latest Jobs</h2>
                <a href="#" className="text-sm font-medium text-primary-600 ml-3 border-b border-primary-600">
                    See Latest Jobs
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <JobCard
                        key={index}
                        title="UI/UX Designer"
                        company="Teams"
                        location="Seattle, USA (Remote)"
                        postedTime="1 day ago"
                        applicants={22}
                        promoted={false}
                    />
                ))}
            </div>

        </div>
    )
}

export default LatestJobs;