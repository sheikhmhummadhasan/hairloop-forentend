export const instant = false;
import PricingSection from '@/Components/PricingSection';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const PriceIng = async() => {
  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    if(!session){
      redirect(`/signin?redirect=/pricing/`)
    }

  return (
    <div>
      <PricingSection />
    </div>
  );
};

export default PriceIng;