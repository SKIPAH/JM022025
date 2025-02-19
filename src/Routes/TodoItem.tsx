import { useParams } from "react-router";
import { todos as items } from "../data/testdata.json";

export default function TodoItem() {
  const { slug } = useParams();

  const item = items.find((x) => x.slug === slug);

  if (!item) {
    return <div>Todo Item Not Found</div>;
  }
  return (
    <div>
      <h1>TodoItem</h1>
      <p>{item.id}</p>
      <p>{item.todo}</p>
      <p>{item.slug}</p>
    </div>
  );
}
