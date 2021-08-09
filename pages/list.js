import Container from "@material-ui/core/Container";
import UserList from "../components/userList";
import Header from "../components/header";

export default function List() {
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <UserList />
            </Container>
        </>
    )
}