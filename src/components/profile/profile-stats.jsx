import { ChevronDown } from 'lucide-react'
import CalendarWidget from './calander-widget'


export function ProfileStats() {
    return (
        <div className="space-y-3 mt-3">
            <div className="space-y-4 bg-white p-6 rounded-xl">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-[100]">Profile Visitors</span>
                    <span className="text-sm font-semibold text-primary-600">140</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-[100]">Resume Viewers</span>
                    <span className="text-sm font-semibold text-primary-600">20</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-[100]">My Jobs</span>
                    <span className="text-sm font-semibold text-primary-600">88</span>
                </div>
            </div>

            <div className="bg-white rounded-xl">
                <CalendarWidget />
            </div>
        </div>
    )
}
