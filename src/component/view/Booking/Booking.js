import { API_KEY, API_URL, IMAGE_BASE_URL, API_IMG, BASE_URL } from "./../../Config.js";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainImage from '../MainImage/MainImage.js';
import { Row, Col } from 'antd';
import AntCard from "../Commons/AntCard.js";

function Booking() {
  const { contentId } = useParams();
  const [apiData, setApiData] = useState(null);

  const [apiCard, setApiCard] = useState([]);


  useEffect(() => {
    const endpointData = `${BASE_URL}numOfRows=3&pageNo=1&MobileOS=ETC&MobileApp=cmad&serviceKey=${API_KEY}&_type=json`;

    fetch(endpointData)
      .then(response => response.json())
      .then(data => {
        const items = data.response.body.items.item[2];
        setApiData(items);
        // console.log(items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    const endpointData = `${BASE_URL}numOfRows=22&pageNo=3&MobileOS=ETC&MobileApp=cmad&serviceKey=${API_KEY}&_type=json`;;

    fetch(endpointData)
      .then(response => response.json())
      .then(response => {
        const items = response.response.body.items.item;
        const exportCard = items.map(item => ({
          firstImageUrl: item.firstImageUrl,
          facltNm: item.facltNm,
          addr1: item.addr1,
        }));
        setApiCard(exportCard);
        console.log(apiCard);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>
      {/* {apiData && (
        <MainImage
          image={apiData.firstImageUrl}
        />
      )} */}
      <div style={{ display: 'block', width: '80%', margin: '0 auto', marginTop: '50px', height: '1200px', }}>
        {apiCard && (
          <Row gutter={[10, 10]} style={{ height: '70px', }}>
            {apiCard
              .filter(card => card.firstImageUrl !== "")
              .map((card, index) => (
                <React.Fragment key={index}>
                  <AntCard
                    path={card.firstImageUrl}
                    campName={card.facltNm}
                    campAddr={card.addr1}
                    style={{ height: '70px', }}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </>
  );
}
export default Booking;

