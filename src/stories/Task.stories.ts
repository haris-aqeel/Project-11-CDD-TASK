import React from 'react'
import Task from '../components/Input'

export default {
    title: "Task",
    component: Task
}

interface TaskProps {
    task: {
        id: string;
        description: string;
    }
}



