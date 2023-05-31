/* eslint-disable no-unused-vars */
// mport by tanstack quey
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';



const useCart = () => {
    // if your any info need user now declere
    const { user, loading } = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = UseAxiosSecure()
    // get query data paste 
    const { refetch, data: carts = [] } = useQuery({

        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = axiosSecure(`/cart?email=${user?.email}`)

            return res.data;
        }
    })
    return [carts, refetch]
}

export default useCart;



// note:
// 1/ first time  import use query
// 2/ amar jodi user data load koraar proijon hoi tai ami user dta authcontext diye load kore felesi
//    3. Query function handeing paste
// 4/ async function run and inside the fetch my target url
// 5/ then return her value ar he data er value chaile onno name declear kora jabe
// 