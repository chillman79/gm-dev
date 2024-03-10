

export const CONTENT_LINKS = [
    {
        name: 'steam', 
        icon: 'bxl:steam',
        tooltip: 'Steam'
    },
    {
        name: 'itch' ,
        icon: 'fa-brands:itch-io',
        tooltip: 'Itch.io'
    },
    {
        name: 'github',
        icon: 'bxl:github',
        tooltip: 'Github'
    },
    {
        name: 'epic',
        icon: 'simple-icons:epicgames',
        tooltip: 'Epic Games Store'
    },
    {
        name: 'documentation', 
        icon: 'ion:document',
        tooltip: 'Docs'
    },
    {
        name: 'source', 
        icon: 'tabler:source-code', 
        tooltip: 'Source'
    },
    {
        name: 'web', 
        icon: 'mdi:web', 
        tooltip: 'Web'
    }
]


export const COOKIE_SAVED_CONTENTS = "SAVED_CONTENTS"


export interface Post {
    title: string;
    description?: string;
    author?: string;
    steam?: string;
    itch?: string;
    github?: string;
    epic?: string;
    documentation: string;
    cover?: string 
    coverPosition?: 'up' | 'left'
    tags?: string;
    _path: string;
}