import { useState } from "react";
import FormCom from "./components/Form";
import Tables from "./components/Table";

function App() {
  const [lists, setLists] = useState<string[]>([]);
  const [message, setMessage] = useState<null | string | undefined>(null);
  const [index, setIndex] = useState<number>(0);

  // push methods
  const handleClick = (str: string) => setLists([...lists, str]);
  // get edit methods

  const editMessage = (id: number) => {
    const result = lists.find((element, index) => index === id);
    setMessage(result);
    setIndex(id);
  };

  const endEditMessage = (message: string, id = index) => {
    const result = lists.map((element, index) =>
      index === id ? (element = message) : element
    );
    setLists(result);
  };
  // delete methods
  const deleteMessage = (id: number) => {
    const result = lists.filter((element, index) => index !== id);
    setLists(result);
  };

  return (
    <main>
      <div className="container">
        <div className="app">
          <h1 className="mb-3"> Task Manager </h1>
          <FormCom
            message={message}
            endEditMessage={endEditMessage}
            handleClick={handleClick}
            setMessage={setMessage}
          />
          <Tables
            lists={lists}
            editMessage={editMessage}
            deleteMessage={deleteMessage}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
