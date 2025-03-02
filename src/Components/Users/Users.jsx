import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { deleteUser } from 'firebase/auth';

const Users = () => {
    const usersInfo = useLoaderData()
    console.log(usersInfo);

    const { removeUser, user } = useContext(AuthContext)

    const handleDelete = () => {
        deleteUser(user)
        .then(data =>{
            console.log(data);
            
        })
        .catch(
            err => {
                console.log(err);
                
            }
        )
        // user.delete()
        // Swal.fire({
        //     title: "Type pass for Delete user",
        //     input: "text",
        //     inputAttributes: {
        //         autocapitalize: "off"
        //     },
        //     showCancelButton: true,
        //     confirmButtonText: "Yes",
        //     showLoaderOnConfirm: true,

        // }).then((result) => {
        //     console.log(result);
            
        //     if (result.isConfirmed && result.value !=="") {
        //         const user = {
        //             email:usersInfo.email,
        //             password: result.value
        //         }
        //         removeUser(user)
        //         .then(data => {
        //             console.log(data);
        //             deleteUser(user)
        //         })
        //         .catch(err => {
        //             console.log(err);
    
        //         })
        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     }
        // });
       
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersInfo.map((userInfo, i) =>
                            <tr key={userInfo._id}>
                                <th>{1 + i}</th>
                                <td>{userInfo.displayName}</td>
                                <td>{userInfo.email}</td>
                                <td><button onClick={() => handleDelete()}>X</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;