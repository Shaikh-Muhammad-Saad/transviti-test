import MainLayout from "@/components/layout/main-layout";
import { PlusCircle, Eye } from "lucide-react";
import { useState } from "react";
import AddApplicationModal from "@/components/jobs/add-application-modal";

const initialApplications = [
  {
    company: "Innovate Inc.",
    position: "Frontend Developer",
    dateApplied: "2023-10-01",
    status: "Interviewing",
  },
  {
    company: "QuantumLeap",
    position: "Full Stack Engineer",
    dateApplied: "2023-09-28",
    status: "Applied",
  },
  {
    company: "Stellar Solutions",
    position: "UX/UI Designer",
    dateApplied: "2023-09-25",
    status: "Offer",
  },
  {
    company: "Apex Enterprises",
    position: "Product Manager",
    dateApplied: "2023-09-22",
    status: "Rejected",
  },
  {
    company: "Nexus Corp.",
    position: "Backend Developer",
    dateApplied: "2023-09-20",
    status: "Applied",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Interviewing":
      return "bg-yellow-100 text-yellow-800";
    case "Applied":
      return "bg-blue-100 text-blue-800";
    case "Offer":
      return "bg-green-100 text-green-800";
    case "Rejected":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

function TrackerPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddApplication = (newApplication) => {
    setApplications([newApplication, ...applications]);
  };

  return (
    <>
      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddApplication={handleAddApplication}
      />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Job Tracker</h1>
              <p className="text-gray-600">Keep track of your job applications.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add New Application
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company & Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View Details</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{app.position}</div>
                      <div className="text-sm text-gray-500">{app.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.dateApplied}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center">
                        <Eye className="h-5 w-5 mr-1" />
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

TrackerPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default TrackerPage;