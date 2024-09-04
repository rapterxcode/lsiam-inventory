import Dashboard from "@/components/dashboard";
import InvoiceBuilder from "@/components/Invoice/InvoiceBuilder";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]" >
      <Sidebar/>
        <div className="flex flex-col">
          <Nav/>
          {/* <Dashboard/> */}
          <InvoiceBuilder/>
        </div>
    </div>        
        
      
  );
}
