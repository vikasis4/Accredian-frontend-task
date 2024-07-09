import React from 'react';
import axios from 'axios'

const Modal = ({ closeModal }) => {

  const [data, setData] = React.useState({
    course_id: "",
    course_name: "",
    referrer_name: "",
    referrer_email: "",
    referee_name: "",
    referee_email: ""
  });
  const [loading, setLoading] = React.useState(false)

  const handleChange = (e) => {
    setData((val) => ({ ...val, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    async function run() {

      var ready = true;
      for (let key in data) {
        if (data[key].length < 3) { ready = false; break }
      }
      if (!ready) return alert("Length of all columns should be grater than 3");
      setLoading(true)
      await axios.post('https://accredian-backend-task-7uv0.onrender.com/api/postData', data).then((res) => {
        if (res.data.status) {
          closeModal();
        };
      })
    }
    run()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Refer a Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mx-12">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              name="course_name"
              value={data.course_name}
              onChange={handleChange}
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Id</label>
            <input
              name="course_id"
              value={data.course_id}
              onChange={handleChange}
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              name="referrer_name"
              value={data.referrer_name}
              onChange={handleChange}
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              name="referrer_email"
              value={data.referrer_email}
              onChange={handleChange}
              type="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input
              name="referee_name"
              value={data.referee_name}
              onChange={handleChange}
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Friend's Email</label>
            <input
              name="referee_email"
              value={data.referee_email}
              onChange={handleChange}
              type="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {loading ? "Wait..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
