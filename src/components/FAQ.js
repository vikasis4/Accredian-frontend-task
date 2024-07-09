import React from 'react';

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="text-left">
          <div className="mb-4">
            <button className="font-semibold text-left w-full">
              <div className="py-4 px-6 bg-white rounded shadow-lg">
                Eligibility &nbsp;&nbsp;  ~  &nbsp;&nbsp; Anyone can Enroll, No pre-requiste require
              </div>
            </button>
          </div>
          <div className="mb-4">
            <button className="font-semibold text-left w-full">
              <div className="py-4 px-6 bg-white rounded shadow-lg">
                How to Use? &nbsp;&nbsp;  ~  &nbsp;&nbsp; Just Fill the Form and Referral will be sent
              </div>
            </button>
          </div>
          <div className="mb-4">
            <button className="font-semibold text-left w-full">
              <div className="py-4 px-6 bg-white rounded shadow-lg">
                Terms & Conditions &nbsp;&nbsp;  ~  &nbsp;&nbsp; There is no refund policy
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
