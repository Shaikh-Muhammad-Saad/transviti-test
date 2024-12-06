import { Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import CustomButton from '../common/custom-button'

export default function JobSearchBar() {
    const [location, setLocation] = useState('')
    const [jobType, setJobType] = useState('')

    const locations = [
        "Remote",
        "New York, NY",
        "San Francisco, CA",
        "London, UK",
        "Berlin, DE",
        "Tokyo, JP"
    ]

    const jobTypes = [
        "Full-time",
        "Part-time",
        "Contract",
        "Temporary",
        "Internship",
        "Remote"
    ]

    return (
        <div className="">
            <div className="flex flex-col gap-4 md:flex-row md:items-center rounded-lg px-6 py-5 bg-white shadow-sm">
                {/* Search Input */}
                <div className="flex w-[50%] xl:w-[450px]">
                    <input
                        type="text"
                        placeholder="Job Title, Company, or Keywords"
                        className="w-full py-3 text-base text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0"
                    />
                </div>

                {/* Location Dropdown */}
                <div className="relative md:w-[25%] xl:w-[160px]">
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full appearance-none px-4 py-3 text-base text-gray-900 bg-transparent md:border-l border-gray-200 focus:outline-none focus:ring-0 cursor-pointer"
                    >
                        <option value="">Select Location</option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Job Type Dropdown */}
                <div className="relative md:w-[25%] xl:w-[160px]">
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="w-full appearance-none px-4 py-3 text-base text-gray-900 bg-transparent md:border-l border-gray-200 focus:outline-none focus:ring-0 cursor-pointer"
                    >
                        <option value="">Job Type</option>
                        {jobTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Search Button */}
                <CustomButton >
                    <div className="flex items-center justify-center gap-1">
                        <Search className="h-5 w-5" />
                        <span className="hidden sm:inline font-thin">Search</span>
                    </div>
                </CustomButton>

            </div>
        </div>
    )
}

