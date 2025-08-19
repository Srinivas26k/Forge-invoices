"use client";
import React from "react";
import Header from "@/components/layout/Header";
import BusinessInfoForm from "@/components/forms/BusinessInfoForm";
import ClientInfoForm from "@/components/forms/ClientInfoForm";
import LineItemsTable from "@/components/forms/LineItemsTable";
import InvoiceSummary from "@/components/forms/InvoiceSummary";
import InvoicePreviewPanel from "@/components/invoice/InvoicePreviewPanel";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Professional Invoice Generator
            </h1>
            <p className="text-blue-100 text-sm sm:text-base">
              Create beautiful, GST-compliant invoices in minutes
            </p>
          </div>
        </div>
      </div>

      <main className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4 lg:px-8">
          {/* Form Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="modern-card">
              <BusinessInfoForm />
            </div>
            <div className="modern-card">
              <ClientInfoForm />
            </div>
            <div className="modern-card">
              <LineItemsTable />
            </div>
            <div className="modern-card">
              <InvoiceSummary />
            </div>
          </div>

          {/* Preview Section */}
          <div className="order-first xl:order-last">
            <div className="sticky top-24">
              <div className="modern-card">
                <InvoicePreviewPanel />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 BillForge. Crafted with ❤️ for modern businesses.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
