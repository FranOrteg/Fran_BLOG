import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }


  getAll(): Post[] {
    return POSTS
  }

  getByCategoria(pCategoria: string): Post[] {
    const listaCategoria = [];

    for (let posts of POSTS) {
      if (posts.categoria === pCategoria) {
        listaCategoria.push(posts)
      }
    }
    return listaCategoria
  }

}
