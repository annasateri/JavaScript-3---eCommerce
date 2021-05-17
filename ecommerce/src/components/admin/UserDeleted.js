import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDeleted = () => {

    const history = useHistory();

    const goBack = () => {
        history.push('/admin')
      }

    return (
        <div>
            User deleted successfully
            <button onClick={goBack}>go back</button>
        </div>
    )
}

export default UserDeleted
