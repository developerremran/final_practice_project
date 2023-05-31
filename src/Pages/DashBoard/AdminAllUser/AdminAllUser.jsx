import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../SheardSection/SectionTitle/SectionTitle';
import { FaTrashAlt, FaUsersCog } from 'react-icons/fa';
import UseAxiosSecure from '../../../CustomHooks/UseAxiosSecure';

const AdminAllUser = () => {
   
    const [axiosSecure] = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {

        const result = await axiosSecure.get('/users')
        return result.data;
    })

    const hendleUpdate =(user) =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method:'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            console.log(data)
            if(data.modifiedCount){
                alert('updated succeed')
            }
        })
        .catch(error => console.log(error))
    }


    const deleteUser = (user) =>{
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if(data.deletedCount > 0){
                alert('item delete')
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <SectionTitle subTitle={'---How many??---'} mainTitle={'MANAGE ALL USERS'}></SectionTitle>

            <div>
                <h2 className='text-3xl font-semibold tracking-wide mb-10'>Total User : {users.length}</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ROLE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            users.map((user, index) =>  <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                       
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                             
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role === 'admin' ? 'admin' :  <button onClick={()=> hendleUpdate(user)}><FaUsersCog className='bg-orange-600 p-1 text-white text-3xl' ></FaUsersCog></button>}</td>
                                <th>
                                    <button onClick={()=>deleteUser(user)} className="btn btn-ghost bg-red-500 p-1 text-white btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                           }
                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminAllUser;