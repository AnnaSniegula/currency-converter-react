import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Form from "./Form";

function App() {
  return (
    <>
      <Header title="kalkulator walut" />
      <Container>
        <Form />
      </Container>
      <Footer author="&copy; Anna Śnieguła 2021" />
    </>

  );
}

export default App;
