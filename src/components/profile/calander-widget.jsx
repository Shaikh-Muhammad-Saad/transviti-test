import { ChevronUp } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function CalendarWidget() {
    const [isExpanded, setIsExpanded] = useState(true)

    const interviews = [
        {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted"
        },
        {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted"
        },
        {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted"
        }
    ]

    return (
        <div className="w-full py-6">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex w-full items-center justify-between px-4"
            >
                <div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">My calendar</h3>
                        <p className="text-xs text-gray-500">Upcoming Interviews</p>
                    </div>
                </div>

                <ChevronUp
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${!isExpanded ? "rotate-180" : ""}`}
                />
            </button>

            {/* Interview List */}
            {isExpanded && (
                <div className="mt-4 space-y-3 px-2">
                    {interviews.map((interview, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between gap-2 hover:bg-gray-50"
                        >
                            {/* Company Logo and Details */}
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                                    <img
                                        src="/figma.png"
                                        alt="Figma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">{interview.role}</h4>
                                    <p className="text-xs text-gray-500">{interview.company}</p>
                                    <p className="text-xs text-gray-500">
                                        {interview.date} | {interview.time} | {interview.location}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <div className="text-xs rounded bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    {interview.status}
                                </div>
                                <button className="text-xs px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100">
                                    Deny
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

