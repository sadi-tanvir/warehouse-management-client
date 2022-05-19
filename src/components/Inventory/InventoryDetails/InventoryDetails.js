import React from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
    // router
    const {inventoryId} = useParams()

  return (
    <>
      <div className="w-full">
        <div className="w-8/12 mx-auto mt-5 flex justify-center">
          <div className="rounded-lg shadow-lg bg-white">
            <img
              className="rounded-t-lg px-2 py-2 mx-auto"
              src="https://i.ibb.co/6y4tRSv/mango.jpg"
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-1">
                {inventoryId}
              </h5>
              <h6 className="text-gray-900 text-xl font-medium mb-1">
                Stock: 300 kg
              </h6>
              <p className="text-gray-900 text-lg font-medium mb-1">
                Price: 500 tk
              </p>
              <small className="block font-bold mb-2">
                supplier: abdullah mamun
              </small>
              <p className="text-gray-700 text-base">
                An immensely popular mango from Rajshahi which is considered to
                be the most superior of all mango in Bangladesh.. The inside
                color of this mango is yellow and orange. Does not have any
                fiber and very much tasty to eat. Medium size.
              </p>
              <button
                type="button"
                className="block w-full mx-auto py-2 font-bold bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Stock Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryDetails;
