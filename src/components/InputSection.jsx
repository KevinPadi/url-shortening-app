import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import LinksItem from './LinksItem'

function InputSection () {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)
  const [links, setLinks] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onDelete = (id) => {
    const newLinks = [...links]
    const link = newLinks.find((link) => link.id === id)
    const i = newLinks.indexOf(link)
    newLinks.splice(i, 1)
    setLinks(newLinks)
  }

  useEffect(() => {
    if (data) {
      const newData = data
      const newLinks = [...links, { shortLink: newData.tiny_url, originalLink: newData.url, id: uuidv4() }]      setLinks(newLinks)
    }
  }, [data])
  
  const shortenUrl = async (url) => {
    const apiUrl = 'https://api.tinyurl.com/create'
    const apiKey = 'xxOlNvW6I3aJSqZ5ZSGyg4WUGuz23wIx9bkAGE28AM8a5S5Ex7nOLh4psC2x'
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_token: apiKey,
        url
      })
    }
    const res = await fetch(apiUrl, requestData)
    const data = await res.json()

    return data
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === '') {
      setIsSubmitted(true)
    } else {
      shortenUrl(query)
        .then(resultUrl => {
          setData(resultUrl.data)
          console.log(resultUrl.data, 'url')
        })
        .catch(error => {
        })
    }
  }

  const inputClass = `w-full text-sm md:text-base px-2 md:px-5 py-3 bg-white rounded-md focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-Cyan ${isSubmitted && query.trim() === '' ? 'outline outline-Red focus:outline-Red placeholder:text-Red/50' : 'placeholder:text-Gray'}`

  return (
    <div className='w-full max-w-sm md:max-w-none mx-auto px-6 lg:px-20 xl:px-20'>
      <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-4 lg:gap-8 justify-between items-center p-5 md:p-6 lg:p-10 xl:h-32 my-10 bg-DarkViolet bg-shortenMobileBg md:bg-shortenDeskBg bg-no-repeat bg-contain md:bg-cover bg-right-top md:bg-top rounded-lg'>
        <div className='w-full xl:w-[900px] flex flex-col gap-2 justify-center'>
          <input value={query} onChange={e => { setQuery(e.target.value) }} type='text' className={inputClass} placeholder='Shorten a link here...' />
          {isSubmitted && query.trim() === '' && (
            <p className='text-Red text-xs block md:absolute italic md:top-[80px] lg:top-[100px]'>Please add a link</p>
          )}
        </div>
        <button type='submit' className='py-3 bg-Cyan text-white font-bold hover:bg-Cyan/80 hover:transition-colors duration-100 rounded-md w-full md:w-40'>Shorten It!</button>
      </form>
      <div className='flex flex-col gap-3 max-h-[320px] md:max-h-60 overflow-y-scroll'>
        {data
          ? links.map((links) => (<LinksItem links={links} onDelete={onDelete} key={links.id} />))
          : null}
      </div>
    </div>
  )
}

export default InputSection
