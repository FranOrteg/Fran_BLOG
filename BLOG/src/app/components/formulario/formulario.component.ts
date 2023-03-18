import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  arrNuevoPost: Post[]

  constructor(
    private postService: PostService,
    private route: Router
  ) {
    this.arrNuevoPost = []
  }

  onSubmit(formValues: any) {
    this.arrNuevoPost = this.postService.create(formValues)
    console.log(formValues)
    this.route.navigate(['/posts'])
  }

}
