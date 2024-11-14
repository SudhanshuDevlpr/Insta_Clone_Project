import Instalogo from "./Instalogo";
import Search from "./Search";
import Explore from "./Explore";
import Add from "./Add";
import Home from "./Home";
import Reel from "./Reel";
import Message from "./Message";
import Heart from "./Heart";

function SideBar() {
  return (
    <>
      {/* Sidebar for medium screens and larger */}
      <div className="d-none d-md-flex flex-column flex-shrink-0 bg-white border-end border-1 border-black vh-100 sticky-top" style={{ width: "6rem" }}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center mt-5">
          <li className="nav-item">
            <a href="#" className="nav-link border-bottom rounded-0 fs-4" title="Home">
              <Instalogo style={{ fontSize: "40px" }} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link border-bottom rounded-0" title="Home">
              <Home />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Search">
              <Search />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Explore">
              <Explore />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Reels">
              <Reel />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Messages">
              <Message />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Notifications">
              <Heart />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Add">
              <Add />
            </a>
          </li>
        </ul>
        <div className="dropdown border-top mt-auto">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="https://github.com/mdo.png" alt="User Profile" width="24" height="24" className="rounded-circle" />
          </a>
        </div>
      </div>

      {/* Bottom navigation for small screens */}
      <div className="d-flex d-md-none bg-white border-top border-1 border-black fixed-bottom">
        <ul className="nav nav-pills nav-justified w-100">
          <li className="nav-item">
            <a href="#" className="nav-link" title="Home">
              <Home />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Search">
              <Search />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Explore">
              <Explore />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Reels">
              <Reel />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Messages">
              <Message />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Notifications">
              <Heart />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="Add">
              <Add />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
