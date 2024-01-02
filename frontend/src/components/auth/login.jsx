import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [ isSubmitting, setSubmitting ] = useState( false );

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async ( data ) => {
        setSubmitting( true );

        console.log( JSON.stringify( {
            Adresse_Email: data.email,
            Mot_de_passe: data.password,
        } ) );
        try
        {
            const res = await fetch( 'http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    Adresse_Email: data.email,
                    Mot_de_passe: data.password,
                } ),
            } );


            console.log( res );

            const responseData = await res.json();
            console.log( responseData );
            if ( res.ok )
            {
                localStorage.setItem( 'jwtToken', JSON.stringify( responseData.data ) );

                toast.success( 'Congratulations, you have successfully signed in!', {
                    position: 'top-center',
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                } );

                setTimeout( () => {
                    navigate( '/' );
                    window.location.reload();
                }, 3700 );
            } else
            {
                setError( 'email', {
                    type: 'server',
                    message: responseData.message || 'An error occurred while processing your request',
                } );
            }
        } catch ( error )
        {
            console.error( 'Error submitting form:', error );
        } finally
        {
            setSubmitting( false );
        }
    };
    return (
        <div class="flex h-[80vh] flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={ 5000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST" onSubmit={ handleSubmit( onSubmit ) } >
                    <div>
                        <label for="email" class="block text-lg font-medium leading-6 text-gray-900">Email address</label>
                        {
                            errors?.email &&
                            (
                                < div className='text-red-400 text-lg'>{ errors?.email?.message }</div>
                            )
                        }
                        <div class="mt-2 relative flex items-center">
                            <input { ...register( 'email' ) } id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 text-xl" placeholder='' />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-col justify-between">
                            <label for="password" class="block text-lg font-medium leading-6 text-gray-900">Password</label>

                            {/* <button type='submit' className='text-blue-600' onClick={ handlePasswordChange }>Forget Password</button> */ }

                            {
                                errors?.password &&
                                (
                                    < div className='block text-red-400 text-lg'>{ errors?.password?.message }</div>
                                )
                            }
                            {/* <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div class="mt-2 relative flex items-center">
                            <input { ...register( 'password' ) } id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='' />
                        </div>
                    </div>

                    <div class="mt-6 flex w-full items-center justify-end gap-x-6">
                        { isSubmitting ? (
                            <div className='w-full flex items-center justify-center bg-indigo-600 px-3 py-2'>
                                <div className="w-6 h-6 flex items-center justify-center border-t-4 border-r-4 border-blue-500 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <button type="submit" class="w-full rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>

                        ) }
                    </div>
                </form>
            </div>
        </div>


    );
};


export default Login


