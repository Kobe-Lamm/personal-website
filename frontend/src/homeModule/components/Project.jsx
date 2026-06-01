const Project = ({project}) => {
    return (
        <div className='rounded-lg overflow-scroll cursor-pointer border p-3 transition duration-400 hover:scale-105'>
            <div>
                <img className='w-100 h-120 rounded-lg' src={project.image}></img>
            </div>
            <div className='flex align-middle items-center gap-5'>
                <h3 className='text-2xl font-medium'>{project.name}</h3>
            </div>
        </div>
  )
}

export default Project