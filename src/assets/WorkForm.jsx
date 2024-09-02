const WorkOrderForm =()=>{
    
    return (
    <form id="workOrderForm">
    <div className="work-container">
        <h3>Client Information:</h3>
            <label htmlFor="clientName">Client Name:  </label>
                <input type="text" id="clientName" name="clientName" required/>
           
            <label htmlFor="clientAddress">Client Address:  </label>
                <input type="text" id="clientAddress" name="clientAddress" required/>
           
            <label htmlFor="phoneNumber">Phone Number:  </label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required/>
           
            <label htmlFor="emailAddress">Email Address:  </label>
                <input type="email" id="emailAddress" name="emailAddress" required/>
    </div>
    <div className="work-container">
        <h3>Work Description:</h3>
            <label htmlFor="workRequested">Work Requested: </label>
            <textarea id="workRequested" name="workRequested" rows="4" required></textarea>

            <label htmlFor="locationOfWork">Location of Work: </label>
            <input type="text" id="locationOfWork" name="locationOfWork" required/>
           
            <label htmlFor="completionDate">When would you like for this request to be completed?</label>
            <span>Please allow at least 7 days for the request to be completed</span>
            <input type="date" id="completionDate" name="completionDate" required/>
     </div>
        <button type="button">Submit Work Order</button>
    </form>
)
}
export default WorkOrderForm;