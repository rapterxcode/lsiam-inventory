"use client";

import React, { useState, ChangeEvent, useRef } from 'react';
import Header from '@/components/Header';
import InvoiceDetails from '@/components/InvoiceDetails';
import ItemList from '@/components/ItemList';
import { Button } from '@/components/ui/button';

interface Item {
  item: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
}

const InvoiceBuilder: React.FC = () => {
  const [client, setClient] = useState<string>('');
  const [project, setProject] = useState<string>('');
  const [items, setItems] = useState<Item[]>([{ item: '', qty: 0, unitPrice: 0, totalPrice: 0 }]);
  const [logo, setLogo] = useState<string | null>(null);
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [poNumber, setPoNumber] = useState<string>('');
  const [paymentTerms, setPaymentTerms] = useState<string>('');
  const printRef = useRef<HTMLDivElement>(null);

  const handleItemChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newItems = [...items];
    newItems[index][event.target.name as keyof Item] = event.target.value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { item: '', qty: 0, unitPrice: 0, totalPrice: 0 }]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6" style={{ height: 'auto', width: 'auto' }}>
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Invoice</h1>
      <div className="ml-auto space-x-2">
        <Button variant="outline">
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
      <div className="invoice-builder p-6 rounded-lg shadow-md">
        <Header logo={logo} setLogo={setLogo} />
        <InvoiceDetails
          client={client}
          setClient={setClient}
          invoiceNumber={invoiceNumber}
          setInvoiceNumber={setInvoiceNumber}
          poNumber={poNumber}
          setPoNumber={setPoNumber}
          paymentTerms={paymentTerms}
          setPaymentTerms={setPaymentTerms}
          project={project}
          setProject={setProject}
        />
        <ItemList
          items={items}
          handleItemChange={handleItemChange}
          addItem={addItem}
          removeItem={removeItem}
        />
      </div>
    </div>
  </main>
  );
};

export default InvoiceBuilder;
