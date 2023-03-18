import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
    const postguardados = localStorage.getItem('posts');
    if (postguardados) {
      POSTS.push(...JSON.parse(postguardados));
    }
  }


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

  create(pPost: any): Post[] {
    POSTS.push(pPost)
    console.log(pPost);
    localStorage.setItem('posts', JSON.stringify(POSTS))
    return POSTS
  }
}
