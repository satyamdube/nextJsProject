import {
  Image,
  Container,
  Row,
  Col,
  Carousel,
  Accordion,
  Card,
  Button,
  Form,
} from "react-bootstrap";

export async function getServerSideProps(context) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

  let myUrl = "https://10.0.0.52/mlr/api/v1/attachment/search/abhay%3A123";
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  fetch(myUrl, { agent });

  const res = await fetch(myUrl, { agent });
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { prop: data }, // will be passed to the page component as props
  };
}

const Dashboard = ({ prop }) => {
  console.log("prop", prop);

  let newData = prop.data;
  let attachmentname = prop.data.attachment_names;
  console.log(JSON.stringify(attachmentname));

  return (
    <div>
      <h1>id : {newData._id} </h1>
      {attachmentname.map((m) => (
        <div key={m.attachment_name}>
          <Card>
            <Card.Body>attachment name : {m.attachment_name}</Card.Body>
          </Card>
          <h3></h3>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
