import { AiFillPlusCircle } from 'react-icons/ai';

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">Add new task <AiFillPlusCircle className='ml-1' size={18}/> </button>
    </div>
  )
}

export default AddTask

