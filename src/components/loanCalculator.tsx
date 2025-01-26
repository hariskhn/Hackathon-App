import React, { useState } from "react";

const LoanCalculator: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [deposit, setDeposit] = useState<number>(0);
  const [loanPeriod, setLoanPeriod] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const estimatedLoan = deposit * loanPeriod * 0.05;
    setResult(estimatedLoan);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Loan Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Category:</label>
        <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Wedding">Wedding</option>
          <option value="Home Construction">Home Construction</option>
          <option value="Business Startup">Business Startup</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Initial Deposit (PKR):</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Loan Period (years):</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(Number(e.target.value))}
          min={1}
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      {result !== null && (
        <p className="mt-4 text-green-600 font-semibold">
          Estimated Loan Amount: PKR {result.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default LoanCalculator;
