import { Bookmark, MapPin, Clock } from 'lucide-react'
import CustomButton from '../common/custom-button'

export default function JobCard({
  title,
  company,
  location,
  postedTime,
  applicants,
  promoted = false
}) {
  return (
    <div className="relative w-full bg-white rounded-lg border border-gray-200 p-3">

      {promoted && (
        <p className="text-xs font-bold text-black mb-3">
          Promoted
        </p>
      )}

      <div className="flex flex-col gap-3">

        {/* Job Details */}
        <div className="space-y-1.5">

          <div className='flex justify-start'>
            {/* Company Logo */}
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-gray-100 mr-4">
              <img
                src="/job-company-logo.png"
                alt={company}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{company}</p>
              </div>
            </div>
          </div>



          {/* Location and Time Info */}
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <p>{postedTime}</p>
              </div>
              <span className="text-blue-600">{applicants} applicants</span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className='flex'>
          <CustomButton >
            Apply Now
          </CustomButton>

          <button
            aria-label="Bookmark job"
          >
            <Bookmark className="h-5 w-5 text-gray-400 ml-2" />
          </button>
        </div>

      </div>
    </div>
  )
}