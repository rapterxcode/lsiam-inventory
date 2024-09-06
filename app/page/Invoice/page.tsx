import InvoiceBuilder from "@/components/Invoice/InvoiceBuilder";
import NavOne from "@/components/NavOne";
import NavTwo from "@/components/NavTwo";

export default function InvoicePage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <NavOne/>
    <div className="flex flex-col">
      <NavTwo/>
      {/* Section Contect */}
      <InvoiceBuilder/>
      {/* Section Contect */}
    </div>
  </div>
  );
}
