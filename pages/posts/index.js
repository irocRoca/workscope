import React from "react";
import useSWRInfinite from "swr/infinite";
import Card from "../../components/Card";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/post?page=${pageIndex}&limit=2`;
};

function Posts() {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  if (!data) return <p>loading...</p>;

  const hasReachedEnd = data && data[data.length - 1].length < 2;

  return (
    <div>
      {data.map((user, index) =>
        user.map((person) => <Card key={person._id} person={person} />)
      )}
      <button onClick={() => setSize(size + 1)} disabled={hasReachedEnd}>
        Next
      </button>
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = await Post.find({});
// }

export default Posts;
