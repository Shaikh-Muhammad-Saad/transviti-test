import JobSearchBar from './job-search-bar'

export function JobSearch() {
  return (
    <div className="space-y-6 py-6 border-b border-gray-300">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Find your Dream Job, <span className="text-primary-600">Albert!</span>
        </h1>
        <p className="mt-1 text-base text-gray-600 text-sm">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>

      <JobSearchBar />

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600">Similar:</span>
        {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
          <button
            key={tag}
            className="rounded border border-[#737A91] px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

