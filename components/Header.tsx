import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import LogoUpload from './LogoUpload';

const Header: React.FC<{ logo: string | null, setLogo: (logo: string | null) => void }> = ({ logo, setLogo }) => {
  const [invoiceText, setInvoiceText] = useState('INVOICE');

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="flex items-center">
        <LogoUpload onLogoUpload={setLogo} />
        {logo && <img src={logo} alt="Company Logo" className="h-16 ml-2" />}
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

export default Header;
