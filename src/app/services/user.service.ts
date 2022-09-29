
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string="http://localhost:3000/users";
  
  constructor(private httpClient : HttpClient) {}
  signup(obj, img:File){
   let  formData = new FormData();
    formData.append('firstName',obj.firstName);
    formData.append('lastName',obj.lastName);
    formData.append('email', obj.email);
    formData.append('password',obj.password);
    formData.append('img',img);
    
      return this.httpClient.post<{msg:string}>(`${this.userUrl}/signup`,formData);}
  login (objLogin){
      return this.httpClient.post<{msg:string, user:any}>(`${this.userUrl}/login`,objLogin);}
    
    getAllUsers(){
      return this.httpClient.get<{users:any}>(this.userUrl);
    }
    getUserById(id){
      return this.httpClient.get(`${this.userUrl}/${id}`);
    }
    updateUser(obj){
      return this.httpClient.put(`${this.userUrl}/${obj.id}`,obj)
    }
    deleteUser(id){
      return this.httpClient.delete<{msg:string}>(`${this.userUrl}/${id}`);
    }
  }

