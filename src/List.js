import React from 'react';

const List = ({people})=>{
 
   return(
    <>
    {people.map((Person)=>{
        const{id,name,age,image} = Person; 
        return(
            <article key = {id} className='person' >
                <img src={image} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{age } Years</p>
                </div>

            </article>
        )
    })}
    </>
   )
}
export default List