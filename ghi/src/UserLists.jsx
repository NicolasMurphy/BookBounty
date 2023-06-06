import { useSelector, useDispatch } from "react-redux";
import { search } from "./app/SearchSlice";
import { useGetUserSearchQuery } from "./app/authApiSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const UserLists = ({ name }) => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.searchField.value);
  const { data: searchUsers, isLoading: searchLoad } = useGetUserSearchQuery(
    searchField,
    { skip: name !== "User Search" }
  );
  useEffect(() => {
    dispatch(search(searchField));
  }, []);

  if (searchLoad) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (!searchUsers || searchUsers.length === 0) {
    return (
      <div className="flex justify-center items-center">
        No matching result found
      </div>
    );
  }

  return (
    <>
      <h1 className="txt">{name}</h1>
      <div className="grid grid-cols-3 gap-4">
        {name === "User Search" &&
          searchUsers.map((user) => (
            <div className="p-4">
              <UserCard user={user} />
            </div>
          ))}
      </div>
    </>
  );
};

export default UserLists;
