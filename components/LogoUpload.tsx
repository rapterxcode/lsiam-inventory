"use client";

import React, { useState, ChangeEvent, DragEvent } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';


const LogoUpload: React.FC<{ onLogoUpload: (logo: string) => void }> = ({ onLogoUpload }) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

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

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogo(result);
        onLogoUpload(result);
      };
      reader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    onLogoUpload('');
  };

  const handleClick = () => {
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
      {logo ? (
        <div className="flex items-center">
          <Button onClick={handleRemoveLogo} className="ml-2">
            <TrashIcon />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed p-4 ${dragging ? 'border-blue-500' : 'border-gray-300'}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
        >
          <h6>Drag and drop a logo here, or click to select a file</h6>
        </div>
      )}
    </div>
  );
};

export default LogoUpload;
