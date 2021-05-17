import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getOneUser, setUser, deleteUser, updateUser } from '../store/actions/userActions';

const UserDetails = () => {

    const user = useSelector(state => state.userReducer.getUser);

    const [edit, setEdit] = useState(false)

    const handleFirstName = (e) => {
        setValue({...value, firstName: e.target.value})
    }
    const handleLastName = (e) => {
        setValue({...value, lastName: e.target.value})
    }
    const handleEmail = (e) => {
        setValue({...value, email: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedUser = {
            _id: user._id,
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email
        }

        dispatch(updateUser(updatedUser));
        setEdit(false)
      };

    const history = useHistory();
     
        const id = useParams().id
        const dispatch = useDispatch();

        const deleteOneUser = (_id) => {
            dispatch(deleteUser(_id))
            history.push('/userdeleted')
          }

          const toggleEdit = () => {
              if(edit) {
                  setEdit(false)
              } else {
                  setEdit(true)
              }
          }

        useEffect(() => {
            dispatch(getOneUser(id))
           
            return () => {
                dispatch(setUser(null))
            }
        }, [dispatch, id])

        const [value, setValue] = useState({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        })


    return (

        <div>

            {
                user ?

                <div>
                    <div>
                    <h3 className="mt-5">Customer information</h3>
                    
                    <div>
                    {
                        edit ?
                        <div>
                            <div className="form-input mb-3 mt-4 col-5">
                                <b>Email:</b>
                                <input type="text" className="form-control" onChange={handleFirstName} value={ value.email } />
                            </div>
                            <div className="form-input mb-3 col-5">
                                <b>First name:</b>
                                <input type="text" className="form-control" onChange={handleLastName} value={ value.firstName } />
                            </div>
                            <div className="form-input mb-3 col-5">
                                <b>Last name:</b>
                                <input type="text" className="form-control" onChange={handleEmail} value={ value.lastName } />
                            </div>
                        </div>
                        :
                        <div>
                            <div className="form-input mb-3 mt-4 col-5">
                                <b>Email:</b>
                                <p>{ user.email }</p>
                            </div>
                            <div className="form-input mb-3 col-5">
                                <b>First name:</b>
                                <p>{ user.firstName }</p>
                            </div>
                            <div className="form-input mb-3 col-5">
                                <b>Last name:</b>
                                <p>{ user.lastName }</p>
                            </div>
                            <div className="form-input mb-3 col-5">
                                <b>User ID:</b>
                                <p>{ user._id }</p>
                            </div>
                        </div>
                    }
                    </div>

                        <div className="order-btns d-flex">
                            <button className="btn me-2" onClick={() => toggleEdit()}>{edit ? 'Cancel' : 'Edit'}</button>
                            {
                                edit ?
                                <div className="d-flex">
                                    <button className="btn me-2" onClick={handleSubmit}>Save</button>
                                    <button className="btn-admin" onClick={() => deleteOneUser(user._id)}><i className="fas fa-trash"></i></button>
                                </div>
                                :
                                ''
                                
                            }


                        </div>
                        </div>
                </div>
                : 
                <p>loading...</p>
            }
        </div>
    )
}

export default UserDetails