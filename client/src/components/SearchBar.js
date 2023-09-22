import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Form, Button } from "react-bootstrap";
import "./Search.css";
import { motion } from "framer-motion";

const SearchBar = ({ data }) => {
  const [filterData, filterDataFunc] = React.useState([]);

  function handleFilter(event) {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      filterDataFunc([]);
    } else {
      filterDataFunc(newFilter);
    }
  }

  return (
    <div style={{ margin: "auto auto" }}>
      {/* THIS IS WHERE THE SEARCH BAR COMPONENT STARTS */}
      <Form className="d-flex">
        <Form.Control
          style={{ margin: "auto auto" }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleFilter}
        />
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
          <Button
            style={{
              backgroundColor: "#121212",
              border: "none",
              color: "#6B011F",
              margin: "auto auto",
              boxShadow: "5px 10px 5px rgb(0, 0, 0, 0.5)",
            }}
          >
            <SearchIcon />
          </Button>
        </motion.div>
      </Form>
      {filterData != 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="dataResult"
        >
          {filterData.map((value, key) => {
            return (
              <a
                className="dataItem"
                key={key}
                href={value.link}
                target="_blank"
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
