"use client";

import React, { useState, ChangeEvent } from 'react';

const LogoUpload: React.FC<{ onLogoUpload: (logo: string) => void }> = ({ onLogoUpload }) => {
  const [logo, setLogo] = useState<string | null>(null);

  const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogo(result);
        onLogoUpload(result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('logo-upload-input') as HTMLInputElement;
    fileInput.click();
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
      <button type="button" onClick={handleButtonClick}>
        Upload Logo
      </button>
      {logo && <img src={logo} alt="Logo" className="mt-2 h-16" />}
    </div>
  );
};

export default LogoUpload;
