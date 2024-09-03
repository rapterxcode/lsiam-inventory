
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import InvoiceBuilder from "@/components/invoice-builder"

export default function InvoicePage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar/>
        <div className="flex flex-col">
          <Nav/>
          <InvoiceBuilder/>
          
        </div>
    </div>        
        
      
  );
}
