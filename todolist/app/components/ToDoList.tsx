import React from 'react'

const ToDoList = () => {
  return (
<div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default ToDoList
