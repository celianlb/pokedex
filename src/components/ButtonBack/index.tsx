import { IoReturnUpBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
const router = useRouter();

const handleClick = () => {
    router.back();
}
  return (
    <button
      onClick={handleClick}
    >
      <IoReturnUpBack className=" w-12 h-12" />
    </button>
  );
};
export default ButtonBack;
