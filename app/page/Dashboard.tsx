'use client'

import Maincontent from "../../components/MainContent"
import NavTwo from "../../components/NavTwo"
import NavOne from "../../components/NavOne"


export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavOne/>
      <div className="flex flex-col">
        <NavTwo/>
        {/* Section Contect */}
        <Maincontent/>
        {/* Section Contect */}
      </div>
    </div>
  )
}
