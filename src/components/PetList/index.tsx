import * as React from "react";
import "./index.css";
import PetCard from "./../PetCard";
import { CardDeck } from "react-bootstrap";

const PetList = () => (
  <CardDeck>
    <PetCard />
    <PetCard />
    <PetCard />
    <PetCard />
  </CardDeck>
);

export default PetList;
