import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);
  
  switch(postSlug) {
    case "forensics-101":
      return (
        <div className="home">
          <div class="container">
              {postSlug == "forensics-101" && 
              <h1 className="mt-5">This is a Post Title</h1>
              }
              <h6 className="mb-5">The post slug is, {postSlug}</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
          </div>
        </div>
      );
    case "rubber-duck":
      return (
        <h6>hi</h6>
      );  
  }
}

export default Post;