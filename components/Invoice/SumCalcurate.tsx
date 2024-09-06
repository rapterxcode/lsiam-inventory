
function SumCalcurate() {
  return (
    <section className="mb-2 grid grid-cols-2 gap-12 justify-end">
        
        <div className="col-end-4 text-lg font-semibold justify-end text-center">
            <p>Invoice Information</p>
            <Input type="text" placeholder="Invoice No. INV-55555" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="PO. Number QT-44444" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Project Name" value={project} onChange={(e) => setProject(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Payment Terms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='mb-2 bg-transparent' />
        </div>
    </section>
  )
}

export default SumCalcurate