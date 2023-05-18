"use client";

import { ITask } from "@/types/task"
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useState, FormEventHandler } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
//import { v4 as uuidv4 } from "uuid";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter()
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        // await addTodo({
        //   id: uuidv4(),
        //   text: newTaskValue
        // })
        setTaskToEdit("")
        setOpenModalEdit(false)
        router.refresh()
      }

  return (
    <>
        <tr key={task.id}>
            <td className="w-full">{task.text}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edit task</h3>
                        <div className='modal-action'>
                            <input onChange={e => setTaskToEdit(e.target.value)} value={taskToEdit} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2 cursor="pointer" className="text-red-500" size={25}/>
            </td>
        </tr>
    </>
  )
}

export default Task
