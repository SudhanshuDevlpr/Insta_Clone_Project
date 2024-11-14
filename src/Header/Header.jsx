
import Story from "./story";
function Header() {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowY: "auto",
              maxHeight: "150px",
              paddingBottom: "10px",
              gap: "15px",
            }}
          >
            {/* Hide scrollbar in Webkit browsers */}
            <style>
              {`
                ::-webkit-scrollbar {
                  display: none;
                }
                * {
                  scrollbar-width: none;
                }
              `}
            </style>

            {/* Circle Avatars */}
            <Story src="https://via.placeholder.com/150?text=User+1" alt="User 1" />
            <Story src="https://via.placeholder.com/150?text=User+2" alt="User 2" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            <Story src="https://via.placeholder.com/150?text=User+3" alt="User 3" />
            {/* Add more CircleAvatar components as needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
