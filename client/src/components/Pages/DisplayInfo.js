import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PERSON_FROM_DB } from "../../Queries/queries";

import PersonInfo from "../PersonInfo"

const DisplayInfo = () => {
    //Get the person Id from Routes.
	const { id } = useParams();

    const { loading, error, data } = useQuery(GET_PERSON_FROM_DB, {
        variables: { id: id }
    });

    console.log(data);

    if (error) return <p>{error.message}</p>;

	return <>
        {(loading ? <div>Loading....</div> : <PersonInfo  data={data} />)}
    </>;
};

export default DisplayInfo;