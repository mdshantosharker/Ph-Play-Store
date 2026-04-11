import React from "react";
import { useLoaderData, useParams } from "react-router";
// import useApps from "../../hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  //   const { apps } = useApps();
  const expectedApp = apps.find((app) => String(app.id) === id);
  console.log(expectedApp);

  return (
    <>
      <div>
        <div></div>
        <img src={expectedApp.image} alt="" />
        <h2>{expectedApp.title}</h2>
        <p>Developed by:{expectedApp.companyName}</p>
      </div>
    </>
  );
};

export default AppDetails;
