import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/posts/${postId}}`);
        setPost(res.data.rows);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="img" />
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=is&k=20&c=Bk005G_LkUTRxHgrcEeeDq0Md7s0JEdBvqBfDn758as="
            alt="User profile"
          />
          <div className="info">
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <i className="fa-solid fa-pen-to-square single_icon"></i>
              </Link>
              <i className="fa-solid fa-trash-can single_icon"></i>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.descr}
      </div>
      <Menu />
    </div>
  );
}

export default Single;
