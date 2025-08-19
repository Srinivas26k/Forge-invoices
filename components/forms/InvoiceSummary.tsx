"use client";
import useInvoiceStore from "@/lib/store";
import { ToWords } from "to-words";
import { Calculator, DollarSign, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const toWords = new ToWords({
  localeCode: "en-IN",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      name: "Rupee",
      plural: "Rupees",
      symbol: "₹",
      fractionalUnit: {
        name: "Paisa",
        plural: "Paise",
        symbol: "",
      },
    },
  },
});

export default function InvoiceSummary() {
  const totals = useInvoiceStore((state) => state.totals);
  const totalInWords = toWords.convert(totals.total).replace(/rupees/gi, "Rupees").replace(/paisa/gi, "Paise");

  return (
    <div>
      <h2 className="modern-header">
        <Calculator className="w-6 h-6" />
        Invoice Summary
      </h2>
      
      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Receipt className="w-5 h-5 text-blue-600" />
            Amount Breakdown
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Subtotal:</span>
            <span className="font-semibold text-gray-900">
              ₹{totals.subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          {/* Tax Section */}
          <div className="space-y-3">
            {totals.igst > 0 ? (
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">IGST</Badge>
                  <span className="text-sm text-gray-700">Integrated GST:</span>
                </div>
                <span className="font-medium text-blue-700">
                  ₹{totals.igst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">CGST</Badge>
                    <span className="text-sm text-gray-700">Central GST:</span>
                  </div>
                  <span className="font-medium text-green-700">
                    ₹{totals.cgst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">SGST</Badge>
                    <span className="text-sm text-gray-700">State GST:</span>
                  </div>
                  <span className="font-medium text-green-700">
                    ₹{totals.sgst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {/* Round Off */}
          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
            <span className="text-sm text-gray-700">Round Off:</span>
            <span className="font-medium text-yellow-700">
              ₹{totals.round_off.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          <Separator className="my-4" />
          
          {/* Net Total */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span className="font-bold text-lg">Net Total:</span>
            </div>
            <span className="font-bold text-xl">
              ₹{totals.total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          {/* Amount in Words */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Amount (in words):
            </label>
            <div className="p-3 bg-white rounded border text-sm text-gray-800 font-medium leading-relaxed">
              {totalInWords}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
