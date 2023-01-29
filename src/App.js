import './App.css'
import { useState } from 'react'
import { faker } from '@faker-js/faker'
import Modal from 'react-modal'
// Modal code example by Ben Merryman | 2023-01-28
function fakeQuote () {
  return `${faker.lorem.sentence()} - ${faker.name.findName()}`
}

export default function App () {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [mainText, setMainText] = useState(
    'The state before you hit the button in the modal'
  )
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <div className='App'>
      <button onClick={() => openModal()}>Open Modal</button>
      <h1>{mainText}</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <h2>Here is a new Modal for a mode of YOUR choice</h2>
        <p>It could tell the user they need to login</p>
        <button onClick={() => setMainText('you hit the button in the modal!')}>
          Hit me to change the text on the main page!
        </button>
        <button onClick={() => setMainText(fakeQuote())}>
          Hit me to set random fake word quote on front page!
        </button>
        <button onClick={closeModal}>✖️ Close Modal</button>
      </Modal>
    </div>
  )
}
Modal.setAppElement('#root')
const modalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
    backgroundColor: 'white',
    border: '2px solid rgb(240, 240, 240)',
    borderRadius: '12px',
    position: 'absolute',
    height: 'fit-content',
    width: '300px',
    top: '120px',
    left: 'calc(50% - 150px)'
  }
}
