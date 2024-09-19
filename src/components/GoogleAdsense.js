import React from 'react';
import { Adsense } from '@ctrl/react-adsense';

const GoogleAdsense = () => {
    return (
        <>
            <Adsense
                client="ca-pub-9057186595319170"
                slot="7259870550"
                style={{ display: 'block' }}
                layout="in-article"
                format="fluid"
            />
        </>
    );
}

export default GoogleAdsense;