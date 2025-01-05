import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 9 }).map(() => (
        <SkeletonCard />
      ))}
    </div>
  );
}
