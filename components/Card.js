const Card = ({title}) => {
    return (
        <div className="w-60 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt=""/>
        <div className="p-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-lg font-semibold text-gray-600">Spesifikasi : </p>
          <p className="mt-1 text-gray-500 font-">Lorem ipsum carrots, enhanced undergraduate developer, 
            but they do occaecat time and vitality, Lorem ipsum carrots, 
            enhanced undergraduate developer, but they do occaecat time 
            and vitality</p>
        </div>
      </div>
    )
}

export default Card
