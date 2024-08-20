import React from 'react'

function Shimmer2() {
    const ListOfCategories = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    return (
        <div className="bg-[#e7e1e13d]">
            <div className="text-center w-7/12 m-auto bg-white p-4">
                <h2 className="text-3xl font-bold py-5 border-b-2 border-t-2 my-2 border-blue-300"></h2>
                <div className="flex justify-between my-2 border-blue-300">
                    <h3 className=""> </h3>
                    <h3 className="font-bold underline text-[#ff1c1c]"></h3>
                </div>
                <div className="py-3 border-b-4 border-b-slate-900">
                    <h1 className="font-extrabold"> </h1>
                </div>
                <div>
                    {ListOfCategories.map((category, index) => (

                        <div key={index}>
                            <div className='flex justify-between p-4 bg-[#f0eded79] shadow-xl border-b-2 m-2'>
                                <h1></h1>
                                <h1></h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Shimmer2
