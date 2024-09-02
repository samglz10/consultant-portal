import { useState } from "react";

const WorkOrderForm =()=>{
    const [formData, setFormData] = useState({
        id:'',
        clientFirstName:'',
        clientLastName:'',
        clientAddress: '',
        clientPhoneNumber:'',
        clientEmail:'',
        workRequested:'',
        locationOfWork:'',
        completionDate: '',
    });

    const handleInputChange = (e)=>{
        const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Form Data:', formData);
        // Here you could do something with the form data, like sending it to an API
      };
    return (
    <form id="workOrderForm">
    <div className="work-container">
        <h3>Client Information:</h3>
            <label htmlFor="clientFirstName">Client First Name:  </label>
                <input 
                    type="text" 
                    id="clientFirstName" 
                    name="clientFirstName"
                    value={formData.clientFirstName}
                    onChange={handleInputChange} 
                    required/>
            <label htmlFor="clientLastName">Client Last Name:  </label>
                <input 
                    type="text" 
                    id="clientLastName" 
                    name="clientLastName" 
                    value={formData.clientLastName}
                    onChange={handleInputChange} 
                    required/>
            <label htmlFor="clientAddress">Client Address:  </label>
                <input 
                    type="text" 
                    id="clientAddress" 
                    name="clientAddress"
                    value={formData.clientAddress}
                    onChange={handleInputChange} 
                    required/>
        
            <label htmlFor="clientPhoneNumber">Phone Number:  </label>
                <input 
                    type="number" 
                    id="clientPhoneNumber" 
                    name="clientPhoneNumber"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={formData.clientPhoneNumber}
                    onChange={handleInputChange}  
                    required/>
           
            <label htmlFor="clientEmail">Email Address:  </label>
                <input 
                    type="email" 
                    id="clientEmail" 
                    name="clientEmail" 
                    value={formData.clientEmail}
                    onChange={handleInputChange} 
                    required/>
    </div>
    <div className="work-container">
        <h3>Work Description:</h3>
            <label htmlFor="workRequested">Work Requested: </label>
            <textarea 
                id="workRequested" 
                name="workRequested" 
                rows="4" 
                value={formData.workRequested}
                onChange={handleInputChange} 
                required></textarea>

            <label htmlFor="locationOfWork">Location of Work: </label>
            <input 
                type="text" 
                id="locationOfWork" 
                name="locationOfWork" 
                value={formData.locationOfWork}
                onChange={handleInputChange} 
                required/>
           
            <label htmlFor="completionDate">When would you like for this request to be completed?</label>
            <span>Please allow at least 7 days for the request to be completed</span>
            <input 
                type="date" 
                id="completionDate" 
                name="completionDate" 
                value={formData.completionDate}
                onChange={handleInputChange} 
                required/>
     </div>
        <button type="button">Submit Work Order</button>
    </form>
)
}
export default WorkOrderForm;