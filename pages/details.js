import Container from "@material-ui/core/Container";
import Header from "../components/header";
import DetailsUser from "../components/detailsUser";

export default function Details() {
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <DetailsUser />
            </Container>
        </>
    )
}