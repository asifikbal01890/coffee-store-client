import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // const [passError, setPassError]

    const { register, handleSubmit, formState: {errors} } = useForm()
// console.log(errors);
// let passError;
// if(){

// }

    const { createUser, profileUpdate, setLoading } = useContext(AuthContext)

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(userInfo => {

                profileUpdate(data.name, data.photoURL)
                .then(user => {
                    console.log(user)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                })

                navigate(location.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='max-w-[1140px] mx-auto flex justify-center mt-10'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" required {...register("name")} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" required {...register("photoURL")} placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" required {...register("email")} placeholder="Enter your Email" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text"> Password</span>
                        </div>
                        <input type="password" required {...register("password", { maxLength: 8 , minLength: 6, pattern:/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} placeholder="Enter your Password" className="input input-bordered w-full max-w-xs" />
                        {errors &&
                        <>
                        <p className='text-red-600 text-xs pt-3'>{errors.password?.type === "maxLength" || errors.password?.type === "minLength" && "use minimum 6 characters and maximum 8 characters"}</p>
                        <p className='text-red-600 text-xs pt-3'>{errors.password?.type === "pattern" && "use uppercase, special characters and numbers"}</p>
                        </>

                        }
                        <div className="label">
                        </div>
                    </label>
                    <input className='btn btn-primary w-full' type="submit" value="Register" />
                </form>
            </div>
        </div>
)};

export default Register;