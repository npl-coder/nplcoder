import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Register = ({ variant = 'navbar' }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className={`${
          variant === 'hero' 
            ? 'bg-[#DC143C] hover:bg-red-700 text-white px-6 py-4' 
            : 'bg-gray-200 hover:bg-gray-100 text-slate-900 px-4 py-4'
        } rounded-[16px] font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
          Register Now
        </button>
      </DialogTrigger>
      <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[90%] max-w-[95vw] sm:max-w-6xl p-4 sm:p-8 rounded-3xl z-[101] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="flex flex-row justify-between items-start mb-4 sm:mb-8">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-slate-900 hidden">Register</DialogTitle>
          <DialogTrigger asChild>
          </DialogTrigger>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Algorithm को श्रीपेच 001</h3>
            
            <div className="flex justify-center mb-4">
              <img 
                src="./images/Algorithm.jpeg"
                alt="NPL Coder"
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] object-cover rounded-lg"
              />
            </div>
             
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6">
              Register Now
            </button>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Nepal Data Challenge</h3>
            
            <div className="flex justify-center mb-4">
              <img 
                src="./images/NDC.jpeg"
                alt="NPL Coder"
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] object-cover rounded-lg"
              />
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6">
              Register Now
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Register;