import React, { useState } from 'react'

const emptyFormData = {
    studentName: '',
    studentEmail: '',
    topic: 'React',
    rating: 0,
    feedback: ''
}
const Form = () => {
    const [formData, setFormData] = useState(emptyFormData)
    const [feedbacks, setFeedbacks] = useState([])


    const onChangeHandler = (e) => {
   
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (formData.rating == 0) {
            alert('Please you need to choose a rating.')
            return
        }

        if (formData.feedback.trim().length < 5) {
            alert('Feedback must be atleast 5 characters')
            return
        }
        setFeedbacks([...feedbacks, { ...formData, id: Date.now() }])

        setFormData(emptyFormData)

    }
    return (
        <div className='mx-auto max-w-xl'>
            <form onSubmit={submitHandler} className='rounded-xl bg-white p-6 shadow-xl'>
                <h1 className='font-bold text-2xl mb-4 text-purple-600'>Feedback form</h1>

                <label className='mb-1 block text-sm font-medium'>Student Name</label>
                <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={onChangeHandler}
                    className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-yellow-500'
                />

                <label className='mb-1 block text-sm font-medium'>Student Email</label>
                <input
                    type="email"
                    name="studentEmail"
                    required
                    value={formData.studentEmail}
                    onChange={onChangeHandler}
                    className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-yellow-500'
                />

                <label className='mb-1 block text-sm font-medium'>Topic</label>
                <select
                    name="topic"
                    value={formData.topic}
                    onChange={onChangeHandler}
                    className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-yellow-500'
                >
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="HTMLCSS">HTMLCSS</option>
                    <option value="Adavnced JS">HTMLCSS</option>
                </select>

                <label className='mb-1 block text-sm font-medium'>Ratings</label>
                <div className='mb-4 flex gap-2'>
                    {
                        [1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                onClick={() => setFormData({ ...formData, rating: num })}
                                type='button'
                                className={`h-10 w-10 rounded-lg border font-medium transition ${num <= formData.rating ? 'border-yellow-500 bg-yellow-500 text-white' : 'border-gray-300 text-gray-700 hover:border-orange-500'}`}
                            >
                                {num}
                            </button>
                        ))
                    }
                </div>

                <label className='mb-1 block text-sm font-medium'>Feedback</label>
                <textarea
                    name="feedback"
                    required
                    value={formData.feedback}
                    onChange={onChangeHandler}
                    rows={4}
                    className='mb-2 w-full border rounded-lg border-gray-300 px-3 py-2 outline-none focus:border-yellow-500'
                >

                </textarea>


                <button className='mt-2 w-full border bg-purple-500 py-2 rounded-lg font-medium text-white transition hover:bg-yellow-600'>
                    Submit
                </button>


            </form>


            <div className='mt-6 space-y-3'>
       
                {feedbacks.map(item => (
                    <div
                        key={item.id} className='rounded-xl bg-white p-4 shadow'
                    >
                        <div>
                            <h3 className='text-lg font-semibold text-gray-800'>{item.studentName} <span className='text-gray-700 text-sm'>{item.studentEmail}</span></h3>

                            <p className='mb-1 text-xs font-medium text-purple-600'>{item.topic} - {item.rating}/5</p>
                            <p className='text-gray-700'>{item.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Form