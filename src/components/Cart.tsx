import { Button } from "./ui/button";
import { Table, TableHead, TableHeader, TableRow } from "./ui/table";

const Cart = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>

            <TableHead>Price</TableHead>

            <TableHead>Quantity</TableHead>

            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default Cart;
