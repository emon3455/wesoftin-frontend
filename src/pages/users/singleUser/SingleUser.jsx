import { useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";


const SingleUser = () => {
    const params = useParams();
    return (
        <main className="container mx-auto p-2">
            <SectionTitle subHeading="------ Know More! ------" heading="User Details"></SectionTitle>
            {params.id}
            <section>

            </section>
        </main>
    );
};

export default SingleUser;