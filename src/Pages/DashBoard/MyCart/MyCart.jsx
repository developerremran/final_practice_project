import React from 'react';
import useCart from '../../../CustomHooks/useCart';
import Swal from 'sweetalert2';


const MyCart = () => {
    const [carts, refetch] = useCart()
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);


    const itemDelte =(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/cart/${item._id}`,{
                method:'DELETE',
              })
              .then(res=> res.json())
              .then( data => {
                if(data.deletedCount > 0){
                    refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )}
              })
              .catch(error => console.log(error))
            }
          
          })
        
    } 

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-semibold mb-5'>Total orders :{carts?.length} </h2>
                <div className='flex gap-36'>
                    <h2 className='text-3xl font-semibold mb-5'>Total price :<span className='text-yellow-800'>$ {totalPrice}</span> </h2>
                    <button className='btn btn-warning btn-sm'>PAY</button>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                      
                                        <div>
                                            <div className="w-[50px]"><img src={item.image} alt="" /></div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">$ {item.price}</button>
                                </th>
                                <th>
                                    <button onClick={()=> itemDelte(item)} className="btn btn-error btn-xs text-white"> X</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCart;