import React from 'react';
import { assets } from '../assets/assets';

const Add = () => {
    return (
        <form>
            <div className="flex flex-col w-full items-start gap-3">
                <p className='mb-2'>Upload Image</p>

                <div className="flex gap-3 ">
                    <label htmlFor="image1">
                        <img className='w-24 cursor-pointer' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-24 cursor-pointer' src={assets.upload_area} alt="" />
                        <input type="file" id='image2' hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-24 cursor-pointer' src={assets.upload_area} alt="" />
                        <input type="file" id='image3' hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-24 cursor-pointer' src={assets.upload_area} alt="" />
                        <input type="file" id='image4' hidden />
                    </label>
                </div>
            </div>
            <div className="">
                <p>Product Name</p>
                <input className='w-full max-w-[500px] px-3 py-2 border' type="text" placeholder='Type here..' required />
            </div>
        </form>
    );
}

export default Add;
