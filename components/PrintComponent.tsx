import React, { forwardRef } from 'react';
import "../app/globals.css";
const PrintComponent = forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => (
  <div
    ref={ref}
    className="invoice-builder p-6 rounded-lg shadow-md bg-slate-300 max-h-screen overflow-y-auto"
    style={{
      width: '210mm',
      height: '297mm'
    }}
  >
    {props.children}
  </div>
));

export default PrintComponent;
