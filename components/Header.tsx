import React from 'react';
import { Input } from '@/components/ui/input';
import LogoUpload from './LogoUpload';

const Header: React.FC<{ logo: string | null, setLogo: (logo: string | null) => void }> = ({ logo, setLogo }) => (
  <div className="flex items-center">
    <div className="ml-auto space-x-2">
      <LogoUpload onLogoUpload={setLogo} />
      {logo && <img src={logo} alt="Company Logo" className="h-16 mb-4 mx-auto" />}
    </div>
  </div>
);

export default Header;
