import { COOKIE_SAVED_CONTENTS, type Post } from "~/types";
import { useStorage } from '@vueuse/core'

export function usePosts() {
    const nuxtApp = useNuxtApp();


    const posts = useStorage<Post[]>(COOKIE_SAVED_CONTENTS, []);

    
    const save = (post: Post) => {
        posts.value.push(post);
    }
    
    const find = (): Post[] => {
        return posts.value;
    }
    
    const remove = (post: Post) => {
        const index = posts.value.findIndex((val) => val.title === post.title);
        if (index != -1) {
            posts.value.splice(index, 1);
        }
    }
    
    const findOne = (post: Post) => {
        return posts.value.find((item) => item.title === post.title);
    }


    return {
        save, 
        find, 
        remove, 
        findOne, 
        posts
    }

}