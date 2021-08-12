export async function getServerSideProps(context) {
  const res2 = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data2 = await res2.json();

  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  // const data = await res.json()
  // console.log('data2',data);

  if (!data2) {
    return {
      notFound: true,
    };
  }

  return {
    props: { prop: data2 }, // will be passed to the page component as props
  };
}

const Dashboard = ({ prop }) => {
  console.log(prop);

  return <div></div>;
};

export default Dashboard;
