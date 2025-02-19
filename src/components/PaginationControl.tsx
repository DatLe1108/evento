import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyle =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

type PaginationControlProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControl({
  previousPath,
  nextPath,
}: PaginationControlProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div></div>
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
