import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import * as Styled from "./MainListSection.styled";
import MainListFragment from "./MainListFragment";
import { dummyData, currentLocation } from "./MainListDummyData";
import { distanceCalc } from "../../utils/DistCalculator";

const MainListSection = () => {
  
  //! 서버 연동시 다음 주석해제
  // const [main, setMain] = useState([]);

  // const mainSearchHandle = (data) => {
  //   setMain(data);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/posts/cafe-list", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setMain(res.data.data);
  //     });
  // }, []);


  const { lat: currLat, long: currLong} = currentLocation;

  const listMap = dummyData.map(({id, title, title_img, lat, long, likes_hash_tags}) => {
    let dist = Math.round((distanceCalc(currLat, currLong, lat, long) + Number.EPSILON) * 100) / 100;
    return <MainListFragment key={id} title={title} title_img={title_img} dist={dist} likes_hash_tags={likes_hash_tags} />
  })

  
  return (
    <IconContext.Provider value={{ color: "#FAD79B", size: 64 }}>
      <Styled.MainSectionSection>
        {listMap}

        {/* {main === null ? (
          <h3>로딩중</h3>
        ) : ( 
          main.map((fill) => {
            return (
              <MainSectionFragment
                id={fill.id}
                title={fill.title}
                title_img={fill.title_img}
                likes_hash_tags={fill.likes_hash_tags}
                lat={fill.lat}
                long={fill.long}
                mainSearchHandle={mainSearchHandle}
              />
            );
          })
        )} */}
      </Styled.MainSectionSection>
    </IconContext.Provider>
  );
}
export default MainListSection;

// {!main ? (
//   <h3>로딩중</h3>
// ) : (
//   main.map((fill) => {
//     return (
//       <MainSectionFragment
//         contents={fill}
//         key={fill.id}
//         mainSearchHandle={mainSearchHandle}
//       />
//     );
//   })
// )}
