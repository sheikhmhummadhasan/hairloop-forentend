import BrowseDetailPageClient from '@/Components/BrowseDetailPageClient';
import PaymentSuccessModal from '@/Components/PaymentSuccessModal';
import StripePayment from '@/Components/StripePayment';
import React from 'react';

const BrowseDetaliPage = () => {
    return (
        <div>
            {/* <BrowseDetailPageClient /> */}
            {/* <StripePayment /> */}
            <PaymentSuccessModal />
        </div>
    );
};

export default BrowseDetaliPage;