import { useParams } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import DriverInformation from "components/forms/DriverInformation";
import DriverInformation2 from "components/forms/DriverInformation2";
import DriverInformation3 from "components/forms/DriverInformation3";

function LiveForm() {
  const { formName } = useParams();

  return (
    <Container>
      <Head
        page="Liveform"
        description="Driver information form for clients to fill"
      />
      <Header title="Driver Information" info={formName} />
      {formName === "sola1" && <DriverInformation />}
      {formName === "sola2" && <DriverInformation2 />}
      {formName === "sola3" && <DriverInformation3 />}
    </Container>
  );
}

export default LiveForm;
