import React from 'react'
import './LogSignSecCard.css'
import chart1 from '../../assets/chart1.jpg'
import chart2 from '../../assets/chart2.JPG'
import coins from '../../assets/coins.jpg'
import nft_l_s from '../../assets/nft_l_s.jpg'
import barcode from '../../assets/barcode.jpg'
function LogSignSecCard() {
    return (
        <div className='log_sing_sec_card_container' >
            <div className='log_sing_sec_car_com'>
                <img className='com_one' src={chart1} alt="" />
                <img className='com_two' src={chart2} alt="" />
                <img className='com_three' src={coins} alt="" />
                <img className='com_four' src={nft_l_s} alt="" />
                <img className='com_five' src={barcode} alt="" />
            </div>
            <h3 className='trade_title'>Trade</h3>
            <p className='white_text_under_trade'> anything anywhere with Whale.io!</p>
        </div>
    )
}

export default LogSignSecCard