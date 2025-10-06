import MainLayout from "@/components/layout/main-layout";
import { Upload, Search, FileText, Download, Trash2 } from "lucide-react";
import { useState } from "react";

const initialDocuments = [
  {
    id: 1,
    name: "Resume_John_Doe.pdf",
    dateModified: "2023-10-15",
    size: "2.3 MB",
    type: "pdf",
  },
  {
    id: 2,
    name: "Cover_Letter.docx",
    dateModified: "2023-10-12",
    size: "1.1 MB",
    type: "doc",
  },
  {
    id: 3,
    name: "Portfolio.pdf",
    dateModified: "2023-10-10",
    size: "5.8 MB",
    type: "pdf",
  },
  {
    id: 4,
    name: "Certifications.zip",
    dateModified: "2023-10-05",
    size: "12.5 MB",
    type: "zip",
  },
  {
    id: 5,
    name: "Reference_Letter.pdf",
    dateModified: "2023-10-01",
    size: "800 KB",
    type: "pdf",
  },
];

const getFileIcon = (type) => {
    switch (type) {
        case 'pdf':
            return <FileText className="h-6 w-6 text-red-500" />;
        case 'doc':
            return <FileText className="h-6 w-6 text-blue-500" />;
        case 'zip':
            return <FileText className="h-6 w-6 text-yellow-500" />;
        default:
            return <FileText className="h-6 w-6 text-gray-500" />;
    }
};

function DocumentsPage() {
    const [documents, setDocuments] = useState(initialDocuments);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDocuments = documents.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if(confirm("Are you sure you want to delete this document?")){
            setDocuments(documents.filter(doc => doc.id !== id));
        }
    };

    const handleUpload = () => {
        alert("This would open a file dialog to upload a new document.");
    }

    const handleDownload = (name) => {
        alert(`This would start a download for ${name}.`);
    }

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">Documents</h1>
                <p className="text-gray-600">Manage your resumes, cover letters, and other documents.</p>
            </div>
            <button
                onClick={handleUpload}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload File
            </button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a document..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Modified
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getFileIcon(doc.type)}
                      <span className="ml-4 text-sm font-medium text-gray-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.dateModified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                    <button onClick={() => handleDownload(doc.name)} className="text-blue-600 hover:text-blue-900">
                        <Download className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(doc.id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

DocumentsPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default DocumentsPage;