import React from 'react';

import { StepBack } from 'lucide-react';

const NotAvailableCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <StepBack />
      <span>Drop Task here</span>
    </div>
  );
};

export default NotAvailableCard;
