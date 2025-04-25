
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
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Width"
                        className="bg-gray-700 text-white"
                        type="number"
                      />
                      <Input
                        placeholder="Length"
                        className="bg-gray-700 text-white"
                        type="number"
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
                          <DropdownMenuItem>Less than 12in (1ft)</DropdownMenuItem>
                          <DropdownMenuItem>More than 12in, less than 16in</DropdownMenuItem>
                          <DropdownMenuItem>More than 16in, less than 24in</DropdownMenuItem>
                          <DropdownMenuItem>More than 24in (2ft)</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            Select Wrap
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>White</DropdownMenuItem>
                          <DropdownMenuItem>Matte Black</DropdownMenuItem>
                          <DropdownMenuItem>Full Print</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </>
                )}
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
};
