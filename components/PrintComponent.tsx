import React, { forwardRef } from 'react';

const PrintComponent = forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => (
  <div ref={ref} className="invoice-builder p-6 rounded-lg shadow-md" style={{ width: '210mm', height: '297mm' }}>
    {props.children}
  </div>
));

export default PrintComponent;
