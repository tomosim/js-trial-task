import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastSeen({ date }) {
    const unixDate = new Date(date)
    return (
        <span className="last-seen">
            Last seen: <ReactTimeAgo date={unixDate.getTime()} locale="en-US" />
        </span>
    )
}