import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";
import useDocumentTitle from "../Others/useDocumentTitle";

const Support = () => {
  useDocumentTitle("Support ")
  return (
    <section className="min-h-screen bg-white px-6 py-12 md:px-16 lg:px-32 text-green-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <FaQuestionCircle className="text-5xl mx-auto text-green-700 mb-4" />
          <h1 className="text-4xl font-extrabold">Need Help? We're Here!</h1>
          <p className="text-lg text-green-700 mt-2">
            Welcome to the PlantCare Tracker Support Center
          </p>
        </header>

        {/* Article Content */}
        <article className="space-y-8 text-lg leading-relaxed text-green-800">
          <section>
            <h2 className="text-2xl font-bold mb-2">Why Support Matters</h2>
            <p>
              Taking care of your plants can sometimes feel overwhelming — but
              you're never alone. Our support center is designed to help you
              make the most of the PlantCare Tracker. Whether you're
              troubleshooting issues, asking questions, or looking to improve
              your plant-care journey, we’re here to help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Common Support Topics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>How to add or remove a plant from your tracker</li>
              <li>Setting up watering and sunlight reminders</li>
              <li>Understanding the plant health dashboard</li>
              <li>Changing account information and notifications</li>
              <li>Syncing data across multiple devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p>
              If you can’t find the answer you’re looking for, feel free to
              reach out to our support team. We're always happy to help!
            </p>
          </section>

          {/* Contact Options */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border border-green-200 p-6 rounded-xl shadow-md flex items-start gap-4">
              <FaEnvelope className="text-2xl text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Email Support</h3>
                <p>Send us a message at</p>
                <a
                  href="mailto:support@plantcaretracker.com"
                  className="text-green-600 underline"
                >
                  support@plantcaretracker.com
                </a>
              </div>
            </div>

            <div className="border border-green-200 p-6 rounded-xl shadow-md flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                <p>Available Monday to Friday, 9AM–5PM</p>
                <p className="text-green-600 font-medium">+1 (800) 123-PLANT</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2 mt-10">Your Growth Partner</h2>
            <p>
              We're more than a tool — we're your partner in helping your plants
              thrive. Whether you're growing succulents on a windowsill or
              managing an entire indoor garden, PlantCare Tracker grows with
              you. 🌱
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Support;
