import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const register = () => {


    const navigate = useNavigate();

    const [ value, onChange ] = useState( new Date() );
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();


    const onSubmit = async ( data ) => {
        try
        {
            const formData = new FormData();

            // Append form data
            formData.append( "Nom", data.Nom );
            formData.append( "Prénom", data.Prénom );
            formData.append( "Adresse_Email", data.Adresse_Email );
            formData.append( "Mot_de_passe", data.Mot_de_passe );
            formData.append( "Genre", data.Genre );
            formData.append( "Role", data.Role );
            formData.append( "Date_de_Naissance", data.Date_de_Naissance );
            formData.append( "profile_image", data.profile_image[ 0 ] ); // Append the image file

            const res = await fetch( `http://127.0.0.1:8000/api/register`, {
                method: 'POST',
                body: formData,
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
                // mode: 'no-cors'
            } );
            console.log( res );
            const responseData = await res.json();

            if ( responseData.errors )
            {
                responseData.errors.forEach( ( error ) => {
                    setError( error.path, {
                        type: 'server',
                        message: error.msg,
                    } );
                } );
                return;
            }

            toast.success( 'Congratulations, you have successfully signed up!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            } );

            setTimeout( () => {
                navigate( '/Auth/login' );
            }, 3700 );
        } catch ( error )
        {
            console.error( 'Error submitting form:', error );
        }
    };

    return (
        <div class="flex h-[80vh] flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign up with your account</h2>
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
            {/* Same as */ }
            <ToastContainer />

            <form action="/" method="post" onSubmit={ handleSubmit( onSubmit ) } className="flex flex-col h-auto w-[30rem]" enctype="multipart/form-data">

                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-lg font-medium leading-6 text-gray-900">First name</label>
                                {
                                    errors?.Nom && errors?.Nom?.message && (
                                        <div className="text-red-400 text-lg">{ errors?.Nom?.message }</div>
                                    )
                                }

                                <div class="mt-2">
                                    <input { ...register( 'Nom' ) } type="text" name="Nom" id="first-name" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-lg font-medium leading-6 text-gray-900">Last name</label>
                                {
                                    errors?.Prénom &&
                                    (
                                        < div className='text-red-400 text-lg'>{ errors?.Prénom?.message }</div>
                                    )
                                }
                                <div class="mt-2">
                                    <input { ...register( 'Prénom' ) } type="text" name="Prénom" id="last-name" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="email" class="block text-lg  font-medium leading-6 text-gray-900">Email address</label>
                                {
                                    errors?.Adresse_Email &&
                                    (
                                        < div className='text-red-400 text-lg'>{ errors?.Adresse_Email?.message }</div>
                                    )
                                }
                                <div class="mt-2">
                                    <input { ...register( 'Adresse_Email' ) } id="email" name="Adresse_Email" type="email" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="email" class="block text-lg  font-medium leading-6 text-gray-900">Password</label>
                                {
                                    errors?.Mot_de_passe && errors?.Mot_de_passe?.message && (
                                        <div className="text-red-400 text-lg">{ errors?.Mot_de_passe?.message }</div>
                                    )
                                }
                                <div class="mt-2">
                                    <input  { ...register( 'Mot_de_passe' ) } id="password" name="Mot_de_passe" type="password" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>

                            <div class="sm:col-span-3 space-y-3 flex flex-col gap-20">
                                <div className='mb-4'>
                                    <label for="photo" class="block text-lg font-medium leading-6 text-gray-900">Gender</label>
                                    {
                                        errors?.Genre &&
                                        (
                                            < div className='text-red-400 text-lg'>{ errors?.Genre?.message }</div>
                                        )
                                    }
                                    <div class="mt-2 flex items-center gap-x-3">
                                        <input
                                            id="Homme"
                                            name="Genre"
                                            type="radio"
                                            value="Homme"
                                            { ...register( 'Genre' ) }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                                        />
                                        <label htmlFor="male">Male</label>
                                        <input
                                            id="Femme"
                                            name="Genre"
                                            type="radio"
                                            value="Femme"
                                            { ...register( 'Genre' ) }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="Femme">Female</label>
                                    </div>
                                </div>
                                <div>
                                    <label for="photo" class="block text-lg  font-medium leading-6 text-gray-900">Role</label>
                                    {
                                        errors?.Role &&
                                        (
                                            < div className='text-red-400 text-lg'>{ errors?.Role?.message }</div>
                                        )
                                    }
                                    <div class="mt-2 flex items-center gap-x-3">
                                        <input
                                            id="patient"
                                            name="Role"
                                            type="radio"
                                            value="patient"
                                            { ...register( 'Role' ) }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="male">Patient</label>
                                        <input
                                            id="medcin"
                                            name="Role"
                                            type="radio"
                                            value="medcin"
                                            { ...register( 'Role' ) }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="female">Doctor</label>
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-3 space-y-3 flex flex-col gap-20">

                                <div class="">
                                    <label htmlFor="birthday" className="block text-lg font-medium leading-6 text-gray-900">
                                        Birth Day
                                    </label>
                                    { errors?.Date_de_Naissance && (
                                        <div className="text-red-400 text-lg">{ errors?.Date_de_Naissance?.message }</div>
                                    ) }
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <input
                                            { ...register( 'Date_de_Naissance' ) }
                                            type="date"
                                            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                            name='Date_de_Naissance'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="photo" class="block text-lg font-medium text-gray-900">Photo Profile</label>
                                    {
                                        errors?.Photo &&
                                        (
                                            < div className='text-red-400 text-lg'>{ errors?.Photo?.message }</div>
                                        )
                                    }
                                    <div class=" flex items-center gap-x-3">
                                        <svg class=" w-16 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                        </svg>
                                        <input
                                            { ...register( 'profile_image' ) }
                                            name="profile_image"
                                            type="file"
                                            required
                                            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex w-full items-center justify-end gap-x-6">
                    { isSubmitting ? (
                        <div className='w-full flex items-center justify-center bg-indigo-600 px-3 py-2'>
                            <div className="w-6 h-6 flex items-center justify-center border-t-4 border-r-4 border-blue-500 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <button type="submit" class="w-full rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>

                    ) }
                </div>

            </form>
        </div>
    )
}

export default register
