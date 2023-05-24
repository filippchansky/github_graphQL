import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../UI/Btn/Button";
import Input from "../UI/Input/Input";
import "./header.css";

const Header = ({searchText, setSearchText, searchQuery}) => {
    

  

  return (
    <header className="header">
      <div className="header__container container">
        <Input
          placeholder="Search"
          value={searchText}
          onChange = {(e) => setSearchText(e.target.value)}
        />
        <Button onClick = {searchQuery}>Поиск</Button>
      </div>
    </header>
  );
};

export default Header;
