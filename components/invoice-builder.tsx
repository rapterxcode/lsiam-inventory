"use client";

import React, { useState, ChangeEvent, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoUpload from './LogoUpload';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Invoice Builder</h1>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '210mm', // A4 width
            height: '297mm', // A4 height
            overflow: 'auto',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        >
          <div ref={printRef}>
            <div className="invoice-builder p-6 rounded-lg shadow-md bg-white" style={{ width: '210mm', height: '297mm' }}>
              <header className="mb-8 text-center">
                <LogoUpload onLogoUpload={setLogo} />
                {logo && <img src={logo} alt="Company Logo" className="h-16 mb-4 mx-auto" />}
              </header>

              <section className="mb-8">
                <h2 className="text-xl font-semibold">Invoice</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">From</h3>
                    <Input type="text" placeholder="Company Name" className='mb-2' />
                    <Input type="text" placeholder="Address" className='mb-2' />
                    <Input type="text" placeholder="Phone Number" className='mb-2' />
                    <Input type="text" placeholder="Tax ID" className='mb-2' />
                    <Input type="text" placeholder="Website" className='mb-2' />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">To</h3>
                    <Input type="text" placeholder="Company Name" value={client} onChange={(e) => setClient(e.target.value)} className='mb-2' />
                    <Input type="text" placeholder="Address" className='mb-2' />
                    <Input type="text" placeholder="Phone Number" className='mb-2' />
                    <Input type="text" placeholder="Tax ID" className='mb-2' />
                    <Input type="text" placeholder="Website" className='mb-2' />
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold">Invoice Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
                    <Input type="text" placeholder="-" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className='mb-2' />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">PO. Number</label>
                    <Input type="text" placeholder="-" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className='mb-2' />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Terms</label>
                    <Input type="text" placeholder="-" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='mb-2' />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Invoice Date</label>
                    <Input type="text" placeholder="Sep 04, 2024" className='mb-2' readOnly />
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold">Project Description</h2>
                <Input type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} className='mb-2' />
              </section>

              <Table>
                <TableCaption>@ LeSiam</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Item</TableHead>
                    <TableHead>Qty.</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead>Total Price</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <Input
                          type="text"
                          name="item"
                          placeholder="Item"
                          value={item.item}
                          onChange={(e) => handleItemChange(index, e)}
                          className="mr-2 flex-1"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          name="qty"
                          placeholder="Qty."
                          value={item.qty}
                          onChange={(e) => handleItemChange(index, e)}
                          className="mr-2 w-24"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          name="unitPrice"
                          placeholder="Unit Price"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(index, e)}
                          className="mr-2 w-24"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          name="totalPrice"
                          placeholder="Total Price"
                          value={item.totalPrice}
                          onChange={(e) => handleItemChange(index, e)}
                          className="mr-2 w-24"
                        />
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" onClick={() => removeItem(index)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Button onClick={addItem}>Add Item</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvoiceBuilder;
