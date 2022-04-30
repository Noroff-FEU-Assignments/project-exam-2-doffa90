


export default function BookingDetails() {

    return(
        <form action="">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <label htmlFor="checkin-date">Check-In</label>
                <input type="date" id="checkin-date" name="checkin" required/>            
                <label htmlFor="checkout-date">Check-Out</label>             
                <input type="date" id="checkout-date" name="checkout" required/>              
                <label htmlFor="guests">Guests</label>            
                <input type='number' name="guests" id="totalGuests" min={1}/>
                <br />
                <label htmlFor="rooms">Rooms</label>  
                <input type="number" name="rooms" id="totalRooms" min={1} max={5}/>
                <button type='submit' className="btn btn-primary">Search!</button>
                </form>
        );
    }