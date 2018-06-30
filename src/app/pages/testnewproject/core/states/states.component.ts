/**
 * Created by: Ashwini Agre
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'states',
	templateUrl: 'states.component.html'
})
export class StatesComponent implements OnInit
{
	statesModel:StatesModel;
	
	constructor(private http: HttpClient)
	{
		this.statesModel=new StatesModel();
	}
	click_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountry'+'/'+this.statesModel.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.statesModel.stateId=response.stateId+response.stateName;
		
	} 
	ngOnInit()
	{
	}
}

export class StatesModel
{
	 countryId: string; 
	 stateId: string; 
}
