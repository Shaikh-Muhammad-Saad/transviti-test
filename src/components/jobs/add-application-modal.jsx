import { X } from 'lucide-react';
import { useState } from 'react';

export default function AddApplicationModal({ isOpen, onClose, onAddApplication }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [status, setStatus] = useState('Applied');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddApplication({ company, position, dateApplied, status });
    onClose();
    // Reset form
    setCompany('');
    setPosition('');
    setDateApplied('');
    setStatus('Applied');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Application</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="dateApplied" className="block text-sm font-medium text-gray-700">Date Applied</label>
              <input
                type="date"
                id="dateApplied"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}