import React, { useContext, useState } from "react";
import { UserContext } from "./PropsContext";

export function UserDetails() {
    const { user, setUser } = useContext(UserContext)

    const [newName, setNewName] = useState(user.name)
    console.log(user.name)

    const updateName = () => {
        setUser({ ...user, name: newName })
    }

    return (
        <div>
            <h2>User Details</h2>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={updateName}>Update Name</button>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
        </div>
    );
}
