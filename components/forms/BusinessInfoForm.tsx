"use client";
import useInvoiceStore from "@/lib/store";
import { Building2, Hash, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BusinessInfoForm() {
  const business = useInvoiceStore((state) => state.business);
  const setBusiness = useInvoiceStore((state) => state.setBusiness);
  const invoiceNumber = useInvoiceStore((state) => state.invoiceNumber);
  const setInvoiceNumber = useInvoiceStore((state) => state.setInvoiceNumber);
  const invoiceDate = useInvoiceStore((state) => state.invoiceDate);
  const setInvoiceDate = useInvoiceStore((state) => state.setInvoiceDate);

  return (
    <div>
      <h2 className="modern-header">
        <Building2 className="w-6 h-6" />
        Business Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="sm:col-span-2 lg:col-span-1">
          <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
            Company Name
          </Label>
          <Input
            id="companyName"
            type="text"
            value={business.name}
            onChange={(e) => setBusiness({ name: e.target.value })}
            placeholder="SHREE GANPATI SANITARY"
            className="modern-input"
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <Label htmlFor="gstin" className="text-sm font-medium text-gray-700">
            GSTIN/UIN
          </Label>
          <Input
            id="gstin"
            type="text"
            value={business.gstin}
            onChange={(e) => setBusiness({ gstin: e.target.value })}
            maxLength={15}
            placeholder="08CGPPB7908K1Z5"
            className="modern-input"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="address" className="text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 inline mr-1" />
            Address
          </Label>
          <textarea
            className="modern-input"
            id="address"
            rows={3}
            value={business.address}
            onChange={(e) => setBusiness({ address: e.target.value })}
            placeholder="Nayi Aabadi Nagri, Raipur Road, Nimbi, Teh. Raipur, Bhilwara, Rajasthan, 311803"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 inline mr-1" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={business.email}
            onChange={(e) => setBusiness({ email: e.target.value })}
            placeholder="sanitary@gmail.com"
            className="modern-input"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone
          </Label>
          <Input
            id="phone"
            type="text"
            value={business.phone}
            onChange={(e) => setBusiness({ phone: e.target.value })}
            placeholder="98********"
            className="modern-input"
          />
        </div>
        <div>
          <Label htmlFor="invoiceNumber" className="text-sm font-medium text-gray-700">
            <Hash className="w-4 h-4 inline mr-1" />
            Invoice Number
          </Label>
          <Input
            id="invoiceNumber"
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="183"
            className="modern-input"
          />
        </div>
        <div>
          <Label htmlFor="invoiceDate" className="text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 inline mr-1" />
            Invoice Date
          </Label>
          <div className="relative">
            <Input
              className="modern-input"
              id="invoiceDate"
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
