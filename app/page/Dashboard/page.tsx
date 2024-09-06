import NavOne from "@/components/NavOne"
import NavTwo from "@/components/NavTwo"
import PageOriginal from "@/components/pageOriginal"





export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavOne/>
      <div className="flex flex-col">
        <NavTwo/>
        {/* Section Contect */}
        <PageOriginal/>
        {/* Section Contect */}
      </div>
    </div>
  )
};

