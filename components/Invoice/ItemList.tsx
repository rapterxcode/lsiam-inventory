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
    <div className='text-sm'>
  <Table>
    <TableHeader className='bg-current'>
      <TableRow>
        <TableHead className="w-[400px]">Product</TableHead>
        <TableHead>Qty.</TableHead>
        <TableHead>Unit Price</TableHead>
        <TableHead>Total Price</TableHead>
        {!isPrinting && <TableHead></TableHead>}
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium p-0">
          {isPrinting ? (
              <div className='w-[400px]' style={ {wordWrap: 'break-word', overflowWrap: 'break-word'} }>{item.item}</div>
            ) : (
            <Textarea
              name="item"
              placeholder="Item"
              value={item.item}
              onChange={(e) => handleItemChange(index, e)}
            />
          )}
          </TableCell>
          <TableCell className="p-0">
            {isPrinting ? (
              <div className='text-center'>{item.qty}</div>
            ) : (
              <Input
                type="number"
                name="qty"
                placeholder="Qty."
                value={item.qty}
                onChange={(e) => handleItemChange(index, e)}
                className='text-right'
              />
            )}
          </TableCell>
          <TableCell className="p-0">
            {isPrinting ? (
              <div className='text-center'>{item.unitPrice}</div>
            ) : (
              <Input
                type="number"
                name="unitPrice"
                placeholder="Unit Price"
                value={item.unitPrice}
                onChange={(e) => handleItemChange(index, e)}
                className='text-right'
              />
            )}
          </TableCell>
          <TableCell className="p-0">
            {isPrinting ? (
              <div className='text-center'>{item.totalPrice}</div>
            ) : (
              <Input
                type="number"
                name="totalPrice"
                placeholder="Total Price"
                value={item.totalPrice}
                onChange={(e) => handleItemChange(index, e)}
                className='text-right'
              />
            )}
          </TableCell>
          {!isPrinting && (
            <TableCell className="p-0">
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
  <section className="mb-3 mt-10 grid grid-cols-1 gap-0 text-right justify-end text-sm">
    <div className="col-span-1 col-start-2">
      <div className="grid grid-cols-2 gap-0 text-sm">
      {!isPrinting && (  <h4>SubTotal :</h4> )}
        {isPrinting ? (
              <div className='w-[auto] text-right grid grid-cols-2 col-start-2 gap-0 text-sm mr-8' style={{wordWrap: 'break-word', overflowWrap: 'break-word'}} >
                <h4>SubTotal :</h4>{subTotal}</div>
            ) : (
        <Input type="text" placeholder="SubTotal" value={subTotal.toString()} readOnly className='col-span-1' />
            )}
        {!isPrinting && (  <h4>Total :</h4> )}
        {isPrinting ? (
              <div className='w-[auto] text-right grid grid-cols-2 col-start-2 gap-0 text-sm mr-8' style={{wordWrap: 'break-word', overflowWrap: 'break-word'}} >
                <h4>Total :</h4>{total}</div>
            ) : (
        <Input type="text" placeholder="Total" value={total.toString()} readOnly className='col-span-1' />
            )}
        {!isPrinting && (  <h4>Balance Due :</h4> )}
        {isPrinting ? (
              <div className='w-[auto] text-right grid grid-cols-2 col-start-2 gap-0 text-sm mr-8' style={{wordWrap: 'break-word', overflowWrap: 'break-word'}} >
                <h4>Balance Due :</h4>{balanceDue}</div>
            ) : (
        <Input type="text" placeholder="Balance Due" value={balanceDue.toString()} readOnly className='col-span-1' />
            )}
        {!isPrinting && (  <h4>Total in the Words :</h4> )}
        {isPrinting ? (
              <div className='w-[300px] text-right grid grid-cols-2 col-start-2 gap-0 text-sm mr-8' style={{wordWrap: 'break-word', overflowWrap: 'break-word'}} >
                <h4>Total in the Words :</h4>{totalInWords}</div>
            ) : (
        <Textarea placeholder="Total in the Words" value={totalInWords} readOnly className='col-span-1' />
            )}
      </div>
    </div>
  </section>
</div>

  );
};

export default ItemList;
