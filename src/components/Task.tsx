import React from 'react'

function Task(props: {id: string, task: string}) {
    return (
    <li>{props.task}</li>
    )
}

export default Task
