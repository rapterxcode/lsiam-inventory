"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from '@/components/Invoice/Header';
import InvoiceDetails from '@/components/Invoice/InvoiceDetails';
import ItemList from '@/components/Invoice/ItemList';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Invoice/Footer';
import LogoUpload from '@/components/LogoUpload'; // Import the LogoUpload component

const InvoiceBuilder: React.FC = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500); // Delay to ensure all elements are rendered
      });
    },
  });

  useEffect(() => {
    // This effect will run every time the logo changes
    if (componentRef.current) {
      componentRef.current.style.display = 'block';
    }
  }, [logo]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6" style={{ height: 'auto', width: 'auto' }}>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Invoice</h1>
        <div className="ml-auto space-x-2">
          <LogoUpload onLogoUpload={setLogo} /> {/* Add the LogoUpload component */}
          <Button variant="outline" onClick={handlePrint}>
            Print
          </Button>
          <Button>
            Download PDF
          </Button>
        </div>
      </div>
      <div 
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}
      >
        <div ref={componentRef} className="invoice-builder p-6 rounded-lg shadow-md bg-white">
          <Header logo={logo} setLogo={setLogo} />
          <InvoiceDetails />
          <ItemList />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default InvoiceBuilder;