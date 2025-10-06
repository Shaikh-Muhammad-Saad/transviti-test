import MainLayout from "@/components/layout/main-layout";
import { Search, Building } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const allCompanies = [
  {
    name: "Innovate Inc.",
    logo: "https://via.placeholder.com/150",
    description: "Pioneering new technologies to shape the future.",
  },
  {
    name: "QuantumLeap",
    logo: "https://via.placeholder.com/150",
    description: "Advancing the world of quantum computing.",
  },
  {
    name: "Stellar Solutions",
    logo: "https://via.placeholder.com/150",
    description: "Providing stellar services for a variety of industries.",
  },
  {
    name: "Apex Enterprises",
    logo: "https://via.placeholder.com/150",
    description: "Reaching the apex of business excellence.",
  },
  {
    name: "Nexus Corp.",
    logo: "https://via.placeholder.com/150",
    description: "Connecting ideas, people, and technology.",
  },
  {
    name: "Momentum LLC",
    logo: "https://via.placeholder.com/150",
    description: "Driving growth and innovation in the tech space.",
  },
];

function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCompanies = allCompanies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Top Companies</h1>
        <p className="text-gray-600 mb-8">Discover the leading companies in the industry.</p>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a company..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image src={company.logo} alt={`${company.name} logo`} width={64} height={64} className="rounded-full mr-4 border-2 border-gray-100" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{company.description}</p>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <Building className="h-5 w-5 mr-2" />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CompaniesPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default CompaniesPage;