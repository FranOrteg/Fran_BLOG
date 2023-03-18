import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup

  constructor(
    private postService: PostService,
    private route: Router
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  onSubmit() {
    if (!this.formulario.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes que rellenar todos los campos!',
      })
    } else {
      this.postService.create(this.formulario.value)
      console.log(this.formulario.value)
      this.route.navigate(['/posts'])
    }

  }
}
