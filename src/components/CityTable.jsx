import React from "react";
// import swal from 'sweetalert';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const CityTable = ({ citydata, deletefun }) => {
//   console.log(citydata);
  const handleDelete = () => {
    MySwal.fire({
        html: '<p>Are your sure to delete</p>',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#8796f9',
        confirmButtonText: 'delete it!',
        cancelButtonText: 'cancel',
        customClass: {
            text:'text-sm font-bold',
          title: 'text-2xl font-bold ',
          popup: 'custom-popup',
        },
        background: '#f3f4f4',
        backdrop: `
          transparent
        `
      }).then((result) => {
      if (result.isConfirmed) {
        deletefun();
        MySwal.fire("Deleted!", "Your city has been deleted.");
      }
    });
  };
  return (
    <>
      {citydata?.map((i, index) => (
        <tr key={index} className="bg-white  divide-y divide-gray-200">
          <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-4 md:px-6">
            {i.city_name}
          </td>
          <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-4 md:px-6">
            <img
              className=" w-10"
              src={`https://cdn.weatherbit.io/static/img/icons/${i.weather.icon}.png`}
              // alt=""
            />
          </td>
          <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-4 md:px-6 text-center">
            {i.temp}° C
          </td>
          <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-4 md:px-6 text-center">
            <button onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CityTable;
