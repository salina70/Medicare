import { useState } from "react";
import { useAxios } from "../../lib/provider/axios";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const { axios } = useAxios();

  const fetch = async () => {
    const { data } = await axios.get("/users");
    setUserList(data);
  };

  return (
    <div>
      <button onClick={fetch}>fetch</button>
      {userList && userList.map((user) => <div>{user.email}</div>)}
    </div>
  );
}
