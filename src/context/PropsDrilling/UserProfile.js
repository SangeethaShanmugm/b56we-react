import React, { useContext } from "react";
import { UserDetails } from "./UserDetails";
import { UserContext } from "./PropsContext";

export function UserProfile() {
    const { user, setUser } = useContext(UserContext)
    return (
        <div>
            <h2>User Profile - {user.name}</h2>
            {/* <UserDetails user={user} setUser={setUser} /> */}
            <UserDetails />
        </div>
    );
}


