import React, { useState } from 'react';

const AddStudyMaterial = () => {
  const [formData, setFormData] = useState({
    class: '',
    section: '',
    subject: '',
    title: '',
    description: '',
    url: '',
    downloadable: false,
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, maybe send data to API
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Study Material</h2>
        <form onSubmit={handleSubmit}>
          {/* Class Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="9">Class 9</option>
              <option value="8">Class 8</option>
            </select>
          </div>

          {/* Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="Enter section"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>

          {/* URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Downloadable Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="downloadable"
              checked={formData.downloadable}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">
              Make study material downloadable in application.
            </label>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Study Materials</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[lightseagreen] text-white rounded-md shadow-md hover:bg-[teal] transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudyMaterial;
