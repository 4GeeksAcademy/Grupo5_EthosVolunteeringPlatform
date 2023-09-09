import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { MainBanner } from "../component/mainBanner";
import { ImpactCounter } from "../component/impactCounter";
import {AuxiliarPurpleOne} from "../component/auxiliarPurpleOne";
import { CausasCards } from "../component/causasCards";
import { CampaignBanner } from "../component/campaignBanner";
import { AuxiliarWhiteTwo } from "../component/auxiliarWhiteTwo";
import { VolunteersBanner } from "../component/volunteersBanner";
import { AuxiliarWhiteOne } from "../component/auxiliarWhiteOne";
import { PartnersBanner } from "../component/partnersBanner";
import { Sponsors } from "../component/sponsors";
import { FatFooter } from "../component/fatFooter";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<MainBanner/>
			
			<div className='mt-4 mb-5'>
			<ImpactCounter/>
			</div>

			<div className='mt-4 mb-5'>
			<AuxiliarPurpleOne/>
			</div>

			<div className='mt-4 mb-5'>
			<CausasCards/>
			</div>

			<div className='mt-4 mb-5'>
			<CampaignBanner/>
			</div>

			<div className='mt-4 mb-5'>
			<AuxiliarWhiteTwo/>
			</div>
			
			<div className='mt-5 mb-5'>
			<VolunteersBanner/>
			</div>

			<div className='mt-4'>
			<AuxiliarWhiteOne/>
			</div>

			<div className='mt-4 mb-5'>
			<PartnersBanner/>
			</div>

			<div className='mt-4'>
			<Sponsors/>
			</div>


			<FatFooter/>
			<a href="https://api.whatsapp.com/" className="float" target="_blank">
				<i className="fab fa-whatsapp my-float"></i>
			</a>

		</div>
	);
};
