import React from 'react'
import DBCoverageAndBenefits from './DBCoverageAndBenefits'
import DBCurrentClaimStatus from './DBCurrentClaimStatus'


export default function UIDashboard() {
    return (
        <div>
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
