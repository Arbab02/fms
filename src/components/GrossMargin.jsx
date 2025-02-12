'use client'
// components/FinancialCalculators/GrossMargin.js
import { useState } from "react";
import { FaPercentage, FaClipboard } from "react-icons/fa";

const GrossMargin = () => {
  const [revenue, setRevenue] = useState(0);
  const [cogs, setCogs] = useState(0);

  const handleChange = (e, setter) => {
    if (!isNaN(e.target.value) && e.target.value >= 0) setter(Number(e.target.value));
  };

  const calculateGrossMargin = revenue && cogs ? ((revenue - cogs) / revenue) * 100 : 0;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="p-6 inline-block text-left bg-white rounded-xl shadow-lg space-y-6 w-full sm:w-1/2 md:w-1/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Gross Margin</h2>
        <FaPercentage className="text-2xl text-blue-600" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Revenue</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => handleChange(e, setRevenue)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter revenue"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Cost of Goods Sold (COGS)</label>
          <input
            type="number"
            value={cogs}
            onChange={(e) => handleChange(e, setCogs)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter COGS"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-sm">
          <strong>Gross Margin:</strong> {calculateGrossMargin.toFixed(2)}% 
          <button
            onClick={() => copyToClipboard(calculateGrossMargin.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
        <p className="text-sm">
          <strong>Gross Margin:</strong> {calculateGrossMargin.toFixed(2)}% 
          <button
            onClick={() => copyToClipboard(calculateGrossMargin.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
      </div>
    </div>
  );
};

export default GrossMargin;
