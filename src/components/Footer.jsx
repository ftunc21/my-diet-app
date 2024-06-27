
import React from 'react';


import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';
import { Input, Button } from 'antd';


const Footer = () => {

    return (
        <div className='w-full bg-gray-100 text-gray-800 py-8 px-2'>
            <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-300 py-8'>

                <div>
                    <h6 className='font-bold uppercase py-2 text-orange-600'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li classname='py-1 text-green-700'>Marketing</li>
                        <li classname='py-1 text-green-700'>Marketing</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase py-2 text-orange-600'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2 text-orange-600'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2 text-orange-600'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                        <li className='py-1 text-green-700'>Marketing</li>
                    </ul>
                </div>

                <div className='col-span-2 pt-2 md:pt-0'>
                    <p className='font-bold uppercase text-orange-600'>Subscribe To Our Newsletter</p>
                    <p className='py-4 text-orange-600'>The latest news, articles, and resources sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <Input className='w-full p-2 mb-2 mr-4 rounded-md' type="email" placeholder="Enter email" />
                        <Button className='mb-2 bg-orange-600 text-white' type="primary">Subscribe</Button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-6xl px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
                <p>2024 MealMaster, LLC. All rights reserved.</p>

                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaTwitch />
                    <FaTwitter />
                </div>
            </div>
        </div>
    );
};

export default Footer;
