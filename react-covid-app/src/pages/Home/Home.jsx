import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Hero/Hero";
import IndonesiaSection from "../../components/IndonesiaSection/IndonesiaSection";
import ProvinsiTable from "../../components/ProvinsiTable/ProvinsiTable";
import FormCovid from "../../components/FormCovid/FormCovid";
import Footer from "../../components/Footer/Footer";
import useCovid from "../../handler/useCovid";
function HomePage() {
  const { covidData, updateProvinsiData } = useCovid();
  const [covidDataState, setCovidDataState] = useState(covidData);

  return (
    <>
      <Navbar />
      <Home />
      <IndonesiaSection />
      <ProvinsiTable covidData={covidDataState} />
      <FormCovid
        updateProvinsiData={updateProvinsiData}
        covidData={covidDataState}
        setCovidData={setCovidDataState}
      />
      <Footer />
    </>
  );
}

export default HomePage;
