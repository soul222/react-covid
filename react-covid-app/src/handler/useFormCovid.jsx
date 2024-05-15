import { useState } from "react";

const useFormCovid = () => {
    
    const [errors, setErrors] = useState({});
    
    const [formData, setFormData] = useState({
        provinsi: "",
        status: "",
        jumlah: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let newErrors = { ...errors };

        if (name === "provinsi" && value === "") {
            newErrors.provinsi = "Provinsi harus dipilih";
        } else {
            delete newErrors.provinsi;
        }

        if (name === "status" && value === "") {
            newErrors.status = "Status harus dipilih";
        } else {
            delete newErrors.status;
        }

        if (name === "jumlah" && (value === "" || isNaN(value))) {
            newErrors.jumlah = "Jumlah harus diisi dengan angka";
        } else {
            delete newErrors.jumlah;
        }

        setFormData({ ...formData, [name]: value });
        setErrors(newErrors);
    };

    const resetForm = () => {
        setFormData({ provinsi: "", status: "", jumlah: "" });
        setErrors({});
    };

    return { formData, handleChange, resetForm, errors };

};

export default useFormCovid;
