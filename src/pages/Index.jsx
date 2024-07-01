import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const stockData = [
  { symbol: "AAPL", price: 150.75, change: "+1.25" },
  { symbol: "GOOGL", price: 2750.50, change: "-15.30" },
  { symbol: "AMZN", price: 3400.00, change: "+10.00" },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-3xl text-center mb-4">Stock Market Tracker</h1>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Stock Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((stock) => (
                <TableRow key={stock.symbol}>
                  <TableCell>{stock.symbol}</TableCell>
                  <TableCell>${stock.price.toFixed(2)}</TableCell>
                  <TableCell>{stock.change}</TableCell>
                  <TableCell>
                    <Button variant="outline">Resale</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;