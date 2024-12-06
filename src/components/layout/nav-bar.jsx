import { Bell, Menu, Search } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'
import CustomButton from '../common/custom-button'
import SearchBar from '../common/search-bar'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">


      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-14">

        <div className="flex items-center gap-8">

          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="h-8 w-8 text-primary-600"
            />
          </Link>

          <div className="hidden items-center space-x-4 xl:space-x-8 xl:flex">
            <Link href="/" className="text-sm font-bold text-primary-600">
              Find Jobs
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Top Companies
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Job Tracker
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              My Calendar
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Documents
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Messages
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Notifications
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">

          <div className="hidden xl:flex gap-6">
            <SearchBar />
            <CustomButton> Resume Builder</CustomButton>
          </div>

          <button className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200">
          <img
            src="/profile-image.png"
            alt="Profile"
            fill
            className="object-cover"
          />
          </button>
          <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-500" />
          </button>

        </div>
      </div>


      {isMenuOpen && (
        <div className="border-t bg-white px-4 py-2 xl:hidden absolute w-full shadow-2xl ">
          <div className="flex flex-col space-y-4 py-4">
            <Link href="/jobs" className="text-sm font-medium text-primary-600">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-sm font-medium text-gray-500">
              Top Companies
            </Link>
            <Link href="/tracker" className="text-sm font-medium text-gray-500">
              Job Tracker
            </Link>
            <Link href="/calendar" className="text-sm font-medium text-gray-500">
              My Calendar
            </Link>
            <Link href="/documents" className="text-sm font-medium text-gray-500">
              Documents
            </Link>
            <Link href="/messages" className="text-sm font-medium text-gray-500">
              Messages
            </Link>
            <SearchBar className={"w-full"} />
            <CustomButton> Resume Builder</CustomButton>
          </div>
        </div>
      )}
    </nav>
  )
}

