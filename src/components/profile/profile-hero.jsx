import Image from "next/image"
import { ChevronDown } from 'lucide-react'

export function ProfileHero() {
  return (
    <div className="relative bg-white rounded-xl pb-5">

      <div className="relative h-[120px] w-full overflow-hidden rounded-t-xl">
        <img
          src="/bg-image.jpg"
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
          <img
            src="/profile-image.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className='text-center pt-14'>
        <h2 className="text-lg font-semibold text-gray-900">Albert Flores</h2>
        <p className="mt-1 text-sm text-gray-600 font-[100]">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer
        </p>
        <p className="mt-1 text-sm text-gray-600 font-[100]">Clinton, Maryland</p>
      </div>

    </div>
  )
}

