import Container from "components/Container";
import Head from "components/Head";
import Layout from "components/Layout/index";
import HowToDesciption from "components/HowToDesciption";

function HowItWorks() {
  return (
    <Container>
      <Head
        page="How it Works?"
        description="This is how SIXT Driver info forms work. Follow the instructions here."
      />
      <Layout showHowItWorks="none" info="Driver Info Forms">
        <HowToDesciption title="How it Works?" />
      </Layout>
    </Container>
  );
}

export default HowItWorks;
