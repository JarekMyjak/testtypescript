import React, {FC} from 'react'

type CircleProps = {
    key: string,
    color?: string
}

export const Circle: FC<CircleProps> = ({children, color}) => {
    return (
        <div className="Circle" style={{backgroundColor:color}}>
            <h2>{children}</h2>
        </div>
    )
}
