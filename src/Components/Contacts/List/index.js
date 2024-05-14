import React,{useState} from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");
    const filterded = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        })
    })
    console.log(filterded)
    return (
        <div>
            <input placeholder='Arama yapın' value={filterText} style={{ borderRadius: "5px" }} onChange={event => setFilterText(event.target.value)}/>
            <ul className='list'>
                {filterded.map((contact, index) => <li key={index}><span>{contact.name}</span> <span>{contact.phone}</span></li>)}
            </ul>
            <p>{contacts.length} kişi Var</p>
            <p>{filterded.length} kişi bulundu</p>
        </div>
    )
}

export default List
