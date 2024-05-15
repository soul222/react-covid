import { useState } from "react";
import { Element } from "react-scroll";
import styles from "./FormCovid.module.css";
import data from "../../utils/constants/provinces";
import Form from "../Form/Form";
import useFormCovid from "../../handler/useFormCovid";
import formImage from "../../assets/formImage.svg";
const FormCovid = (props) => {

    const { updateProvinsiData, covidData, setCovidData } = props;
    const { formData, handleChange, resetForm, errors } = useFormCovid();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            setLoading(true);
            setTimeout(() => {
                const selectedProvinceIndex = covidData.findIndex(province => province.kota === formData.provinsi);
                const updatedData = [...covidData];
                updatedData[selectedProvinceIndex][formData.status] = formData.jumlah;
                updateProvinsiData(data.provinces)
                setCovidData(updatedData);
                resetForm();
                setLoading(false);
                localStorage.setItem('provinsiData', JSON.stringify(updatedData));
                window.location.href="#provinsi"
            }, 800);
        } else {
            console.log("Ada error di form ini:", errors);
        }
    };

    return (
        <>
            <Element className={styles.container} name="global">
                <section className={styles.formAddCovid}>
                    <div className={styles.formImage}>
                        <img  src={formImage} alt="Movie-img" />
                    </div>
                    <div className={styles.formDescription}>
                        <h2>Form Covid</h2>
                        <Form 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        formData={formData}
                        errors={errors}
                        loading={loading}
                        data={data}
                        />
                    </div>
                </section>
            </Element>
        </>
    );
};

export default FormCovid;
