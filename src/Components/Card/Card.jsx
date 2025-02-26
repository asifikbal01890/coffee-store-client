import React from 'react';
import { IoEye, IoPencil } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ coffee, setCoffeesInfo, coffeesInfo }) => {
    const { _id, name, chef, supplier, details, teste, category, photo_url, price } = coffee;

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // if (data.deletedCount>0) {
                        //     Swal.fire({
                        //         title: "Deleted!",
                        //         text: "Your file has been deleted.",
                        //         icon: "success"
                        //     }).then(result => {
                        //         console.log(result);
                        //         if (result.isConfirmed || result.isDismissed) {
                        //             const coffeeData = coffeesInfo.filter(coffee => coffee._id !== id)
                        //             setCoffeesInfo(coffeeData)
                        //         }
                        //     });
                        // }

                        

                        if (data.deletedCount > 0) {
                            const coffeeData = coffeesInfo.filter(coffee => coffee._id !== id)
                            setCoffeesInfo(coffeeData)

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }

                    })
                    .catch(err => {
                        console.log(err);

                    })

            }
        });



    }
    return (
        <div className="card lg:card-side !items-center bg-white">
            <figure className='m-[30px] w-[185px] h-[239px] '>
                <img className='h-full object-contain'
                    src={photo_url}
                    alt="Album" />
            </figure>
            <div className='h-[99px] w-[259px] flex flex-col justify-between items-start'>
                <p><b className='pr-2'>Name:</b>{name}</p>
                <p><b className='pr-2'>Chef:</b>{chef}</p>
                <p><b className='pr-2'>Price:</b>${price}</p>
            </div>
            <div className="flex flex-col justify-between h-[150px] my-auto">
                <Link to={`coffee/${_id}`}><button className="p-[10px] rounded-[5px] bg-[#D2B48C] text-white"><IoEye /></button></Link>
                <Link to={`update_coffee/${_id}`}> <button className="p-[10px] rounded-[5px] bg-[#3C393B] text-white"><IoPencil /></button></Link>
                <button onClick={() => handleDelete(_id)} className="p-[10px] rounded-[5px] bg-[#EA4744] text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default Card;