function LinksItem ({ onDelete, links }) {
  const { originalLink, shortLink, id } = links

  const onClick = () => {
    onDelete(id)
  }

  const copyToClipboard = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(shortLink)
  }

  return (
    <div className='text-left md:px-5 py-3 flex flex-col md:flex-row justify-between md:items-center bg-white rounded-md divide-y-[0.5px] md:divide-none divide-Gray/40' id={id}>
      <div className='px-3 pb-3 md:px-0 md:pb-0'>
        <p className='text-VeryDarkBlue text-sm md:text-base lg:text-lg'>{originalLink}</p>
      </div>
      <div className='px-3 pt-3 md:px-0 md:pt-0 flex flex-col md:flex-row text-center md:justify-between md:items-center gap-2 md:gap-5 w-full md:w-auto'>
        <p className='text-Cyan text-sm md:text-base lg:text-lg text-left'>{shortLink}</p>
        <button onClick={onClick} className='rounded-md bg-Red px-6 py-3 font-bold text-white hover:bg-Red/80 hover:transition-colors duration-100'>Delete</button>
        <button onClick={copyToClipboard} className='rounded-md flex items-center justify-center bg-Cyan px-6 md:px-6 md:w-24 py-3 font-bold text-white hover:bg-Cyan/80 hover:transition-colors duration-100 focus:bg-DarkViolet before:content-["Copy"] focus:before:content-["Copied!"]' />
      </div>
    </div>
  )
}

export default LinksItem
