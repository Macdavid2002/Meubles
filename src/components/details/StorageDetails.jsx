import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import data from "../../api/data.json";
import { useParams } from "react-router-dom";

export const StorageDetails = () => {
  const { name } = useParams();
  const storageData = data.storage;
  const storage = storageData.find(
    (storageItem) => storageItem.name.toLowerCase() === name.toLowerCase()
  );
  if (!name) {
    return <h1 className="text-xl my-14">Storage Not Found </h1>;
  }

  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm flex items-center">
          Home <ChevronRightIcon className="w-3" />
        </Link>
        <Link to="/storage" className="text-sm flex items-center">
          Storage <ChevronRightIcon className="w-3" />
        </Link>
        <p className="text-sm">{storage.name}</p>
      </div>

      <>
        <div className="w-96 mx-auto shadow-sm shadow-black p-4 my-4 rounded-md">
          <div className="">
            <img
              src={storage.imgUrl}
              className="rounded-lg"
              alt={storage.name}
            />
          </div>
          <div>
            <span className="flex items-center justify-between">
              <h2 className="text-xl font-medium"> {storage.name}</h2>
              <h2 className="font-bold text-lg py-4"> ${storage.price}.00</h2>
            </span>
            <p className="text-sm font-light w-full">{storage.desc} </p>
            <button className="flex gap-4 justify-center rounded-md bg-black mt-4 p-3 text-md font-medium w-full text-white">
              <ShoppingBagIcon className="w-5 text-white" />
              Add to cart
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
