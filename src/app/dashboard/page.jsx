import React from "react";

import { fetchUserData } from "../../services/user";

export default async function Dashboard() {

    const userData = await fetchUserData(1)

    return (
        <>

        </>
    )
}