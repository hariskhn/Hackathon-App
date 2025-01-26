import { FC, ReactNode } from "react";

interface LoanCategoryCardProps {
  title: string;
  subcategories: string[];
  maxLoan: number | string;
  loanPeriod: number;
  children?: ReactNode; // Allow children prop
}

const LoanCategoryCard: FC<LoanCategoryCardProps> = ({ title, subcategories, maxLoan, loanPeriod, children }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>Max Loan: {maxLoan}</p>
      <p>Loan Period: {loanPeriod} years</p>
      <div>{children}</div>
    </div>
  );
};

export default LoanCategoryCard;
