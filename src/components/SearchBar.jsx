export default function SearchBar(){
    return (
        <nav className="p-20 flex flex-col items-center space-y-10">
            <ul className="flex space-x-16 border-b border-b-yellow-600 pb-5 px-24">
                <li>Best Match</li>                
                <li>Highest Rated</li>                
                <li>Most Reviewed</li>                
            </ul>
            <section className="space-x-6">
                <input type="text" placeholder="Search Businesses" className="p-2 pl-3 pr-20 rounded-lg border"/>
                <input type="text" placeholder="Where?" className="p-2 pl-3 pr-20 rounded-lg border"/>
            </section>
            <button className="bg-yellow-600 text-white py-3 px-10 rounded-md">Let's Go</button>
        </nav>
    )
}