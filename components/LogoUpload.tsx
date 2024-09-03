"use client";

import React, { useState, ChangeEvent } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

const LogoUpload: React.FC<{ onLogoUpload: (logo: string) => void }> = ({ onLogoUpload }) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [showUploadButton, setShowUploadButton] = useState(true);

  const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogo(result);
        onLogoUpload(result);
        setShowUploadButton(false);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('logo-upload-input') as HTMLInputElement;
    fileInput.click();
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setShowUploadButton(true);
    onLogoUpload('');
  };

  return (
    <div className="mb-4">
      <input
        id="logo-upload-input"
        type="file"
        accept="image/*"
        onChange={handleLogoChange}
        style={{ display: 'none' }}
      />
      {showUploadButton ? (
        <Button type="button" onClick={handleButtonClick}>
          Upload Logo
        </Button>
      ) : (
        <div className="flex items-center">
          <button onClick={handleRemoveLogo} className="ml-2">
            <TrashIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoUpload;
