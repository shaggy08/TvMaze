import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import "./Card.css";
import { GrAdd } from "react-icons/gr";

export const Card1 = ({ imgurl, name }) => (
  <Card className="card-img">
    <div className="card-top">
      <div className="card-add-icon">
        <GrAdd className="card-add" />
      </div>
    </div>

    <Card.Header css={{ position: "absolute", zIndex: 1, bottom: 5 }}>
      <Row className="card-row">
        <Text
          className="card-txt"
          size={12}
          weight="bold"
          transform="uppercase"
          color="white"
        >
          {name}
        </Text>
      </Row>
    </Card.Header>

    <Card.Body css={{ p: 0 }}>
      <Card.Image
        className="card-image"
        src={imgurl}
        alt="Card example background"
      />
    </Card.Body>
  </Card>
);
