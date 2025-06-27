import React from "react";

import UserContainer from "../../components/UserContainer";

import { fetchUserData } from "../../services";
import { getJoke } from "../../utils/getJoke";
import { getJokeViaServerAction } from "../actions/joke";

export default async function Dashboard() {

    const userData = await fetchUserData(1)

    const jokeData = await getJoke();

    console.log(jokeData, "joke data")

    const jokeFromAction = await getJokeViaServerAction();

    console.log(jokeFromAction, "joke data server action")

    return (
        <UserContainer userData={userData} />
    )
}