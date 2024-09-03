import React from 'react';
import { Input } from '@/components/ui/input';

const InvoiceDetails: React.FC<{
  client: string,
  setClient: (client: string) => void,
  invoiceNumber: string,
  setInvoiceNumber: (invoiceNumber: string) => void,
  poNumber: string,
  setPoNumber: (poNumber: string) => void,
  paymentTerms: string,
  setPaymentTerms: (paymentTerms: string) => void,
  project: string,
  setProject: (project: string) => void,
}> = ({
  client,
  setClient,
  invoiceNumber,
  setInvoiceNumber,
  poNumber,
  setPoNumber,
  paymentTerms,
  setPaymentTerms,
  project,
  setProject,
}) => (
  <div>
    <section className="mb-8">
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
  </div>
);

export default InvoiceDetails;
