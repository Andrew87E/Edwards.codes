export interface BlogType {
    _id?: number
    title: string
    author: string
    body: string
    comments: [{
        body: string
        date: Date
    }]
    postDate: Date
    hidden: boolean
    meta: {
        votes: number
        favs: number
    }
}

export interface responseFuncs {
    GET?: Function;
    POST?: Function;
    PUT?: Function;
    DELETE?: Function;
}
