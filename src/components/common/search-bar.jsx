import { Search } from 'lucide-react'

const SearchBar = ({ className }) => {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                placeholder="Search"
                className={`h-9 w-64 rounded-md bg-gray-100 pl-10 pr-4 text-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 ${className}`}
            />
        </div>
    )
}

export default SearchBar;