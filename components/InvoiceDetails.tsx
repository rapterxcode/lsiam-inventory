"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function InvoiceDetails() {
  const [client, setClient] = React.useState<string>("")
  const [invoiceNumber, setInvoiceNumber] = React.useState<string>("")
  const [poNumber, setPoNumber] = React.useState<string>("")
  const [paymentTerms, setPaymentTerms] = React.useState<string>("")
  const [project, setProject] = React.useState<string>("")
  const [invoiceDate, setInvoiceDate] = React.useState<Date>()
  const [fromCompanyName, setFromCompanyName] = React.useState<string>("")
  const [fromAddress, setFromAddress] = React.useState<string>("")
  const [fromPhoneNumber, setFromPhoneNumber] = React.useState<string>("")
  const [fromTaxID, setFromTaxID] = React.useState<string>("")
  const [fromWebsite, setFromWebsite] = React.useState<string>("")
  const [toAddress, setToAddress] = React.useState<string>("")
  const [toPhoneNumber, setToPhoneNumber] = React.useState<string>("")
  const [toTaxID, setToTaxID] = React.useState<string>("")
  const [toWebsite, setToWebsite] = React.useState<string>("")

  return (
    <div>
      <section className="mb-2 grid grid-cols-2 gap-12 justify-end">
      <div className="text-xl font-semibold justify-end text-left">
        <p>Invoice Information</p>
  <Input type="text" placeholder="Invoice Number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className='mb-2' />
  <Input type="text" placeholder="PO. Number" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className='mb-2' />
  <Input type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} className='mb-2' />
  <Input type="text" placeholder="Payment Terms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='mb-2' />
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[100%] justify-start text-left font-normal",
          !invoiceDate && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {invoiceDate ? format(invoiceDate, "PPP") : <span>Invoice Date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        selected={invoiceDate}
        onSelect={setInvoiceDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>

</div>
      </section>
      <section className="mb-2 grid grid-cols-2 gap-12">
      <div className="text-xl font-semibold justify-end text-left">
      <p>Bill To :</p>
            <Input type="text" placeholder="Company Name" value={client} onChange={(e) => setClient(e.target.value)} className='mb-2' />
            <Input type="text" placeholder="Address" value={toAddress} onChange={(e) => setToAddress(e.target.value)} className='mb-2' />
            <Input type="text" placeholder="Phone Number" value={toPhoneNumber} onChange={(e) => setToPhoneNumber(e.target.value)} className='mb-2' />
            <Input type="text" placeholder="Tax ID" value={toTaxID} onChange={(e) => setToTaxID(e.target.value)} className='mb-2' />
            <Input type="text" placeholder="Website" value={toWebsite} onChange={(e) => setToWebsite(e.target.value)} className='mb-2' />
          
        </div>
      <div className="text-xl font-semibold justify-end text-left">
      <p>Bill To :</p>
              <Input type="text" placeholder="Company Name" value={fromCompanyName} onChange={(e) => setFromCompanyName(e.target.value)} className='mb-2' />
              <Input type="text" placeholder="Address" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} className='mb-2' />
              <Input type="text" placeholder="Phone Number" value={fromPhoneNumber} onChange={(e) => setFromPhoneNumber(e.target.value)} className='mb-2' />
              <Input type="text" placeholder="Tax ID" value={fromTaxID} onChange={(e) => setFromTaxID(e.target.value)} className='mb-2' />
              <Input type="text" placeholder="Website" value={fromWebsite} onChange={(e) => setFromWebsite(e.target.value)} className='mb-2' />
         
        </div>
        
       
      </section>
    
          
        
        
   

      
    </div>
  )
}
export default InvoiceDetails