"use client"

import { useState } from "react";
import LoanCalculator from "@/components/loanCalculator";
import LoanCategoryCard from "@/components/loanCategoryCard";
import Modal from "@/components/modal";

const Home: React.FC = () => {
  const loanCategories = [
    {
      title: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    {
      title: "Home Construction Loans",
      subcategories: ["Structure", "Finishing"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      title: "Business Startup Loans",
      subcategories: ["Buy Stall", "Shop Assets"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      title: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: 4,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleProceed = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-8 rounded-lg shadow-md">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700">Saylani Microfinance App</h1>
        <p className="text-gray-700">Empowering dreams through Qarze Hasana</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {loanCategories.map((category, index) => (
          <LoanCategoryCard key={index} {...category}>
            <ul>
              {category.subcategories.map((sub, idx) => (
                <li key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                  <span className="text-gray-700 font-medium">{sub}</span>
                  <button
                    onClick={() => handleProceed(sub)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Proceed
                  </button>
                </li>
              ))}
            </ul>
          </LoanCategoryCard>
        ))}
      </section>

      <section>
        <LoanCalculator />
      </section>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="w-96">
            <h2 className="text-2xl font-bold mb-4">Proceed with {selectedSubcategory}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">CNIC</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg shadow-sm"
                  placeholder="Enter your CNIC"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg shadow-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg shadow-sm"
                  placeholder="Enter your name"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;