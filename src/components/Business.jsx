export default function Business(props){
 
    return(
       <section className="mx-auto mb-10">
        <picture width>
            <img className="h-80 w-80" src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg" alt="" />
        </picture>
        <section>
            <h2 className="font-bold tracking-wider my-2 text-2xl">MarginOtto Pizzeria</h2>
            <section className="flex justify-between">
                <article>
                    <p> 1010 Paddington Way</p>
                    <p> Bordertown </p>
                    <p> NY, 10101 </p>
                </article>
                <article className="flex flex-col items-end">
                    <h3 className=" text-xl text-yellow-600 font-extrabold tracking-wider">Italian</h3>
                    <p className=" text-md text-yellow-600"> 4.5 stars</p>
                    <p className="text-sm"> 90 reviews</p>
                </article>
            </section>
        </section>
       </section>
    )
}

