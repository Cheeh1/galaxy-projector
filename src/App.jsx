import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import light1 from "./assets/light-1.jpg"
import light2 from "./assets/light-2.jpg"
import light3 from "./assets/light-3.jpg"
import light4 from "./assets/light-4.jpg"
import lightVideo from "./assets/light.mp4"

const App = () => {

  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      localgovt: "",
      state: "",
      phone: "",
      scndphone: "",
      quantity: "",
      deliver: "",
      travel: "",
      message: "",
    }
  })

  const onSubmit = (data) => {
    setSubmitting(true)
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: data.name,
      name: data.name,
      email: data.email,
      message: data.message,
      address: data.address,
      local_govt: data.localgovt,
      state: data.state,
      phone_number: data.phone,
      secnd_number: data.scndphone,
      quantity: data.quantity,
      travel: data.travel,
      deliver: data.deliver,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success('Order sent successfully!!');
        setSubmitting(false)
        reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Not successfull, Please try again!!');
        setSubmitting(false)
      });
  }


  return (
    <>
      <Toaster />
      <main className="">
        <div className="bg-black px-5 xl:px-20 text-white text-center py-10">
          <h2 className="xl:text-4xl font-bold text-[#00FFFF]">
            The Glalaxy Projector
          </h2>
          <p className="xl:text-lg md:text-lg text-yellow-300 my-5">
            Plug directly to light or you can use power bank to operate it. 
          </p>

          <h1 className="text-[#6ec1e4] font-bold md:text-2xl text-xl xl:text-3xl">
            It also has a speaker which can be connected with phone to play music
          </h1>

          <hr className="xl:hidden mt-5 w-full" />
          <div className="flex flex-col mt-5 md:mt-10 gap-8 items-start md:flex-row">
            <div>
              {/* <h2 className='xl:text-xl font-semibold'>Revolutionize Your Security with Stealthy Spy Cameras!</h2> */}
              <h4 className="text-red-600 text-xl md:text-2xl xl:text-3xl font-bold my-5">3 Years Warranty!!!</h4>
              <img
                className='xl:w-[50rem]'
                src={light3}
                alt="Product Image"
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h4 className="text-red-600 text-2xl md:text-xl xl:text-3xl font-bold  xl:text-left">SEE VIDEO ON HOW IT WORKS</h4>
              <video
                className='xl:w-[50rem]'
                src={lightVideo}
                controls
              />
            </div>
          </div>

          <hr className="mt-5 xl:hidden w-full" />
          {/* <h1 className="text-red-600 text-2xl xl:text-4xl font-bold py-10">CHARGE AND USE, COMES WITH FREE MEMORY CARD</h1>
          <p>
            <span className="text-yellow-300 text-lg font-bold">
              You can wear the Spy Button Cam Full HD on your clothes or keep the
              mini camera in your pocket </span
            >, on your desk, wear around your neck practically anywhere discreetly.
            And it has a built-in magnetic suction device, which can be firmly
            attached to metal objects
          </p> */}

          <hr className=" xl:hidden w-full mt-5" />
          <div className="flex py-20 flex-col justify-center gap-40 md:flex-row">
            <div className='flex flex-col gap-3'>
              <h2 className="text-red-600 text-2xl text-left xl:text-center font-bold">Product Highlights:</h2>
              <ul className="text-[#00ffff] flex flex-col gap-2 text-left">
                <li>Music Starry Projector</li>
                <li>Remote Controller</li>
                <li>USB Cable</li>
                <li>User Manual</li>
                {/* <li>30 Hour Rechargeable Battery</li>
                <li>4 Style of Buttons</li>
                <li>Time/Date Stamp</li>
                <li>Works w/PC or Mac</li>
                <li>Remote Control</li>
                <li>1.8&quot; x 0.9&quot; x 0.4&quot;</li>
                <li>Lifetime Warranty</li>
                <li>Lifetime Support</li> */}
              </ul>
            </div>
            <div>
              <img
                className="xl:max-w-md md:w-96 h-96 py-10 xl:py-0"
                src={light1}
                alt="Product Image"
              />
            </div>
          </div>
          {/* <h3 className=''>
            Designed to stick through a button hole with the main electronics
            remaining hidden, this miniature camera takes 480p video and can snap
            p1280x1024 JPEG
          </h3> */}

          {/* <div className="my-16">
            <hr className="mb-5 xl:hidden w-full" />
            <h1 className="text-[#00ffff] text-lg md:text-xl xl:text-2xl font-bold">
              <span className="text-red-600">Please Note:</span> THIS IS THE ONLY BODY SPY
              CCTV YOU WOULD EVER NEED!
            </h1>
            <hr className="md:hidden xl:hidden w-full" />
          </div> */}


          <h2 className="text-red-600 text-4xl mt-16 text-left xl:text-center font-bold">Product Samples</h2>
          <div className="flex flex-wrap gap-8 mt-8 m-auto justify-center ">
            {/* <div>
              <h4 className="text-yellow-300 mb-5 text-center xl:pl-0 xl:text-2xl md:text-xl font-bold">Wear it as a button to your shirt, comes with 4 extra buttons</h4>
              <img
                className="md:w-[30rem] md:h-60 xl:w-[40rem] xl:h-80"
                src={light1}
                alt="Product Image"
              />
            </div> */}
            <img
              className="md:w-72 xl:max-w-md"
              src={light1}
              alt="Product Image"
            />
            <img
              className="md:w-72 xl:max-w-md"
              src={light2}
              alt="Product Image"
            />
            <img
              className="md:w-72 xl:max-w-md"
              src={light3}
              alt="Product Image"
            />
            <img
              className="md:w-72 xl:max-w-md"
              src={light4}
              alt="Product Image"
            />
          </div>


          <h5 className="text-[#00ffff] font-bold my-12">
            Only 20 Pieces remaining, Order yours now and Enjoy FREE
            DELIVERY(Despite the increase in Fuel, DELIVERY IS FREE IF YOU ORDER
            NOW)
          </h5>
          <button
            className="bg-red-500 text-white w-full py-4 text-2xl mb-10 rounded-md"
          >
            <a href="#form">Yes, I Want To Order Now</a>
          </button>

          {/* <div className="flex flex-col md:flex-row justify-center gap-40">
            <img
              src={light1}
              alt="Product Image"
              className='h-96'
            />
            <div className="text-left flex flex-col gap-3">
              <h3 className='text-xl font-semibold'>It comes with:</h3>
              <ul className='flex flex-col gap-3 xl:text-lg'>
                <li>
                  – Music Starry Projector
                </li>
                <li className=""> – Remote Controller</li>
                <li className="">   – USB Cable</li>
                <li className=""> – User Manual</li>
              </ul>
            </div>
          </div> */}

          {/* <div className='flex flex-col gap-5 mt-20 mb-5'>
            <h2 className="text-xl xl:text-2xl font-semibold">Normal Price = #27,000</h2>
            <h2 className="xl:text-3xl text-2xl text-yellow-300 font-semibold">
              24Hours Discounted Price = #22,000
            </h2>
          </div> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} id="form" className="flex flex-col gap-4 px-8 py-4">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border border-black p-2 rounded-sm"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-black p-2 rounded-sm"
              {...register("email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            />
            {errors.email && <span className='text-red-600 text-sm'>Enter a valid email</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Address with Bus Stop</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your Address [Home/Office]"
              className="border border-black p-2 rounded-sm"
              {...register("address", { required: true })}
            />
            {errors.address && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Local Govt</label>
            <input
              type="text"
              name="localgovt"
              id="local_govt"
              className="border border-black p-2 rounded-sm"
              {...register("localgovt", { required: true })}
            />
            {errors.localgovt && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>State</label>
            <input
              type="text"
              name="state"
              id="state"
              className="border border-black p-2 rounded-sm"
              {...register("state", { required: true })}
            />
            {errors.state && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border border-black p-2 rounded-sm"
              {...register("phone", { pattern: /^\d{11}$/ })}
            />
            {errors.phone && <span className='text-red-600 text-sm'>Enter a valid phone number</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Second Number</label>
            <input
              type="text"
              name="scndphone"
              id="scnd_phone"
              className="border border-black p-2 rounded-sm"
              {...register("scndphone", { pattern: /^\d{11}$/ })}
            />
            {errors.scndphone && <span className='text-red-600 text-sm'>Enter a valid phone number</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Select Quantity</label>
            <span
            ><input type="radio"  {...register("quantity", { required: true })} name="quantity" value="Buy 1 Galaxy projector = #27,000" /> Buy 1 Galaxy projector = #27,000</span
            >
            <span
            ><input type="radio" {...register("quantity", { required: true })} name="quantity" value="Buy 2 Galaxy projector = #50,000" /> Buy 2 Galaxy projector = #50,000</span
            >
            <span
            ><input type="radio" {...register("quantity", { required: true })} name="quantity" value="Buy 3 Galaxy Projector = #70,000" /> Buy 3 Galaxy Projector = #70,000</span
            >
            {errors.quantity && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label>How Soon do you want it delivered</label>
            <span><input type="radio" value="Within 48 hours" {...register("deliver", { required: true })} name="deliver" /> Within 48 hours</span>
            <span><input type="radio" value="Within 72 hours" {...register("deliver", { required: true })} name="deliver" /> Within 72 hours</span>
            {errors.deliver && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label
            >Are You Travelling From Your Current State Within 48 Hours</label
            >
            <span><input type="radio" value="Yes" {...register("travel", { required: true })} name="travel" /> Yes</span>
            <span><input type="radio" value="No" {...register("travel", { required: true })} name="travel" /> No</span>
            {errors.travel && <span className='text-red-600 text-sm'>This field is required</span>}
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label>Additional Message</label>
              <textarea
                name="Message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Message"
                className="border rounded border-black p-2"
                {...register("message")}
              ></textarea>
            </div>

            <button
              type="submit"
              id="button"
              className="w-full bg-[#001d52] text-white rounded-md py-4"
            >
              {submitting ? "Submitting..." : "Submit Order"}
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default App