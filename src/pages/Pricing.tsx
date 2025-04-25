import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from '@/components/Navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Pricing() {
  const { toast } = useToast();
  const [marketPrice, setMarketPrice] = useState("");
  const [vendorPrice, setVendorPrice] = useState("");
  const [values, setValues] = useState({
    stageWidth: "",
    stageLength: "",
    stageHeight: "",
    stageWrap: "",
    floorWidth: "",
    floorLength: "",
    isFloorMatteBlack: false,
    selectedDesign: "",
    borderColor: "",
    borderWidth: "",
    isStage: true,
  });

  const tableData = [
    { printed: "10x10", chrome: "10x10" },
    { printed: "12x12", chrome: "12x12" },
    { printed: "15x15", chrome: "15x15" },
    { printed: "Full Print", chrome: "" },
    { printed: "No Design" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Calculating prices...",
      description: "Your request is being processed.",
    });
    // Placeholder for API call
    setMarketPrice("1000");
    setVendorPrice("800");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="font-playfair text-maple-red text-5xl mb-16 text-center italic animate-fade-in">Pricing</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
          {/* Stage Wrap Card */}
          <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="space-y-6">
                <h3 className="font-playfair text-maple-red text-2xl">Stage Wrap</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RadioGroup
                    defaultValue="yes"
                    onValueChange={(val) => setValues({ ...values, isStage: val === "yes" })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-white">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-white">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {values.isStage && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Width"
                        className="bg-gray-700 text-white"
                        type="number"
                        value={values.stageWidth}
                        onChange={(e) => setValues({ ...values, stageWidth: e.target.value })}
                      />
                      <Input
                        placeholder="Length"
                        className="bg-gray-700 text-white"
                        type="number"
                        value={values.stageLength}
                        onChange={(e) => setValues({ ...values, stageLength: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            Select Height
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageHeight: "less-than-12" })}>
                            Less than 12in (1ft)
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageHeight: "12-to-16" })}>
                            More than 12in, less than 16in
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageHeight: "16-to-24" })}>
                            More than 16in, less than 24in
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageHeight: "more-than-24" })}>
                            More than 24in (2ft)
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            Select Wrap
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageWrap: "white" })}>
                            White
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageWrap: "matte-black" })}>
                            Matte Black
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, stageWrap: "full-print" })}>
                            Full Print
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Floor Wrap Card */}
          <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="space-y-6">
                <h3 className="font-playfair text-maple-red text-2xl">Floor Wrap</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Width"
                    className="bg-gray-700 text-white"
                    type="number"
                    value={values.floorWidth}
                    onChange={(e) => setValues({ ...values, floorWidth: e.target.value })}
                  />
                  <Input
                    placeholder="Length"
                    className="bg-gray-700 text-white"
                    type="number"
                    value={values.floorLength}
                    onChange={(e) => setValues({ ...values, floorLength: e.target.value })}
                  />
                </div>

                <div>
                  <h4 className="text-white mb-4">Is the floor wrap matte black?</h4>
                  <RadioGroup
                    defaultValue={values.isFloorMatteBlack ? "yes" : "no"}
                    onValueChange={(val) => setValues({ ...values, isFloorMatteBlack: val === "yes" })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="floor-yes" />
                      <Label htmlFor="floor-yes" className="text-white">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="floor-no" />
                      <Label htmlFor="floor-no" className="text-white">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="text-white mb-4">Design Table</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-white">Printed</TableHead>
                            <TableHead className="text-white">Chrome</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-white">
                                {row.printed && (
                                  <RadioGroup
                                    value={values.selectedDesign}
                                    onValueChange={(val) => setValues({ ...values, selectedDesign: val })}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value={`printed-${row.printed}`} id={`printed-${row.printed}`} />
                                      <Label htmlFor={`printed-${row.printed}`} className="text-white">{row.printed}</Label>
                                    </div>
                                  </RadioGroup>
                                )}
                              </TableCell>
                              <TableCell className="text-white">
                                {row.chrome && (
                                  <RadioGroup
                                    value={values.selectedDesign}
                                    onValueChange={(val) => setValues({ ...values, selectedDesign: val })}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value={`chrome-${row.chrome}`} id={`chrome-${row.chrome}`} />
                                      <Label htmlFor={`chrome-${row.chrome}`} className="text-white">{row.chrome}</Label>
                                    </div>
                                  </RadioGroup>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="space-y-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            {values.borderColor || "Select Border Color"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => setValues({ ...values, borderColor: "no-border" })}>
                            No border
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, borderColor: "chrome-gold" })}>
                            Chrome Gold
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, borderColor: "chrome-silver" })}>
                            Chrome Silver
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setValues({ ...values, borderColor: "gloss-black" })}>
                            Gloss Black
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {values.borderColor && values.borderColor !== "no-border" && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full">
                              {values.borderWidth || "Select Border Width"}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setValues({ ...values, borderWidth: "4in" })}>
                              4 in
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setValues({ ...values, borderWidth: "6in" })}>
                              6 in
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button 
            type="submit"
            className="w-full bg-maple-red hover:bg-maple-gold transition-colors duration-300"
          >
            Calculate Prices
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="Market Price ($)"
              value={marketPrice}
              readOnly
              className="bg-gray-700 text-white"
            />
            <Input
              placeholder="Vendor Price ($)"
              value={vendorPrice}
              readOnly
              className="bg-gray-700 text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
