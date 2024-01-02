import React from 'react'
import aizen from '../../../../../assets/images/aizen.jpg'
const Profile = () => {

    // const user = getCurrentUser()

    // const brithday = user.brithday.split( 'T' )[ 0 ]

    return (
        <div className="w-full bg-gray-100 p-4 h-screen">


            <div class="border-2 shadow-lg shadow-gray-300 rounded-lg w-full h-screen">

                <div
                    className="flex items-center gap-10 object-cover bg-gray-200 rounded-t-lg sm:px-2 w-full z-1"

                >
                    {/* <img src={ random }
                        className='w-full h-370 2xl:h-510 shadow-lg object-cover' alt="banner-profile" /> */}
                    <div class="h-40 w-40 overflow-hidden sm:relative sm:p-0 top-10 left-5 p-3 ">
                        <img className='rounded-full' src={ aizen } />
                    </div>

                    <div class="w-2/3 pl-5 mt-12 text-start">
                        <p class=" font-bold text-heading sm:text-4xl text-2xl">
                            {/* { user.Firstname } { user.Lastname }
                             */}
                            Zineddine Rebbouh
                        </p>
                        <p class="text-heading font-semibold">GameGuard Admin</p>
                    </div>

                </div>

                <div class="p-5">

                    <div class="flex flex-col sm:flex-row sm:mt-10">

                        <div class="flex flex-col sm:w-1/3">
                            <div class="py-3 sm:order-none order-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>

                                <div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600 mx-1">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg==" />
                                        </a>
                                        <div class="ml-2 truncate">mkrym99999@gmail.com</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600 mx-2"
                                            aria-label="Visit TrendyMinds YouTube" href="" target="_blank">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2ZW2iPcRjHP9sww+S4OTSEmgsuiKQooiwXCKPEHFZkyZUrhyS5cLhzuOBiF1LTSMIkc0hbiraQREjOOYzNIQybfvVdPf173///P/7v9qP/p3bz3/P+fs/7vr/neb7P80KaNP89I4EyoBK4BTQCDcAOIBvP6QIUA9VAC9Aa8ncZ6I2HZAALgXvG2Y/AEWA5MA7oA8wAnun/dcBAPGIScN3cwH1gHZAbYj/c3PANoCedjDvnO4Efcuo5sEbHKxH5wENddybJayJhAnBbjvwEdgE92rnGaOCN1thDJ1AKfJMD7ohM+Yu1pgLNSgxFdBBdgQMmFvYBOSlYd6PWq6UDyAOuasOvQEkK1+6rdT8TMYXAE232FJiY4gd00qTjyBgPvNZGNco2qWKxCXZX9ScTES4QP2ijswnioVc71h0EnDCxdgEYRkTMBr5oowoFehBZwGZlsXJgSIJ1S6S33LpNqjtOFUTCAuC7NjskZ4Nwx+xKjIb6pBvLCajm54xdFVBAhBSZm9gT52mNBR7L7hWwNOa4uOSwQlpqvXSX+/2dtFekTDXHKV6lnalj4ewuxSSA6UB9iOKtUJYi6uzUqA0Px3kTc1RHWqVsuwXYZAIrdUO/gJvAXDqAQpNij8WJCRs7e6MM0j8h3xS7qpAn7FhiVK5TvF7R1ciOmjjqdZ6EnbPbhocclHMv4+T/WSYmtuMhpUYAug4viGkmi+3GQyaYfsLl+rAE0GDkundkm85uf4hNf+CBbCqVTr1jp+nsgkRgpkRcW6PTHU+PVLOKlKviQWzSTTh5PRQPyTAjm7DAzTWxswxPWSQHXySYdpTLzglA78gC7spBp/8TVfo2QehqiFcUmwlgMoOwLbKv9y1jVcsxN8ZMhhyjv8LqTKeM9lvU2ITNYoNY3RGTjfZQZnqH9pBnxqFeUPmH6XSDrruDJ9yWQ+77RLKM0BDBXTcfT2iSQ24smWzhvKhrjuIRb+WU67WTYa3sXes7AI/YakY2oxLYFpg36GqPd+3seTn3KMEksEp2x/GUHurJWzVUGxNgs8oM0FI5qE45/YBrxlnXxrYxGHjvu+qNfTOn5HCzvhT1Nb+d5h8iSx8uYz/mN/raSCUzrK7VlKQuyo8sadLgF78BcM8G98yji0EAAAAASUVORK5CYII=" />
                                        </a>
                                        <div>+213 0562178590</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600 mx-2"
                                            aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4">
                                                <path fill="currentColor"
                                                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                </path>
                                            </svg>
                                        </a>
                                        <div> Zineddine Rebbouh</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600 mx-2"
                                            aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg class="h-4"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                </path>
                                            </svg>
                                        </a>
                                        <div>Zineddine Rebbouh</div>
                                    </div>

                                </div>
                            </div>

                            <div class="py-3 sm:order-none order-1">
                                <div class="border-2 border-top-color my-5 w-20">
                                </div>
                                <button type="submit" class="flex w-[50%] justify-center rounded-full bg-blue-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact me</button>
                            </div>

                        </div>


                        <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">User information :  </h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
                                {/* <p>To get a career opportunity which would help me to utilize my academic background to assist
                                    me to gain experience, employ my excellent skills, and enable me to make positive
                                    contribution.</p> */}
                                <div className='my-10 flex items-center gap-3 justify-between'>
                                    <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">First Name :</h2>

                                    <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='Zineddine' value={ `${ 'Zineddine' }` } />

                                </div>

                                <div className='my-10 flex items-center gap-3 justify-between'>
                                    <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Last Name :</h2>

                                    <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='Rebbouh' value={ `${ 'Rebbouh' }` } />

                                </div>

                                <div className='my-10 flex items-center gap-3 justify-between'>
                                    <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Email :</h2>

                                    <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='mkrym99999@gmail.com' value={ `${ 'mkrym99999@gmail.com' }` } />

                                </div>

                                <div className='my-10 flex items-center gap-3 justify-between'>
                                    <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Gender :</h2>

                                    <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='Male' value={ `${ 'Male' }` } />

                                </div>

                                <div className='my-10 flex items-center gap-3 justify-between'>
                                    <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Birthday :</h2>

                                    <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='22 / 07 / 2003' value={ '22 / 07 / 2003' } />

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Profile
