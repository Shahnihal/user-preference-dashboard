import React from "react";

import UserContainer from "../../components/UserContainer";

import { fetchUserData } from "../../services/user";

export default async function Dashboard() {

    const userData = await fetchUserData(1)

    return (
        <UserContainer userData={userData} />
    )
}