import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="flex-col h-[50vh] w-[400vw] p-3  align-items
    justify-content"
    >
      {" "}
      <Image src="/Group.svg" alt="Image 3" width={1700} height={400} />
    </div>
  );
}
