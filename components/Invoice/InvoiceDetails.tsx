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

interface InvoiceDetailsProps {
  isPrinting: boolean;
}

export const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ isPrinting }) => {
  const [client, setClient] = React.useState<string>("Le Siam Internetwork Co., Ltd. (Thailand)")
  const [invoiceNumber, setInvoiceNumber] = React.useState<string>("INV-555555")
  const [poNumber, setPoNumber] = React.useState<string>("QT-123456")
  const [paymentTerms, setPaymentTerms] = React.useState<string>("1 Month")
  const [project, setProject] = React.useState<string>("Cloud Internal LDC")
  const [invoiceDate, setInvoiceDate] = React.useState<Date>()
  const [fromCompanyName, setFromCompanyName] = React.useState<string>("Le Siam Internetwork (Canada) Inc.")
  const [fromAddress, setFromAddress] = React.useState<string>("3582 30TH ST.N, Lethbridge, Alberta, Canada Post Code: T1H 6Z4")
  const [fromPhoneNumber, setFromPhoneNumber] = React.useState<string>("+1 639 476 6866")
  const [fromTaxID, setFromTaxID] = React.useState<string>("012999999")
  const [fromWebsite, setFromWebsite] = React.useState<string>("https://www.lesiam.ca/contact.html")
  const [toAddress, setToAddress] = React.useState<string>("288/43-44, M.5, Pakkret, Pakkret,Nonthaburi, 11120, Thailand.")
  const [toPhoneNumber, setToPhoneNumber] = React.useState<string>("+66 2 102 1038")
  const [toTaxID, setToTaxID] = React.useState<string>("012999999")
  const [toWebsite, setToWebsite] = React.useState<string>("https://www.lsiam.com/contact.html")
  const [shipCompanyName, setShipCompanyName] = React.useState<string>("Le Siam Internetwork Company Limited (Hong Kong)")
  const [shipAddress, setShipAddress] = React.useState<string>("Room 023, 9/F, Block G, Kwai Shing Industrial Building (Stage 2), 42-46 Tai Lin Pai Road, Kwai Chung, N.T., HongKong")
  const [shipPhoneNumber, setShipPhoneNumber] = React.useState<string>("+852 6871 1585")
  const [shipTaxID, setShipTaxID] = React.useState<string>("012999999")
  const [shipWebsite, setShipWebsite] = React.useState<string>("https://www.lsiam.com/contact.html")

  return (
<div>
      <section className="mb-2 grid grid-cols-2  justify-end">
        <div className=" text-lg font-semibold  text-left w-[400px] ">
        <h1>From :</h1>
        {isPrinting ? (
              <>
              
                <div className="text-sm  text-left">
                <div>{fromCompanyName}</div>
                <div>{fromAddress}</div>
                <div>{fromPhoneNumber}</div>
                <div>{fromTaxID}</div>
                <div>{fromWebsite}</div>
                </div>
                
              </>
            ) : (
              <>
          <Input type="text" placeholder="Company Name" value={fromCompanyName} onChange={(e) => setFromCompanyName(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Address" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Phone Number" value={fromPhoneNumber} onChange={(e) => setFromPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Tax ID" value={fromTaxID} onChange={(e) => setFromTaxID(e.target.value)} className='mb-2 bg-transparent' />
          <Input type="text" placeholder="Website" value={fromWebsite} onChange={(e) => setFromWebsite(e.target.value)} className='mb-2 bg-transparent' />
          </>
          )}
        </div>
        <div className="col-end-4 text-lg font-semibold justify-end text-right">
        <h1>Invoice Information</h1>
        {isPrinting ? (
              <>
              <div className="text-sm text-right ">
                <div>{invoiceNumber}</div>
                <div>{poNumber}</div>
                <div>{project}</div>
                <div>{paymentTerms}</div>
                <div>{invoiceDate ? format(invoiceDate, "PPP") : ''}</div>
                </div>
              </>
            ) : (
              <>
        <Input type="text" placeholder="Invoice No. INV-55555" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className='mb-2 bg-transparent text-right' />
        <Input type="text" placeholder="PO. Number QT-44444" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className='mb-2 bg-transparent text-right' />
        <Input type="text" placeholder="Project Name" value={project} onChange={(e) => setProject(e.target.value)} className='mb-2 bg-transparent text-right' />
        <Input type="text" placeholder="Payment Terms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='mb-2 bg-transparent text-right' />
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] bg-transparent text-right",
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
    </>
            )}
        </div>
    </section>
    <section className="mb-2 grid grid-cols-2 gap-12">
      <div className="text-lg font-semibold justify-end text-left">
      <p>Bill To :</p>
      {isPrinting ? (
              <>
              <div className="text-sm">
                <div>{client}</div>
                <div>{toAddress}</div>
                <div>{toPhoneNumber}</div>
                <div>{toTaxID}</div>
                <div>{toWebsite}</div>
                </div>
              </>
            ) : (
              <>
            <Input type="text" placeholder="Company Name" value={client} onChange={(e) => setClient(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Address" value={toAddress} onChange={(e) => setToAddress(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Phone Number" value={toPhoneNumber} onChange={(e) => setToPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Tax ID" value={toTaxID} onChange={(e) => setToTaxID(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Website" value={toWebsite} onChange={(e) => setToWebsite(e.target.value)} className='mb-2 bg-transparent' />
            </>
            )}
        </div>
      <div className="text-lg font-semibold justify-end text-left">
      <p>Ship To :</p>
      {isPrinting ? (
              <>
              <div className="text-sm">
                <div>{shipCompanyName}</div>
                <div>{shipAddress}</div>
                <div>{shipPhoneNumber}</div>
                <div>{shipTaxID}</div>
                <div>{shipWebsite}</div>
                </div>
              </>
            ) : (
              <>
            <Input type="text" placeholder="Company Name" value={shipCompanyName} onChange={(e) => setShipCompanyName(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Address" value={shipAddress} onChange={(e) => setShipAddress(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Phone Number" value={shipPhoneNumber} onChange={(e) => setShipPhoneNumber(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Tax ID" value={shipTaxID} onChange={(e) => setShipTaxID(e.target.value)} className='mb-2 bg-transparent' />
            <Input type="text" placeholder="Website" value={shipWebsite} onChange={(e) => setShipWebsite(e.target.value)} className='mb-2 bg-transparent' />
            </>
            )}
        </div>
    </section> 
    </div>
  )
}
export default InvoiceDetails