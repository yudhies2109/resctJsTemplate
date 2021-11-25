import React from 'react'
import './footer.css'
import logo from '../assets/img/logo.png'
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineGooglePlus, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { ImClock } from 'react-icons/im';

export default function footer() {
	return (
		<>
		<div className="footer">
			<div className="col">
				<h1>
					<img src={logo} width="200" alt="logo" />
				</h1>
				<p>A monthly digest of the latest news and venen is urna resources. our clinic was created to ma your smile beautiful, healthy and snow-white. venenatis urna resources.</p>
				<div className="sosmed">
					<div className="col">
						<div className="icon">
							<FaFacebookF />
						</div>
					</div>
					<div className="col">
						<div className="icon">
							<AiOutlineGooglePlus />
						</div>
					</div>
					<div className="col">
						<div className="icon">
							<AiFillLinkedin />
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<h1>Company Service</h1>
				<p>- Maritime Transport</p>
				<p>- Typography Air Freight</p>
				<p>- Track Your Shipment</p>
				<p>- Request a Freight</p>
				<p>- Request a Freight</p>
				<p>- Vehicle fleet</p>
				<p>- Vehicle service</p>
			</div>
			<div className="col">
				<h1>Partnership</h1>
				<p>- Main truck</p>
				<p>- Short trucks</p>
				<p>- Big trailer truck</p>
				<p>- Main load truck</p>
				<p>- Blog masonry</p>
				<p>- Referral Partners</p>
				<p>- Space Services</p>
			</div>
			<div className="col">
				<h1>Address Us</h1>
				<p>Lorem ipsum dolor sit amet, consetur acing elit, sed do eiusmod ligal</p>
				<div className="info">
					<span className="icon-info"><MdLocationOn /></span><span className="data-info">378 FA Tower, William SBl 2123, IL, US</span>
				</div>
				<div className="info">
					<span className="icon-info"><FaPhoneAlt /></span><span className="data-info">(+990) 698 598 631</span>
				</div>
				<div className="info">
					<span className="icon-info"><AiFillMail /></span><span className="data-info">demo@example.com</span>
				</div>
				<div className="info">
					<span className="icon-info"><ImClock /></span><span className="data-info">Opening Hours: 9:00 - 6:00</span>
				</div>
			</div>
		</div>
		<div className="second-footer">
			<div className="col-1">
				<p>Copyright © poket all rights reserved.</p>
			</div>
			<div className="col-2">
				<a href="#">Contact</a>
				<a href="#">Service</a>
			</div>
		</div>
		</>
	)
}