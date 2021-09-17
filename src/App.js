import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markDown, setMarkDown] = useState("> React Markdown ");
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
