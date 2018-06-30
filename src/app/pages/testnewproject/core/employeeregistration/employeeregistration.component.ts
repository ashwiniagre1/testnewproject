/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'employeeregistration',
	templateUrl: 'employeeregistration.component.html'
})
export class EmployeeregistrationComponent implements OnInit
{
	employeeregistrationModel:EmployeeregistrationModel;
	radiogroupData:any;
	
	constructor(private http: HttpClient)
	{
		this.employeeregistrationModel=new EmployeeregistrationModel();
	this.radiogroupData={"data":[{"genderId":"1","genderName":"Female"},{"genderId":"2","genderName":"Male"}]};
	}
	click_counrtyid(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountry'+'/'+this.employeeregistrationModel.id).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.counrtyidBindResponse_1(response);
		});
	}
	counrtyidBindResponse_1(response: any)
	{
		this.employeeregistrationModel.stateId=response.stateName+response.stateId;
		
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountry'+'/'+this.employeeregistrationModel.counrtyid).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.counrtyidBindResponse_2(response);
		});
	}
	counrtyidBindResponse_2(response: any)
	{
		this.employeeregistrationModel.stateId=response.stateId+response.stateName;
		
	} 
	click_save(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.employeeregistrationModel.id,
			firstName:this.employeeregistrationModel.firstName,
			lastName:this.employeeregistrationModel.lastName,
			genderId:this.employeeregistrationModel.genderId,
			age:this.employeeregistrationModel.age,
			dob:this.employeeregistrationModel.dob,
			phone:this.employeeregistrationModel.phone,
			email:this.employeeregistrationModel.email,
			departmentId:this.employeeregistrationModel.departmentId
		 };
		this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.saveBindResponse_1(response);
		});
	}
	saveBindResponse_1(response: any)
	{
		
	} 
	ngOnInit()
	{
	}
}

export class EmployeeregistrationModel
{
	 id: string; 
	 firstName: string; 
	 lastName: string; 
	 genderId: string; 
	 age: number; 
	 dob: string; 
	 phone: string; 
	 email: string; 
	 departmentId: string; 
	 counrtyid: string; 
	 stateId: string; 
}
