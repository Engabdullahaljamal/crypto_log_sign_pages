import React from 'react'
import './BarcodeContainer.css'
import QRCode from 'react-qr-code';
import qrImage from '../../assets/crypto_logo.jpeg'
import { BiSolidLock } from "react-icons/bi";
import { Link } from 'react-router-dom';

const website = 'https://www.figma.com/file/bDp2vHluWFi9ILo5tCadqy/crypto-project?type=design&node-id=1-7618&mode=design&t=8AnKp7PrUlSRLh1F-4'
function BarcodeContainer() {
    return (
        <div className='log_sing_sec_card_container'>
            <div className='qr_logo_con'>
                <QRCode className='qr_logo' value={website} logoImage={qrImage} logoWidth={40} logoHeight={50} bgColor="transparent" fgColor="#FFFFFF" size={260}
                />
                <img className='qrImage' src={qrImage} alt="" />
            </div>
            <h3 className='log_with_qr'>Login With QR code</h3>
            <p className='white_p'>Scan QR code with <span className='green_text'>app</span></p>
            <div className='http_link'>
                <div className='BiSolidLock_background '>
                    <BiSolidLock className='BiSolidLock' />
                </div>
                <a href="https://www.figma.com/file/bDp2vHluWFi9ILo5tCadqy/crypto-project?type=design&node-id=1-8010&mode=design&t=EFasmgSI688mgW7P-4">
                    <span className='green_text_http'>https:</span>//www.cryptowhale.com
                </a>

            </div>
            <p className='whale_p'>Whale.io, Trade anything anywhere with Whale.io!</p>
        </div>
    )
}

export default BarcodeContainer