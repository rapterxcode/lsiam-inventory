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
import { Input } from "../ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

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
  const [shipCompanyName, setShipCompanyName] = React.useState<string>("")
  const [shipAddress, setShipAddress] = React.useState<string>("")
  const [shipPhoneNumber, setShipPhoneNumber] = React.useState<string>("")
  const [shipTaxID, setShipTaxID] = React.useState<string>("")
  const [shipWebsite, setShipWebsite] = React.useState<string>("")

  return (
<div>
      <section className="mb-2 grid grid-cols-2 gap-12 justify-end">
        <div className="ml-2 col-start-1 text-lg font-bold justify-start text-left">
        <h1>From :</h1>
          <Input type="text" placeholder="Company Name" value={fromCompanyName} onChange={(e) => setFromCompanyName(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Address" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Phone Number" value={fromPhoneNumber} onChange={(e) => setFromPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Tax ID" value={fromTaxID} onChange={(e) => setFromTaxID(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Website" value={fromWebsite} onChange={(e) => setFromWebsite(e.target.value)} className='mb-2 bg-transparent' />
        </div>
        <div className="col-end-4 text-lg font-semibold justify-end text-center">
        <p>Invoice Information</p>
        <Input type="text" placeholder="Invoice No. INV-55555" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className='mb-2 bg-transparent' />
        <Input type="text" placeholder="PO. Number QT-44444" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className='mb-2 bg-transparent' />
        <Input type="text" placeholder="Project Name" value={project} onChange={(e) => setProject(e.target.value)} className='mb-2 bg-transparent' />
        <Input type="text" placeholder="Payment Terms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='mb-2 bg-transparent' />
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] justify-start text-left font-normal bg-transparent",
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
            <Input type="text" placeholder="Company Name" value={client} onChange={(e) => setClient(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Address" value={toAddress} onChange={(e) => setToAddress(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Phone Number" value={toPhoneNumber} onChange={(e) => setToPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Tax ID" value={toTaxID} onChange={(e) => setToTaxID(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Website" value={toWebsite} onChange={(e) => setToWebsite(e.target.value)} className='mb-2 bg-transparent' />
          
        </div>
      <div className="text-xl font-semibold justify-end text-left">
      <p>Ship To :</p>
            <Input type="text" placeholder="Company Name" value={shipCompanyName} onChange={(e) => setShipCompanyName(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Address" value={shipAddress} onChange={(e) => setShipAddress(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Phone Number" value={shipPhoneNumber} onChange={(e) => setShipPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Tax ID" value={shipTaxID} onChange={(e) => setShipTaxID(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Website" value={shipWebsite} onChange={(e) => setShipWebsite(e.target.value)} className='mb-2 bg-transparent' />
        </div>
    </section> 
    </div>
  )
}
export default InvoiceDetails