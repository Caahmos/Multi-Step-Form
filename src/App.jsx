import { useState } from 'react'
import './App.css'
import { FiSend } from 'react-icons/fi'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import UserForm from './components/form/UserForm'
import ReviewForm from './components/form/ReviewForm'
import Thanks from './components/form/Thanks'
import Steps from './components/layouts/Steps'

import useForm from './hooks/useForm'

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: ''
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const listComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ]
  
  const { currentStep, currentComponent, atualizarStep, isFirstStep, isLastStep } = useForm(listComponents)

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>Agradecemos pela sua compra, preencha o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form_container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => { atualizarStep(currentStep + 1, e) }}>
          <div className="inputs_container">
            {currentComponent}
          </div>
          <div className="actions">

            {
              isFirstStep ? (
                <>
                </>
              ) : (
                <button type='button' onClick={() => { atualizarStep(currentStep - 1) }}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )

            }

            {
              isLastStep ? (
                <button type="submit">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              ) : (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              )
            }

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
