import React from 'react'

type comments = [{
    body: string
    date: string
}]

type meta = {
    favs: number
}

export const Comments: React.FC = (comments: comments, meta: meta) => {
 
    //map through comments and display them
    const renderComments = () => {
        
        return comments.map((comment) => {
            return (
                <div key={comment.date} className="flex flex-col items-center justify-center">
                    <p className="text-lg text-white text-center pb-3">{comment.body}</p>
                    <h3 className="text-sm text-white text-center">
                        {comment.date}
                    </h3>
                    <h4></h4>
                </div>
            )
        }
        )
    }

    

    return (
        <div className="flex flex-col items-center justify-center">
            {renderComments()}
        </div>
    )
}
