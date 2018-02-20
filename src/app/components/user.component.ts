import { Component } from '@angular/core';
import { PostsService} from '../services/posts.service'
@Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html' ,
        providers: [PostsService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
 


  constructor(private postsService: PostsService){
    this.name = 'Sonja'; 
    this.email = 'sonja@fi.fi';
    this.address = {
      street: 'Katu 10',
      city: 'Vantaa',
      state: 'Uusimaa'
  }
  this.hobbies = ['Music', 'Books', 'Coding'];
  this.showHobbies = false;

  this.postsService.getPosts().subscribe(posts =>{
      this.posts = posts;
  });
}
    toggleHobbies(){
        
        if(this.showHobbies == true){
            this.showHobbies = false;
            console.log('piilotettu');
        }else{
        this.showHobbies= true;
        console.log('näytetään');
        }    
    }
    addHobby(hobby: string){
        this.hobbies.push(hobby);

    }
    deleteHobby(i: number){
        this.hobbies.splice(i, 1);
    }
}
interface address{
        street: string;
        city: string;
        state: string;

}
interface Post{
        id: number;
        title: string;
        body: string;

}