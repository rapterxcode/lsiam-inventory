import React, { ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
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

const ItemList: React.FC<{
  items: Item[],
  handleItemChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void,
  addItem: () => void,
  removeItem: (index: number) => void,
}> = ({ items, handleItemChange, addItem, removeItem }) => (
  <div>
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
);

export default ItemList;
