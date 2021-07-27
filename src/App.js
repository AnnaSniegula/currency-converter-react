import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  return (
    <>
      <Header title="kalkulator walutowy" />
      <Container>
        <Clock />
        <Form />
      </Container>
      <Footer author="&copy; Anna Śnieguła 2021" />
    </>
  );
};

export default App;
