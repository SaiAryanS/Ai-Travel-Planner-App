import { Input  } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectBudgetOptions } from '@/constants/options'
import { SelectTravelesList } from '@/constants/options'
const Createtrip = () => {
    const [place , setplace] = React.useState()
    const [formData , setFormData] = React.useState({})
    const handleInputChange = (name , value)=> {

        
            setFormData ({
                ...formData,
                [name]:value
            })
        }
        useEffect(()=>{
          console.log(formData);
        },[formData])

        const Ongeneratetrip=()=>{
            if(formData?.noOfDays>5){
                return;
            }
            console.log(formData)
        }
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 
            className='font-bold text-3xl'
            >Tell us your travel preferences</h2>
            <p
            className='mt-3 text-gray-500 text-xl'
            >
                Just provide some basic information , and our trip planner will generate
                a customized itinerary based on you preferences
            </p>
            <div className='mt-10'>
               <h2 className='text-xl my-2 font-medium'>Enter destination of your choice</h2>
               <GooglePlacesAutocomplete
               apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
               selectProps={{
               place , 
               onChange:(v)=>{setplace(v); handleInputChange('location', v)}
               }}
               />
            </div>
            <div>
            <h2 className='text-xl my-2 font-medium mt-10'>How many days are you planning to stay</h2>
            <Input placeholder="Ex-3" type="number"
                 onChange={(e)=>handleInputChange('noOfDays' , e.target.value)}
            />
          
            </div>

            <div>
            <h2 className='text-xl my-2 font-medium mt-10'>What is your Budget ?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                { SelectBudgetOptions.map((item, index)=>(
                    <div key={index}
                    onClick={()=>handleInputChange('budget' , item.title)}


                     className={`p-4  border rounded-lg hover:shadow cursor-pointer
                     ${formData?.budget==item.title&&'shadow-lg border-black'}`}>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                    </div>
                )
                )}
            </div>
            </div>
           
            <div>
            <h2 className='text-xl my-2 font-medium mt-10'>Whom do you plan on travelling with?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                { SelectTravelesList.map((item, index)=>(
                    <div key={index}
                    onClick={()=>handleInputChange('traveler' , item.people)}
                    className={`p-4  border rounded-lg hover:shadow cursor-pointer
                    ${formData?.traveler==item.people&&'shadow-lg border-black'}`}>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                    </div>
                )
                )}
            </div>
            </div>
             
             <div className='my-20 justify-center flex'>
                <Button onClick={Ongeneratetrip}>Generate trip</Button>
             </div>
        </div>
    )
}

export default Createtrip
