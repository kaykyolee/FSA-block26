import {useState, useEffect} from 'react'


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
   
const [userdetails, setUserdetails] = useState({})


useEffect(()=>{
    async function fetchSingleContact() {
        try {
             const result = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
             );
        
             const singleContactResults = await result.json();
    
             setUserdetails(singleContactResults);
            
             //update with results
        } catch (error) {
             setError(error);
        }
   }
   fetchSingleContact();
},[])
console.log(userdetails)

// console.log("line 27" + userdetails.name)
return (
    <div>
{userdetails.name}<br/>

{userdetails.company?.bs}
    </div>
)
}

//was reading state with empty object before it was filled, so it couldn't find the child of the company property (company had not been filled yet)