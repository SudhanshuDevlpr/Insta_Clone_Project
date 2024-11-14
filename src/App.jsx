import SideBar from "./Sidebar/sidebar"
import Header from "./Header/Header"
import Card from "./body/Card"
function App() {
  return <>
  <div className="container-fluid">
    <div className="row d-flex justify-content-center">
      <div className="col-1">
        
      <SideBar></SideBar>
      </div>
      <div className="col-7">
      <Header></Header>
      <Card></Card>
      </div>
      <div className="col-3"></div>

    </div>
  </div>
  </>
}
export default App
