import React from 'react'
import './bottom.css'
const Bottom = () => {
  return (
    <>
    <div className="bottom-container">
        <div className="d-flex flex-row">
            <div className="left">
                <div className="heading-1">
                    <h4>Weekly Planing</h4>
                    <img src="./images/arrow.png" alt="down"  className='arrow'/>
                </div>
                <div className="title">
                    <div className="title-1">
                        <div className="square">
                            <p className="square-title">SB</p>
                        </div>
                        <div className="d-flex flex-column dataset">
                            <h6 className='name'>Sweety Basak</h6>
                            <p className='designation'>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="title-1">
                        <div className="square">
                            <p className="square-title">KS</p>
                        </div>
                        <div className="d-flex flex-column dataset">
                            <h6 className='name'>Kumash Shah</h6>
                            <p className='designation'>Senior UI Developer</p>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="title-1">
                        <div className="square">
                            <p className="square-title">VK</p>
                        </div>
                        <div className="d-flex flex-column dataset">
                            <h6 className='name'>Vivek Kumar</h6>
                            <p className='designation'>Senior UI Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="vertical">
                    <div className="vertical-1">
                        <div className="vertical-1-left">
                            <p className='v-1 para'>Client Meeting</p>
                            <p className="v-1-para">10:00-13:00</p>
                        </div>
                        <div className="verical-1-right">
                            <div className="right-1"><p className="v-right-para">MR</p></div>
                            <div className="right-1"><p className="v-right-para">NS</p></div>
                            <div className="right-1"><p className="v-right-para">PG</p></div>
                        </div>


                    </div>
                    <div className="vertical-2">
                        <div className="left-vertical">
                            <p className="v-left-para">UX Meeting</p>
                            <p className="v-left-para2">10:00-13:00 </p>
                        </div>
                        <div className="right-vertical">
                            <p className="v-right-paraa">Developer Meeting</p>
                            <p className="v-right-paraa2">10:00-13:00 </p>
                        </div>
                    </div>
                    <div className="vertical-3">
                        <div className="vertical-bar">
                            <p className="vertical-bar-holiday">Holiday</p>
                            <p className="vertical-bar-day">All Day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bottom