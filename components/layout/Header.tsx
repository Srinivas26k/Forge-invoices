import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  MessageCircle, 
  Mail, 
  Printer, 
  Download, 
  Share2,
  Sparkles
} from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="BillForge Logo" 
                width={40} 
                height={40} 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl shadow-sm"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                BillForge
              </span>
              <Badge variant="secondary" className="text-xs font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                Pro
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden md:flex modern-btn modern-btn-secondary"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            
            <Button 
              variant="outline" 
              size="sm"
              className="modern-btn modern-btn-secondary"
            >
              <MessageCircle className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="modern-btn modern-btn-secondary"
            >
              <Mail className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Email</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="modern-btn modern-btn-secondary"
            >
              <Download className="w-4 h-4 sm:mr-2" />
              <span className="hidden lg:inline">Download</span>
            </Button>
            
            <Button 
              size="sm"
              className="modern-btn modern-btn-primary ml-2"
            >
              <Printer className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Print</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header