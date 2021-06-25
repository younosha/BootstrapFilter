import React, { useEffect, useState } from "react";
import { Card } from "../src/components/Card/Card";
import { Loader } from "../src/components/Loader/Loader";
import axios from "axios";

function App() {
  const [content, setContent] = useState([]);
  const [contentCopy, setContentCopy] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedFilter2, setSelectedFilter2] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);
  const [filteredContentCopy, setFilteredContentCopy] = useState([]);
  const [windowWidth, setWindowWidth] = useState();
  const getData = async () => {
    const res = await axios.get(`https://planhome.online/ajax/flatfeed.php`);
    setContent(res.data);
    setContentCopy(res.data);
  };

  const sortFunc = () => {
    switch (selectedFilter) {
      case "value0":
        setFilteredContent([]);
        break;
      case "value1":
        setFilteredContent([]);
        const newArr1 = [...content];
        newArr1.sort((a, b) => {
          if (Number(a.price) > Number(b.price)) {
            return 1;
          } else if (Number(a.price) < Number(b.price)) {
            return -1;
          }
        });
        setFilteredContent(newArr1);
        setFilteredContentCopy(newArr1);
        break;
      case "value2":
        setFilteredContent([]);
        const newArr2 = [...content];
        newArr2.sort((a, b) => {
          if (Number(a.price) < Number(b.price)) {
            return 1;
          } else if (Number(a.price) > Number(b.price)) {
            return -1;
          }
        });
        setFilteredContent(newArr2);
        setFilteredContentCopy(newArr2);
        break;
      default:
        break;
    }
  };

  const filterFunc = () => {
    if (filteredContent.length > 0) {
      switch (selectedFilter2) {
        case "value0":
          setFilteredContent(filteredContentCopy)
          break;
        case "value1":
          const newArr = [...filteredContentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Диван")) {
              return el
            }
          })
          setFilteredContent(newArr)
          break;
        case "value2":
          const newArr1 = [...filteredContentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Кровать")) {
              return el
            }
          })
          setFilteredContent(newArr1)
          break;
        case "value3":
          const newArr2 = [...filteredContentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Тумба")) {
              return el
            }
          })
          setFilteredContent(newArr2)
          break;
        case "value4":
          const newArr3 = [...filteredContentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Шкаф")) {
              return el
            }
          })
          setFilteredContent(newArr3)
          break;
      }
    } else {
      switch (selectedFilter2) {
        case "value0":
          setContent(contentCopy)
          break;
        case "value1":
          const newArr = [...contentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Диван")) {
              return el
            }
          })
          setContent(newArr)
          break;
        case "value2":
          const newArr1 = [...contentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Кровать")) {
              return el
            }
          })
          setContent(newArr1)
          break;
        case "value3":
          const newArr2 = [...contentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Тумба")) {
              return el
            }
          })
          setContent(newArr2)
          break;
        case "value4":
          const newArr3 = [...contentCopy].filter((el) => {
            if (el.type && el.type.length > 0 && el.type.includes("Шкаф")) {
              return el
            }
          })
          setContent(newArr3)
          break;
      }
    }
  }

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    sortFunc();
  }, [selectedFilter]);

  useEffect(() => {
    filterFunc();
  }, [selectedFilter2]);

  return (
    <div class="container">
      {content && content.length > 0 ? (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "400px" }}>

              <div>
                <h3>Сортировка:</h3>
                <select
                  name="select"
                  style={{ padding: "10px" }}
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="value0">---</option>
                  <option value="value1">Цена по возрастанию</option>
                  <option value="value2">Цена по убыванию</option>
                </select>
              </div>
              <div>
                <h3>Категории:</h3>
                <select
                  name="select2"
                  style={{ padding: "10px" }}
                  value={selectedFilter2}
                  onChange={(e) => setSelectedFilter2(e.target.value)}
                >
                  <option value="value0">---</option>
                  <option value="value1">Диваны</option>
                  <option value="value2">Кровати</option>
                  <option value="value3">Тумбы</option>
                  <option value="value4">Шкафы</option>
                </select>
              </div>
            </div>
          </div>
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: `${windowWidth < 768 ? "center" : "space-between"}`,
            }}
          >
            {(filteredContent.length > 0 ? filteredContent : content).map(
              (el) => (
                <Card
                  type={el.type}
                  name={el.name}
                  brand={el.brand}
                  section={el.section}
                  price={el.price}
                  previewImg={el.preview_img}
                />
              )
            )}
          </div></>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
