import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

function Thanks({ data }) {
    return (
        <div className="thanks_container">
            <h2>Falta pouco...</h2>
            <p>Sua opinião é muito importante, em breve você receberá um cumpom de 10% de desconto para a sua próxima compra.</p>
            <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação</h3>
            <p className="review_data">
                <span>Satisfação com o porduto: </span>
                {emojiData[data.review]}
            </p>
            <p className="review_data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks