"use client";

import useInvoiceStore from "@/lib/store";
import { Users, Building, Mail, Phone, MapPin, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ClientInfoForm() {
  const client = useInvoiceStore((state) => state.client);
  const setClient = useInvoiceStore((state) => state.setClient);

  return (
    <div>
      <h2 className="modern-header">
        <Users className="w-6 h-6" />
        Client Information
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="clientName" className="text-sm font-medium text-gray-700">
            Client Name
          </Label>
          <Input
            id="clientName"
            type="text"
            value={client.name}
            onChange={(e) => setClient({ ...client, name: e.target.value })}
            placeholder="Enter client name"
            className="modern-input"
          />
        </div>

        <div>
          <Label htmlFor="clientCompany" className="text-sm font-medium text-gray-700">
            <Building className="w-4 h-4 inline mr-1" />
            Company
          </Label>
          <Input
            id="clientCompany"
            type="text"
            value={client.company}
            onChange={(e) => setClient({ ...client, company: e.target.value })}
            placeholder="Enter company name"
            className="modern-input"
          />
        </div>

        <div>
          <Label htmlFor="clientEmail" className="text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 inline mr-1" />
            Email
          </Label>
          <Input
            id="clientEmail"
            type="email"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
            placeholder="Enter email address"
            className="modern-input"
          />
        </div>

        <div>
          <Label htmlFor="clientPhone" className="text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone
          </Label>
          <Input
            id="clientPhone"
            type="tel"
            value={client.phone}
            onChange={(e) => setClient({ ...client, phone: e.target.value })}
            placeholder="Enter phone number"
            className="modern-input"
          />
        </div>

        <div>
          <Label htmlFor="clientAddress" className="text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 inline mr-1" />
            Address
          </Label>
          <textarea
            className="modern-input"
            id="clientAddress"
            rows={3}
            value={client.address}
            onChange={(e) => setClient({ ...client, address: e.target.value })}
            placeholder="Enter client address"
          />
        </div>

        <div>
          <Label htmlFor="clientGstin" className="text-sm font-medium text-gray-700">
            <Hash className="w-4 h-4 inline mr-1" />
            GSTIN
          </Label>
          <Input
            id="clientGstin"
            type="text"
            value={client.gstin}
            onChange={(e) => setClient({ ...client, gstin: e.target.value })}
            placeholder="Enter GSTIN (if applicable)"
            className="modern-input"
          />
        </div>
      </div>
    </div>
  );
}
