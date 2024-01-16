import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder }) {
    const[data,setData]  =useState(
        [
            {
              "author": "Edgar Allan Poe",
              "country": "United States",
              "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
              "pages": 842,
              "title": "Tales",
              "year": 1950
            },
            {
              "author": "Marcel Proust",
              "country": "France",
              "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
              "language": "French",
              "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
              "pages": 2408,
              "title": "In Search of Lost Time",
              "year": 1920
            },
            {
              "author": "Fran\u00e7ois Rabelais",
              "country": "France",
              "imageLink": "images/gargantua-and-pantagruel.jpg",
              "language": "French",
              "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
              "pages": 623,
              "title": "Gargantua and Pantagruel",
              "year": 1533
            },
            {
              "author": "Juan Rulfo",
              "country": "Mexico",
              "imageLink": "images/pedro-paramo.jpg",
              "language": "Spanish",
              "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
              "pages": 124,
              "title": "Pedro P\u00e1ramo",
              "year": 1955
            },
            {
              "author": "Rumi",
              "country": "Sultanate of Rum",
              "imageLink": "images/the-masnavi.jpg",
              "language": "Persian",
              "link": "https://en.wikipedia.org/wiki/Masnavi\n",
              "pages": 438,
              "title": "The Masnavi",
              "year": 1236
            },
            {
              "author": "Salman Rushdie",
              "country": "United Kingdom, India",
              "imageLink": "images/midnights-children.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
              "pages": 536,
              "title": "Midnight's Children",
              "year": 1981
            },
            {
              "author": "Saadi",
              "country": "Persia, Persian Empire",
              "imageLink": "images/bostan.jpg",
              "language": "Persian",
              "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
              "pages": 298,
              "title": "Bostan",
              "year": 1257
            },
            {
              "author": "Tayeb Salih",
              "country": "Sudan",
              "imageLink": "images/season-of-migration-to-the-north.jpg",
              "language": "Arabic",
              "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
              "pages": 139,
              "title": "Season of Migration to the North",
              "year": 1966
            },
            {
              "author": "Jos\u00e9 Saramago",
              "country": "Portugal",
              "imageLink": "images/blindness.jpg",
              "language": "Portuguese",
              "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
              "pages": 352,
              "title": "Blindness",
              "year": 1995
            },
            {
              "author": "William Shakespeare",
              "country": "England",
              "imageLink": "images/hamlet.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Hamlet\n",
              "pages": 432,
              "title": "Hamlet",
              "year": 1603
            },
            {
              "author": "William Shakespeare",
              "country": "England",
              "imageLink": "images/king-lear.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/King_Lear\n",
              "pages": 384,
              "title": "King Lear",
              "year": 1608
            },
            {
              "author": "William Shakespeare",
              "country": "England",
              "imageLink": "images/othello.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Othello\n",
              "pages": 314,
              "title": "Othello",
              "year": 1609
            },
            {
              "author": "Sophocles",
              "country": "Greece",
              "imageLink": "images/oedipus-the-king.jpg",
              "language": "Greek",
              "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
              "pages": 88,
              "title": "Oedipus the King",
              "year": -430
            },
            {
              "author": "Stendhal",
              "country": "France",
              "imageLink": "images/le-rouge-et-le-noir.jpg",
              "language": "French",
              "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
              "pages": 576,
              "title": "The Red and the Black",
              "year": 1830
            },
            {
              "author": "Laurence Sterne",
              "country": "England",
              "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
              "pages": 640,
              "title": "The Life And Opinions of Tristram Shandy",
              "year": 1760
            },
          ]
    )
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [finalWords,setFinalWord] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const ref = React.useRef();
  const handleData = (e) =>{
    setFinalWord([...finalWords,e.target.innerText]);
    setFilteredData([]);
    setData(data.filter((item) => item.title !== e.target.innerText));
    console.log(data)
  }
  

  return (
    <div className="search">
         <div className="selectedResult itemsAll">
        {finalWords.map((value,index)=>{
          return(
            <div className="itemsParticular" key={index}>
                <p className="elementParti">{value}
                <span onClick={() => 
                    {setFinalWord(finalWords.filter((item) => item !== value))
                    setData(...data,{title:value})
                    console.log(data)
                }
                    }>x</span>
                </p>  
            </div>
            
          )
        })}
        </div>
      <div className="searchInputs">
       
        <input
        className="searchInput"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <div className="tick">tick</div>
          ) : (
            <div onClick={clearInput}>wrong</div>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div key={key} ref={ref} onClick={(e)=>handleData(e)}>
                <p className="dataItem">
                {value.title}
              </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
