import styles from "./FormCovid.module.css";

const Form = (props) => {
    
    const { handleSubmit, handleChange, formData, errors, loading, data } = props;

    return (
        <form onSubmit={handleSubmit}>
                            
        <div className={styles.formItems}>
            <label className={styles.formLabel} htmlFor="provinsi">Provinsi</label>
            <select className={styles.formInput} name="provinsi" value={formData.provinsi} onChange={handleChange}>
                <option value="">Pilih Provinsi</option>
                {data.provinces.map((province, index) => (
                    <option key={index} value={province.kota}>{province.kota}</option>
                ))}
            </select>
            {errors.provinsi && <p className={styles.error}>{errors.provinsi}</p>}
        </div>
       
        <div className={styles.formItems}>
            <label className={styles.formLabel} htmlFor="status">Status</label>
            <select className={styles.formInput} name="status" value={formData.status} onChange={handleChange}>
                <option value="">Pilih Status</option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="meninggal">Meninggal</option>
                <option value="dirawat">Dirawat</option>
            </select>
            {errors.status && <p className={styles.error}>{errors.status}</p>}
        </div>
        
        <div className={styles.formItems}>
            <label className={styles.formLabel} htmlFor="jumlah">Jumlah</label>
            <input
                className={styles.formInput}
                type="number"
                name="jumlah"
                placeholder="Enter jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                required
            />
            {errors.jumlah && <p className={styles.error}>{errors.jumlah}</p>}
        </div>
        
        {!loading && (
            <button className={styles.formButton} type="submit">
                Submit
            </button>
        )}
        {loading &&  <button className={styles.formButton}> Loading...</button>}
    </form>
    );
};


const name = () => {
 
}
export default Form;
