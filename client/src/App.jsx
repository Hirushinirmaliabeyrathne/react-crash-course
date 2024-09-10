import { useState } from "react";
import MainHeader from "./Components/MainHeader";
import PostsList from "./Components/PostsList";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(){
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false); // Close the NewPost modal
}

  
    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
            <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
            </main>
            
        </>
    );
}

export default App;
