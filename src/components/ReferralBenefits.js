import React from 'react';

const ReferralBenefits = ({ openModal }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Are The Referral Benefits?</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Course ID</th>
                <th className="px-4 py-2">Referrer Bonus</th>
                <th className="px-4 py-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Full Stack Dev</td>
                <td className="border px-4 py-2">Bs4c</td>
                <td className="border px-4 py-2">₹ 7,000</td>
                <td className="border px-4 py-2">₹ 5,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Front-End Dev</td>
                <td className="border px-4 py-2">As8c</td>
                <td className="border px-4 py-2">₹ 7,000</td>
                <td className="border px-4 py-2">₹ 5,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={openModal}
          className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default ReferralBenefits;
