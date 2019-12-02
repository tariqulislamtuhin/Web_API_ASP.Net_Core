import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      // this.loadUser();
      this.user = data.user;
      this.titleService.setTitle(this.user.knownAs);
    });
    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '500px',
    //     imagePercent: 100,
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //     preview: true
    //   }
    // ];
    // this.galleryImages = this.getImages();
  }


  // getImages() {
  //    const imageUrls = [];
  //    for (let i = 0; i < this.user.photos.length; i++) {
  //      imageUrls.push({
  //        small: this.user.photos[i].url,
  //        medium: this.user.photos[i].url,
  //        big: this.user.photos[i].url,
  //        description: this.user.photos[i].description
  //      });
  //    }
  //   return imageUrls;
  // }

  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = this.user;
  //   }, error => {
  //     this.alertify.error(error);
  //   });

  //   }

}
