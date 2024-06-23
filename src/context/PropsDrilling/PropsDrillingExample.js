import React, { useState } from "react";
import { UserProfile } from "./UserProfile";
import { UserProvider } from "./PropsContext";

function PropsDrillingExample() {
    const [user, setUser] = useState({
        name: "John",
        age: 25,
    });
    return (
        <UserProvider>
            <h1>PropsDrillingExample</h1>
            {/* <UserProfile user={user} setUser={setUser} /> */}
            <UserProfile />
        </UserProvider>
    );
}


export default PropsDrillingExample;
