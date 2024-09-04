import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import LogoUpload from '../LogoUpload';

interface HeaderProps {
  logo: string | null;
  setLogo: (logo: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({ logo, setLogo }) => {
  const [companyText, setCompanyText] = useState('Le Siam Internetwork Co.,Ltd');
  const [invoiceText, setInvoiceText] = useState('INVOICE');

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="flex items-center">
        <div className="flex-1">
          <div className="mt-auto p-8">
            <LogoUpload onLogoUpload={setLogo} />
            {logo && <img src={logo} alt="Company Logo" className="w-[200px] h-[auto] ml-5" />}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Input 
          type="text" 
          value={companyText} 
          onChange={(e) => setCompanyText(e.target.value)} 
          className="text-2xl font-bold text-right mb-2 bg-transparent" 
        />
        <Input 
          type="text" 
          value={invoiceText} 
          onChange={(e) => setInvoiceText(e.target.value)} 
          className="text-5xl font-bold text-right bg-transparent" 
        />
      </div>
    </div>
  );
};

export default function HeaderComponent(props: HeaderProps) {
  return <Header {...props} />;
}
