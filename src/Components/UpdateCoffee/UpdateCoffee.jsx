import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffeeInfo = useLoaderData()
    console.log(coffeeInfo);
    
    const handleUpdateCoffee = (e) => {
            e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const coffeeData = {
                name,
                chef,
                supplier,
                taste,
                category,
                details,
                photo_url: photo
            }
            console.log(coffeeData);

            fetch(`http://localhost:5000/coffee_update/${coffeeInfo?._id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Coffee Update",
                        icon: "success",
                        draggable: true
                      });
                }
            })
            
        }
          
    
    return (
        <div className='flex justify-center mt-7'>
        <div>
            <h1 className='text-2xl font-bold'>ADD COFFEE</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className='flex justify-between gap-5 w-[800px]'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input defaultValue={coffeeInfo.name} required type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered input-warning w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Chef</span>
                        </div>
                        <input defaultValue={coffeeInfo.chef} type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered input-warning w-full " />
                    </label>
                </div>
                <div className='flex justify-between gap-5 w-[800px]'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input required type="text" defaultValue={coffeeInfo.supplier} name='supplier' placeholder="Enter coffee supplier" className="input input-bordered input-warning w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input required type="text" defaultValue={coffeeInfo.taste} name='taste' placeholder="Enter coffee taste" className="input input-bordered input-warning w-full " />
                    </label>
                </div>
                <div className='flex justify-between gap-5 w-[800px]'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input required type="text" defaultValue={coffeeInfo.category} name='category' placeholder="Enter coffee category" className="input input-bordered input-warning w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input required type="text" defaultValue={coffeeInfo.details} name='details' placeholder="Enter coffee details" className="input input-bordered input-warning w-full " />
                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Photo</span>
                    </div>
                    <input required type="text" defaultValue={coffeeInfo.photo_url} name='photo' placeholder="Enter photo URL" className="input input-bordered input-warning w-full " />
                </label>
                <input type="submit" value={"Add Coffee"} className='btn btn-primary mt-6 w-full' />
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;