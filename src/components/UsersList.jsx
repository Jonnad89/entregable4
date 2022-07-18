import 'boxicons'
const UsersList = ({ users, removeUser, editActualUser }) => {
  return (
    <ul className="users-list">
      <div className="users-list-container">

        {users.map((user) => (
          <li className="user" key={user.id}>
            <div className="user-info">
              <span className="name">
                {user.first_name} {user.last_name}
              </span>
              <span className="email">{user.email}</span>
              <span className="birthday">
              {user.birthday}
              </span>
            </div>
            <div className="options">
              <button className='btn-delete' onClick={() => removeUser(user.id)}><box-icon type='solid' name='trash' color='white'></box-icon></button>
              <button className='btn-edit' onClick={() => editActualUser(user)}><box-icon type='solid' name='pencil' color='white'></box-icon></button>
            </div>
          </li>
        ))}

      </div>
    </ul>
  );
};

export default UsersList;