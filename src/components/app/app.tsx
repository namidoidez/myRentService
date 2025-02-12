import { JSX } from "react"
import Main from "../../pages/main/main"

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
    return (
        <Main rentalOffersCount={rentalOffersCount} />
    );
}

export default App;