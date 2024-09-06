
import React from "react"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"

export function Footer() {
  const [note, setNote] = React.useState<string>("")
  const [conterms, setConTerms] = React.useState<string>("")
  const [emailPaypal, setEmailPaypal] = React.useState<string>("")
  return (
        <section className="mb-2 grid grid-cols-2 gap-12">
        <div className="col-end-2 text-lg font-semibold">
            <h2>Payment Medtod</h2>
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Select a Payment Medtod" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              {/* <SelectLabel>Medtod</SelectLabel> */}
              <SelectItem value="paypal">Paypal</SelectItem>
              <SelectItem disabled value="debitcard">Debit Card</SelectItem>
              <SelectItem disabled value="creditcard">Credit Card</SelectItem>
              </SelectGroup>
            </SelectContent>
        </Select>
        <Input type="text" placeholder="Email xxxx@xxxx.com" value={emailPaypal} onChange={(e) => setEmailPaypal(e.target.value)} className='mb-2 bg-transparent' />
            
        </div>
        <div className="col-end-2 text-lg font-semibold">
            <h2>Notes</h2>
            <Textarea placeholder="Notes" value={note} onChange={(e) => setNote(e.target.value)} className='mb-2 bg-transparent' />
            <h2>Condition and Terms</h2>
            <Textarea placeholder="Condition and Terms" value={conterms} onChange={(e) => setConTerms(e.target.value)} className='mb-2 bg-transparent' />
        </div>
        {/* <div className="col-end-4 text-lg font-semibold">
            <h2>Notes</h2>
            <Textarea placeholder="Notes" value={note} onChange={(e) => setNote(e.target.value)} className='mb-2 bg-transparent' />
            <h2>Condition and Terms</h2>
            <Textarea placeholder="Condition and Terms" value={conterms} onChange={(e) => setConTerms(e.target.value)} className='mb-2 bg-transparent' />
        </div> */}
    </section>
  )
}

export default Footer