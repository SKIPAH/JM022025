import { Link } from "react-router";
import TestChart from "../components/TestChart";
import TestHookForm from "../components/TestHookForm";
import TestMaterialUI from "../components/TestMaterialUI";
import SideBar from "../components/SideBar";
import { todos } from "../data/testdata.json";
import { Container } from "@mui/material";

export default function MainPage() {
  return (
    <>
      <SideBar />
      <Container>
        <TestChart />
      </Container>
      <TestMaterialUI />

      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            <Link to={x.slug}>{x.todo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
