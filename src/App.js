import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { Editor as Editorrr, EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import storedState from "./storedState.json";
// console.log(storedState);
const App = () => {

  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
);

  const [styledState, setStyledState] = useState(convertToRaw(editorState.getCurrentContent()))



  const contentState = convertFromRaw(styledState);
  const state = EditorState.createWithContent(contentState);

  useEffect(() => {
    // console.log(editorState.getCurrentContent());
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // console.log(editorState.getCurrentContent().getPlainText());
    console.log((convertToRaw(editorState.getCurrentContent())));
    setStyledState(convertToRaw(editorState.getCurrentContent()))



  }, [editorState]);

  return (
    <>
    <div>
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>

    </div>
    <div className="App">
      <Editorrr editorState={state} readOnly={true} />
    </div>
    </>
  );
};

export default App;
