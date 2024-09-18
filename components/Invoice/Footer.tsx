import React from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

interface FooterProps {
  isPrinting: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isPrinting }) => {
  const [note, setNote] = React.useState<string>(
    "Note: Thank you for your business! Please make the payment by the due date to avoid any late fees. If you have any questions, feel free to contact us at [Your Contact Information]."
  );
  const [conterms, setConTerms] = React.useState<string>(
    "1. Payment Terms - Payment Due Date: Payment is due within [X] days from the invoice date. - Late Payment: A late fee of [Y]% per month will be applied to overdue invoices. - Early Payment Discount: A [Z]% discount is available if payment is made within [A] days of the invoice date."
  );
  const [emailPaypal, setEmailPaypal] = React.useState<string>("support@lsiam.com");
  const [paymentMethod, setPaymentMethod] = React.useState<string>("");

  return (
    <section className="mb-2 gap-12">
      <div className="col-end-2 text-lg font-semibold">
        <h2>Payment Method</h2>
        {isPrinting ? (
          <>
          <div className="text-sm">
            <div>{paymentMethod}</div>
            <div>{emailPaypal}</div>
          </div>  
          </>
        ) : (
          <>
            <Select onValueChange={(value) => setPaymentMethod(value)}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a Payment Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Paypal">Paypal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Email xxxx@xxxx.com"
              value={emailPaypal}
              onChange={(e) => setEmailPaypal(e.target.value)}
              className="mb-2 bg-transparent"
            />
          </>
        )}
      </div>
      <div className="col-end-2 text-lg font-semibold">
        <h2>Notes</h2>
        {isPrinting ? (
          <div className="text-sm">
          <div>{note}</div>
          </div>
        ) : (
          <Textarea
            placeholder="Notes"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mb-2 bg-transparent"
          />
        )}
        <h2>Condition and Terms</h2>
        {isPrinting ? (
          <div className="text-sm">
          <div>{conterms}</div>
          </div>
        ) : (
          <Textarea
            placeholder="Condition and Terms"
            value={conterms}
            onChange={(e) => setConTerms(e.target.value)}
            className="mb-2 bg-transparent"
          />
        )}
      </div>
    </section>
  );
};

export default Footer;
