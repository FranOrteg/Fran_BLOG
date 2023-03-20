import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[]

  constructor() {
    const postguardados = localStorage.getItem('posts');
    if (postguardados) {
      this.posts = JSON.parse(postguardados);
    } else {
      this.posts = POSTS;
    }
  }

  getAll(): Post[] {
    return this.posts
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
    localStorage.setItem('posts', JSON.stringify(this.posts))
    return POSTS
  }

  getById(postId: number): Post | null {
    for (let post of this.posts) {
      if (post.id === postId) {
        console.log(post)
        return post
      }
    }
    return null
  }

}
