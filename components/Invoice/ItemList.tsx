import React, { ChangeEvent, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Item {
  item: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
}

const ItemList: React.FC<{ isPrinting: boolean }> = ({ isPrinting }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [balanceDue, setBalanceDue] = useState<number>(0);
  const [totalInWords, setTotalInWords] = useState<string>("");

  const handleItemChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index] = { 
      ...updatedItems[index], 
      [name]: name === 'qty' || name === 'unitPrice' ? parseFloat(value) : value 
    };
    updatedItems[index].totalPrice = updatedItems[index].qty * updatedItems[index].unitPrice;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { item: '', qty: 0, unitPrice: 0, totalPrice: 0 }]);
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const numberToWords = (num: number) => {
    const a = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const b = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const convert = (n: number) => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? '-' + a[n % 10] : '');
      if (n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + convert(n % 100) : '');
      if (n < 1000000) return convert(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '');
      if (n < 1000000000) return convert(Math.floor(n / 1000000)) + ' million' + (n % 1000000 ? ' ' + convert(n % 1000000) : '');
      return n.toString();
    };

    const dollars = Math.floor(num);
    const cents = Math.round((num - dollars) * 100);
    const centsInWords = cents === 0 ? 'zero' : convert(cents);
    return `Dollars ${convert(dollars)} and ${centsInWords} Cents`;
  };

  useEffect(() => {
    const subTotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
    setSubTotal(subTotal);
    setTotal(subTotal); // Assuming total is same as subTotal for simplicity
    setBalanceDue(subTotal); // Assuming balanceDue is same as subTotal for simplicity
    setTotalInWords(numberToWords(subTotal));
  }, [items]);

  return (
    <div>
      <Table>
        <TableHeader className='bg-current'>
          <TableRow>
            <TableHead className="w-[500px]">Product</TableHead>
            <TableHead>Qty.</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total Price</TableHead>
            {!isPrinting && <TableHead></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {isPrinting ? (
                  item.item
                ) : (
                  <Textarea
                    name="item"
                    placeholder="Item"
                    value={item.item}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                )}
              </TableCell>
              <TableCell>
                {isPrinting ? (
                  item.qty
                ) : (
                  <Input
                    type="number"
                    name="qty"
                    placeholder="Qty."
                    value={item.qty}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mr-2 w-24"
                  />
                )}
              </TableCell>
              <TableCell>
                {isPrinting ? (
                  item.unitPrice
                ) : (
                  <Input
                    type="number"
                    name="unitPrice"
                    placeholder="Unit Price"
                    value={item.unitPrice}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mr-2 w-24"
                  />
                )}
              </TableCell>
              <TableCell>
                {isPrinting ? (
                  item.totalPrice
                ) : (
                  <Input
                    type="number"
                    name="totalPrice"
                    placeholder="Total Price"
                    value={item.totalPrice}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mr-2 w-24"
                  />
                )}
              </TableCell>
              {!isPrinting && (
                <TableCell>
                  <Button variant="ghost" onClick={() => removeItem(index)}>
                    Remove
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!isPrinting && (
        <Button onClick={addItem}>Add Item</Button>
      )}
      <section className="mb-2 grid grid-cols-2 gap-20 text-right justify-end">
        <div className="col-span-1 col-start-2">
          <div className="grid grid-cols-2 gap-1 ">
            <h4 className="col-span-1">SubTotal :</h4>
            <Input type="text" placeholder="SubTotal" value={subTotal.toString()} readOnly className='mb-2 col-span-1' />
            <h4 className="col-span-1">Total :</h4>
            <Input type="text" placeholder="Total" value={total.toString()} readOnly className='mb-2  col-span-1' />
            <h4 className="col-span-1">Balance Due :</h4>
            <Input type="text" placeholder="Balance Due" value={balanceDue.toString()} readOnly className='mb-2  col-span-1' />
            <h4 className="col-span-1">Total in the Words :</h4>
            <Textarea placeholder="Total in the Words" value={totalInWords} readOnly className='mb-2  col-span-1' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemList;
