import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../CustomHooks/useCart';

const Card = ({ product }) => {
    const { name, image, recipe, price, _id } = product;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const cartAdded = (product) => {

        const foodInfo = { name, price, image, foodId: _id, email:user.email }
        if (user && user.email) {
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(foodInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                  refetch()
                        Swal.fire(
                            'Item Added',
                            "You clicked the item",
                            'success'
                        )
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Login',
                denyButtonText: `Back To Home`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })

                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })

        }


    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 relative">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions">
                        <button onClick={() => cartAdded(product)} className="btn ">Add To Cart</button>
                    </div>

                    <div className='absolute top-0 right-0 mt-5 mr-5'>
                        <button className='btn btn-warning'>$ {price}</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;