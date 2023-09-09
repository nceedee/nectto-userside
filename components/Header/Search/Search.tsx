import { Input } from "@/components/Global/Inputs/Input";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <div>
      <Input
        className="bg-blue-50 text-black flex items-center w-[600px] justify-between px-4 rounded-md py-2 border-none outline-none"
        type="text"
        placeholder="Search users, store and more..."
        icon={<SearchIcon />}
      />
    </div>
  );
};
