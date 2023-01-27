import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/home/Home"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
