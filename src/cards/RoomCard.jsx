import { Link } from "react-router-dom";
export const RoomCard = ({ name, id, imgUrl, link }) => {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div className="bg-gray-300 bg-opacity-45 ">
        <h1 className="py-4 text-xl text-center">{name}</h1>
        <Link to="/">
          <Link to={link}>
            <button className="text-center w-full py-2">Shop Now</button>
          </Link>
        </Link>
      </div>
    </div>
  );
};
