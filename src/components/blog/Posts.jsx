import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <h2>Forensics</h2>
          <Link to="/ctfs/forensics-101">
            <h4 class="font-weight-light">[EASY] Forensics 101</h4>  
          </Link>
          <Link to="/ctfs/rubber-duck">
            <h4 class="font-weight-light">[EASY] Rubber Duck</h4>
          </Link>
      </div>
    </div>
  );
}

export default Posts;