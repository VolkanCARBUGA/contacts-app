import React, { useEffect, useState } from 'react'

function Form({ setContacts, contacts }) {

    const [form, setform] = useState({ name: "", phone: "" });
    useEffect(() => {
        setform({ name: "", phone: "" })
    }, [contacts])
    const onChangeInput = (event) => {
        setform({ ...form, [event.target.name]: event.target.value })

    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (form.name === "" || form.phone === "") {
            return false;

        }
        setContacts([...contacts, form]);


        console.log(form);
    }
    return (
        <form onSubmit={onSubmit}>
            <br></br>
            <div>
                <input type="text" name="name" placeholder='ismini yaz' style={{ borderRadius: "5px" }} value={form.name} onChange={onChangeInput} />
            </div>
            <br></br>
            <div>
                <input type="text" name="phone" placeholder='telefon numarasını yaz' style={{ borderRadius: "5px" }} value={form.phone} onChange={onChangeInput} />

            </div>
            <br></br>
            <div>
                <button type="submit" className='button'>Kaydet</button>
            </div>

        </form>
    )
}

export default Form
