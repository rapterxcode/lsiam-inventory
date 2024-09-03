import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import LogoUpload from './LogoUpload';

interface HeaderProps {
  logo: string | null;
  setLogo: (logo: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({ logo, setLogo }) => {
  const [invoiceText, setInvoiceText] = useState('INVOICE');

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="flex items-center">
      <div className="flex-1">
      <div className="mt-auto p-8">
        <LogoUpload onLogoUpload={setLogo} />
        {logo && <img src={logo} alt="Company Logo" className="h-16 ml-2" />}
        </div></div>
      </div>
      <div className="flex justify-end">
        <Input 
          type="text" 
          value={invoiceText} 
          onChange={(e) => setInvoiceText(e.target.value)} 
          className="text-4xl font-bold" 
        />
      </div>
    </div>
  );
};

export default function HeaderComponent(props: HeaderProps) {
  return <Header {...props} />;
}
