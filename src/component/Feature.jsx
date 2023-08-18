import React from 'react';
import FeatureBox from './FeatureBox';
import featurimage from '../images/feature_1.png';
import featurimage1 from '../images/feature_2.png';
import featurimage2 from '../images/feature_3.png';

function Feature(){
    return(
        <div id='featurs'>
            <div className='a-container'>
                <FeatureBox image={featurimage} title='Privacy Increase' />
                <FeatureBox image={featurimage1} title='4 Different Devices' />
                <FeatureBox image={featurimage2} title='Edit Whatsapp Text' />

            </div>

        </div>
    )
}

export default Feature;