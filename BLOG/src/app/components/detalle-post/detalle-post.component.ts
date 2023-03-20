import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent {

  post: Post | null

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private route: Router
  ) {
    this.post = null
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.post = this.postService.getById(parseInt(data['postId']))
    })
    this.post = this.postService.getById(this.post?.id!)
  }
}
