/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'getemployeedetails',
	templateUrl: 'getemployeedetails.component.html'
})
export class GetemployeedetailsComponent implements OnInit
{
	getemployeedetailsModel:GetemployeedetailsModel;
	
	constructor(private http: HttpClient)
	{
		this.getemployeedetailsModel=new GetemployeedetailsModel();
	}
	click_id(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/emp/findbyid'+'/'+this.getemployeedetailsModel.id).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.idBindResponse_1(response);
		});
	}
	idBindResponse_1(response: any)
	{
		this.getemployeedetailsModel.firstName=response.firstName;
		this.getemployeedetailsModel.lastName=response.lastName;
		this.getemployeedetailsModel.phone=response.phone;
		this.getemployeedetailsModel.email=response.email;
		
	} 
	ngOnInit()
	{
	}
}

export class GetemployeedetailsModel
{
	 id: string; 
	 firstName: string; 
	 lastName: string; 
	 phone: number; 
	 email: string; 
}
