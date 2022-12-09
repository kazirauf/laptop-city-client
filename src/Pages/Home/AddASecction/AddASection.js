import React from 'react';
import b1 from "../../../images/type/add-a-sec-1.png"
import b2 from "../../../images/type/add-a-sec-2.png"
import j1 from "../../../images/type/add-a-sec-3.png"
import j2 from "../../../images/type/add-a-sec-4.png"
import j3 from "../../../images/type/add-a-sec-5.png"
import j4 from "../../../images/type/add-a-sec-6.png"
import j5 from "../../../images/type/add-a-sec-7.png"
import j6 from "../../../images/type/add-a-sec-8.png"
import j9 from "../../../images/type/add-a-sec-1.png"
import j7 from "../../../images/type/add-a-sec-9.png"
const AddASection = () => {
    return (
        <div>
               <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row sm:mt-20" >
  <div className='w-1/2 relative hover:w-1/3 '>
    <img src={b1} alt='' className=" w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={j1} alt='' className=" w-3/5 -left-32 bottom-48 rounded-lg border-8 shadow-2xl absolute" />
    <img src={j2} alt='' className=" w-3/5 -left-32 top-56 rounded-lg border-8 shadow-2xl absolute" />
    <img src={j3} alt='' className=" w-3/5 right-5 top-1/2 rounded-lg border-8 shadow-2xl absolute" />
    </div>
    <div className='w-1/2 relative hover:w-1/3 '>
    <img src={b2} alt='' className=" w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={j4} alt='' className=" w-3/5 right-5 top-1/2 rounded-lg border-8 shadow-2xl absolute" />
    <img src={j5} alt='' className=" w-3/5 -left-32 top-56 rounded-lg border-8 shadow-2xl absolute" />
    <img src={j6} alt='' className=" w-3/5 -left-56 bottom-56 rounded-lg border-8 shadow-2xl absolute" />
    <img src={j7} alt='' className=" w-3/5 right-5 bottom-56 rounded-lg border-8 shadow-2xl absolute" />
  </div>
    <div className='w-1/2 sm:mt-48'>
        <p className='text-2xl text-orange-600 font-bold'>About Us</p>
      <h1 className="text-5xl font-bold">This is a used laptop city, <br />
        you get any laptop from here.</h1>
      <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, rerum labore, inventore nemo eaque illo itaque ea ducimus maiores eligendi amet quo in corrupti illum. Accusamus perspiciatis sint quidem officiis?</p>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint totam deleniti non, vitae veniam id animi velit eum ea numquam ab eaque ad aliquid assumenda voluptate modi distinctio aspernatur? </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddASection;