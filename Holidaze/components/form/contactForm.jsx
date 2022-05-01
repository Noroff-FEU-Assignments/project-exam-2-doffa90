import {useForm} from 'react-hook-form'


function ContactForm(){

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmitForm = (values) => console.log(values);
    
    
    
    
    return(
        <section>
        <div  className="card">
  <h2  className="card-header">Contact us!</h2>
  <div  className="card-body">
    <h3  className="card-title">Any and all Inquires to Holidaze goes here!</h3>
    <p  className="card-text">Questions about our services? <br /> 
    On the look out for new business opportunities? <br />
    Get in touch with us!</p><br />
    <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="row">
        <div className="col">
        <label className="form-label" htmlFor="FirstName">First Name</label>
        <input
         className="form-control"
        type="text"
        id="FirstName"
        autoComplete="off"
        {...register('FirstName', {
            required:true,
            minLength:3
        })}
        placeholder="..."
        /> <br />
        {errors.FirstName && <span>Required, minimum 3 characters!</span>}<br/>
        </div>
        <div className="col">
        <label className="form-label" htmlFor="LastName">Last Name</label>
        <input
         className="form-control"
        type="text"
        id="LastName"
        autoComplete="off"
        {...register('LastName',{
            required:true,
            minLength:4
        })} 
        placeholder="..."
    /><br/>
                {errors.LastName && <span>Required, minimum 4 characters!</span>}<br/>
        </div>
        </div>
        <div className="Row">
        <div className="col">
       <label className="form-label" htmlFor="Email">Email</label>
        <input
        className="form-control"
        type="email"
        id="Email"
        {...register('Email', 
                {required: true, 
                    pattern: /^\S+@\S+$/i
                })}  
                placeholder="..."
            /><br/>
                        {errors.Email && <span>Required, must be in a valid email!</span>}<br/>
        </div>
  <div className="col form-label collapse" id="collapsePw" >
       <label className="form-label collapse" id="collapsePw"  htmlFor="password">Password</label>
        <input
        className="form-control"
        type="password"
        id="password"
        autoComplete="off"  
        {...register('password',{
            required:true,
            minLength:4
        })} 
        placeholder="..."
    /><br/>
    {errors.LastName && <span>Required, minimum 4 characters!</span>}<br/>
</div><button className="btn-sm btn btn-primary col" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePw" aria-expanded="false" aria-controls="collapsePw">
  Register a user!
  </button><br />
  <br />
<label for="exampleFormControlTextarea1" class="form-label">Message here</label>
  <textarea 
        name="Message" 
                id="Message" 
                cols="50" 
                rows="10"
                placeholder='...'
                {...register('Message',{
                    required:true,
                    minLength:10,
                    useWatch:true
                })}>
            </textarea><br/>
            {errors.Message && <span>Minimum 10 characters!</span>}<br/>

<button type="submit" className="btn btn-primary col">Submit!</button>

        </div>
        
    </form>
  </div>
</div>
        </section>
    )
}

export default ContactForm