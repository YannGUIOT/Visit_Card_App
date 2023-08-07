import { Link } from "react-router-dom";

export const Other = () => {

  return (
        <>
          <h1>Other Page</h1>
          <div className="slugs">
            <ul>
              <li className="card"><Link to="/other/slug1"> Slug 1 </Link></li>
              <li className="card"><Link to="/other/slug2"> Slug 2 </Link></li>
              <li className="card"><Link to="/other/slug3"> Slug 3 </Link></li>
            </ul>
          </div>
        </>
  );
}