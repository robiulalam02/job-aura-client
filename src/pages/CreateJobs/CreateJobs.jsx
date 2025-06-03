import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import CreateJob_Form from '../../components/CreateJob_Form/CreateJob_Form';

const CreateJobs = () => {

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        jobType: "Hybrid",
        category: "",
        applicationDeadline: "",
        salaryRange: {
            min: "",
            max: "",
            currency: "bdt"
        },
        description: "",
        company: "",
        requirements: "",
        responsibilities: "",
        hr_email: "",
        hr_name: "",
        company_logo: "",
        status: "active"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("salaryRange.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                salaryRange: {
                    ...prev.salaryRange,
                    [key]: value
                }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert comma-separated strings to arrays
        const finalData = {
            ...formData,
            requirements: formData.requirements.split(",").map(item => item.trim()),
            responsibilities: formData.responsibilities.split(",").map(item => item.trim())
        };

        console.log("Submitted Data:", finalData);

        // Post finalData to backend API

        axios.post('http://localhost:3000/jobs', {
            ...finalData
        })
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "job application submitted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }
            })
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <CreateJob_Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
    )

}

export default CreateJobs;