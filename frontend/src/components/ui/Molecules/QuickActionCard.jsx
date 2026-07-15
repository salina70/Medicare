import { Plus, Search, FileText } from "lucide-react";

import IconBox from "../atoms/IconBox";

const icons = {
  plus: Plus,
  search: Search,
  file: FileText,
};

const QuickActionCard = ({ title, icon }) => {
  const Icon = icons[icon];

  return (
    <button
      className="
      flex items-center gap-4
      rounded-xl border border-neutral-800
      bg-neutral-900 p-5
      hover:border-green-600
      transition
      "
    >
      <IconBox>
        <Icon size={22} />
      </IconBox>

      <span>{title}</span>
    </button>
  );
};

export default QuickActionCard;
