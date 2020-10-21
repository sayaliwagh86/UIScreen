import React from 'react';
import DBFaq from './DBFaqs/DBFaq';
import DBAccountHistory from './DBAccountHistory/index';
import DBVideos from './DBVideos/index';
import './UIDashboard.css'
import DBCoverageAndBenefits from './DBCoverageAndBenefits/index'
import DBCurrentClaimStatus from './DBCurrentClaimStatus/index'


export default function UIDashboard() {
    return (
        
            <div className="row">
                    <DBFaq/>
                    <DBVideos/>

            <div className="row third-container">
              <div className="col-sm-6 col-md-6">
                 <DBCoverageAndBenefits/>
                </div>
                <div className="col-sm-6 col-md-6">
                <DBCurrentClaimStatus/>
                </div>
            </div>
        </div>
    )
}
