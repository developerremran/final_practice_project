import React from 'react';
import { FaBars, FaCalendar, FaCalendarAlt, FaHome, FaInbox, FaMoneyCheckAlt, FaShoppingBag, FaStar } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../../CustomHooks/useCart';

const UserDashBoard = () => {

    const [carts] = useCart()
    return (
        <div>
            {/* <h2>This is cart page</h2> */}
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-10 justify-center ">
                    {/* <!-- Page content here --> */}

                   <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content uppercase">
                        {/* <!-- Sidebar content here --> */}
                        <h2 className='text-center  text-5xl font-bold mb-16'>Bistro Restaurant</h2>

                        <li><NavLink to= '/'><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to= '/reservation'><FaCalendar></FaCalendar> reservation</NavLink></li>
                        <li><NavLink to= '/payment_history'><FaMoneyCheckAlt></FaMoneyCheckAlt> payment history</NavLink></li>
                        <li><NavLink to= '/userdashboard/mycart'><FaShoppingBag></FaShoppingBag> my cart <span className='bg-red-800 p-2 rounded-full'>{carts?.length}</span></NavLink></li>
                        <li><NavLink to= '/review'><FaStar></FaStar> review</NavLink></li>
                        <li><NavLink to= '/booking'><FaCalendarAlt></FaCalendarAlt>My Booking</NavLink></li>

                        <div className="divider"></div> 
                        <li><NavLink to= '/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to= '/menu'><FaBars></FaBars> Menu</NavLink></li>
                        <li><NavLink to= '/shop'><FaShoppingBag></FaShoppingBag> shop</NavLink></li>
                        <li><NavLink to= '/contact'><FaInbox></FaInbox> contact</NavLink></li>
     

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;