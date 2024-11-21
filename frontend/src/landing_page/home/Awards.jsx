import React from 'react'

function Awards() {
    return ( 
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-6 p-2">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6  mt-5 ">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2 million+ clients contribute to over 15% of all retail order volumes in India by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                            <li><p>Futures and Options</p></li>
                            <li> <p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                        </div>
                        <div className="col-6">
                               <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Gold</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="pressLogos" style={{width : "90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;