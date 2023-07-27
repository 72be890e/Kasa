import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../assets/data.json";
import Gallery from "../../components/Gallery/Gallery";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";

function Housing() {
  const { housingId } = useParams();
  const navigate = useNavigate();
  const housingData = data.find((i) => i.id === housingId);

  useEffect(() => {
    if (!housingData) navigate("/not-found");
  });

  if (housingData) {
    return (
      <section className="page-container housing-container">
        <Gallery images={housingData.pictures} />

        <div className="info-container">
          <div className="info-tags">
            <div className="info-content">
              <h1>{housingData.title}</h1>
              <h2>{housingData.location}</h2>
            </div>
            <div className="info-tags-content">
              {housingData.tags.map((tag) => (
                <Tag key={`${housingData.id}-${tag}`} tag={tag} />
              ))}
            </div>
          </div>

          <div className="info-stars-host-container">
            <Host
              hostName={housingData.host.name}
              hostPicture={housingData.host.picture}
            />

            <Rate value={parseInt(housingData.rating)} />
          </div>
        </div>

        <div className="housing-collapse-container">
          <Collapse
            description={`Description`}
            content={housingData.description}
          />
          <Collapse
            description={`Equipements`}
            content={housingData.equipments}
          />
        </div>
      </section>
    );
  }
}

export default Housing;
