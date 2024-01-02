import React, { useState } from 'react';
import './Quiz.css'
import { motion as m } from 'framer-motion'

const Quiz = () => {
    const questions = [
        /*{
            questionText: ' Genre : ',
            answerOptions: [
                { answerText: 'Masculin'},
                { answerText: 'Féminin'},
            ],
        },
        {
            questionText: ' Âge :',
            answerOptions: [
                { answerText: 'Moins de 18 ans'},
                { answerText: '8-25 ans'},
                { answerText: '26-35 ans'},
                { answerText: '46-55 ans'},
                { answerText: '56 ans et plus'},
            ],
        },
        {
            questionText: 'État civil :',
            answerOptions: [
                { answerText: ' Célibataire'},
                { answerText: 'Marié(e)'},
                { answerText: 'Divorcé(e)'},
                { answerText: 'Veuf/Veuve'},
            ],
        },
        {
            questionText: "Niveau d'éducation :",
            answerOptions: [
                { answerText: 'Études primaires' },
                { answerText: 'Études secondaires' },
                { answerText: 'Études supérieures (Baccalauréat, Licence, Master)' },
                { answerText: 'Études postdoctorale ( Doctorat)' },
            ],
        },
        {
            questionText: ' Situation professionnelle :',
            answerOptions: [
                { answerText: 'Étudiant'},
                { answerText: 'Employé à plein temps'},
                { answerText: 'Employé à temps partiel'},
                { answerText: 'Indépendant/Entrepreneur'},
                { answerText: 'Sans emploi'},
                { answerText: 'Retraité(e)'},
            ],
        },*/
        {
            questionText: "À quelle fréquence jouez-vous aux jeux vidéo ?",
            answerOptions: [
                { answerText: 'Moins d\'une heure par jour' },
                { answerText: '1 à 2 heures par jour' },
                { answerText: '2 à 4 heures par jour' },
                { answerText: 'Plus de 4 heures par jour' },
            ],
        },
        {
            questionText: "Quelle importance accordiez-vous aux jeux vidéo par rapport à d'autres activités ?",
            answerOptions: [
                { answerText: 'Moins importante' },
                { answerText: 'Aussi importante' },
                { answerText: 'Plus importante' },
            ],
        },
        {
            questionText: " Quel est l'impact des jeux vidéo sur vos relations sociales ?",
            answerOptions: [
                { answerText: 'Aucun impact' },
                { answerText: 'Légère altération (moins de contact)' },
                { answerText: 'Impact significatif (relations négligées)' },
            ],
        },
        {
            questionText: " Avez-vous déjà menti à propos du temps passé à jouer aux jeux vidéo ?",
            answerOptions: [
                { answerText: 'Jamais' },
                { answerText: 'Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: " Comment réagissez-vous lorsque vous ne pouvez pas jouer aux jeux vidéo ?",
            answerOptions: [
                { answerText: 'Aucune réaction particulière' },
                { answerText: 'Légère déception' },
                { answerText: 'Irritabilité ou frustration' },
                { answerText: 'Besoin urgent de jouer' },
            ],
        },
        {
            questionText: " Avez-vous déjà ressenti un besoin croissant de jouer pour obtenir la même sensation de plaisir ou d'excitation ?",
            answerOptions: [
                { answerText: 'Non, jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: "Dans quelle mesure les jeux vidéo affectent-ils votre sommeil ?",
            answerOptions: [
                { answerText: 'Aucun impact' },
                { answerText: 'Légère perturbation' },
                { answerText: 'Insomnie occasionnelle' },
                { answerText: 'Insomnie fréquente' },
            ],
        },
        {
            questionText: "Avez-vous déjà négligé des responsabilités professionnelles ou scolaires à cause des jeux vidéo ?",
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: " Avez-vous essayé de réduire votre temps de jeu sans succès ?",
            answerOptions: [
                { answerText: 'Oui, avec succès' },
                { answerText: 'Oui, mais sans succès' },
                { answerText: 'Non, je n\'ai pas essayé' },
            ],
        },
        {
            questionText: " Comment vous sentez-vous lorsque vous ne jouez pas aux jeux vidéo pendant une longue période ?",
            answerOptions: [
                { answerText: 'Indifférent' },
                { answerText: 'Ennui léger' },
                { answerText: 'Irritabilité ou agitation' },
                { answerText: 'Dépression ou anxiété' },
            ],
        },
        {
            questionText: "Avez-vous déjà emprunté de l'argent pour acheter des jeux vidéo ou du contenu lié aux jeux ?",
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: " Comment décririez-vous votre niveau de concentration pendant que vous jouez aux jeux vidéo ?",
            answerOptions: [
                { answerText: 'Excellente' },
                { answerText: 'Bonne' },
                { answerText: 'Moyenne' },
                { answerText: 'Faible' },
            ],
        },
        {
            questionText: "Avez-vous déjà ressenti des symptômes physiques tels que des maux de tête, des douleurs musculaires ou des troubles de la vision à cause d'une session de jeu prolongée ?",
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: " Les jeux vidéo ont-ils eu un impact négatif sur votre productivité au travail ou à l'école ?",
            answerOptions: [
                { answerText: 'Aucun impact' },
                { answerText: 'Léger impact' },
                { answerText: 'Impact modéré' },
                { answerText: 'Impact significatif' },
            ],
        },
        {
            questionText: " Combien de fois avez-vous négligé des activités importantes pour jouer aux jeux vidéo (ex : hygiène personnelle, tâches ménagères) ?",
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: "Avez-vous déjà eu des disputes familiales ou des conflits avec des amis à cause de votre temps passé à jouer aux jeux vidéo ?",
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: ' Quel est votre état émotionnel après avoir joué à des jeux vidéo pendant de longues périodes ?',
            answerOptions: [
                { answerText: 'Énergisé et heureux' },
                { answerText: ' Fatigué mais satisfait' },
                { answerText: 'Irrité ou déprimé' },
                { answerText: 'Anxieux ou stressé' },
            ],
        },
        {
            questionText: ' Avez-vous déjà manqué des événements sociaux pour jouer aux jeux vidéo ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Avez-vous développé des routines spécifiques ou des rituels avant ou pendant le jeu vidéo (ex : superstitions, préparation spécifique) ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Ressentez-vous le besoin constant de vérifier les mises à jour, les nouvelles versions ou les annonces de jeux vidéo ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Combien de temps par jour passez-vous à penser aux jeux vidéo lorsque vous ne jouez pas ?',
            answerOptions: [
                { answerText: 'Quasiment jamais' },
                { answerText: ' Moins d\'une heure' },
                { answerText: ' 1 à 2 heures' },
                { answerText: 'lus de 2 heures' },
            ],
        },
        {
            questionText: ' Avez-vous déjà caché ou minimisé la quantité de temps que vous passez à jouer aux jeux vidéo à vos proches ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Ressentez-vous souvent de la culpabilité après avoir joué aux jeux vidéo pour une longue période ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Avez-vous déjà manqué des engagements personnels ou professionnels en raison de sessions de jeu prolongées ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Avez-vous eu des problèmes de mémoire ou de concentration en dehors du jeu après une session de jeu prolongée ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: ' Les jeux vidéo ont-ils eu un impact négatif sur votre vie sentimentale ?',
            answerOptions: [
                { answerText: ' Aucun impact' },
                { answerText: ' Léger impact' },
                { answerText: 'Impact modéré' },
                { answerText: 'Impact significatif' },
            ],
        },
        {
            questionText: ' Avez-vous déjà sacrifié des activités physiques ou sportives pour jouer aux jeux vidéo ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Ressentez-vous le besoin de jouer aux jeux vidéo pour échapper à des problèmes ou à des sentiments négatifs ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: ' Avez-vous déjà ressenti des sautes d\'humeur importantes lorsque vous ne pouviez pas jouer aux jeux vidéo ?',
            answerOptions: [
                { answerText: 'jamais' },
                { answerText: ' Rarement' },
                { answerText: 'Parfois' },
                { answerText: 'Fréquemment' },
            ],
        },
        {
            questionText: 'Comment évalueriez-vous votre niveau de dépendance ou d\'attachement émotionnel aux jeux vidéo ?',
            answerOptions: [
                { answerText: 'Faible' },
                { answerText: 'Modéré' },
                { answerText: 'Élevé' },
                { answerText: 'Très élevé' },
            ],
        },

    ];
    const [ answers, setanswers ] = useState( [] );
    const [ currentQuestion, setCurrentQuestion ] = useState( 0 );
    const [ showScore, setShowScore ] = useState( false );

    const handleAnswerOptionClick = ( answer ) => {
        const nextQuestion = currentQuestion + 1;
        if ( nextQuestion < questions.length )
        {
            setCurrentQuestion( nextQuestion );
        } else
        {
            setShowScore( true );
        }
        return answers[ currentQuestion ] = answer;
    };

    return (
        <m.div exit={ { x: '100vw' } } className='parent  p-8'>

            <div className='app'>
                { showScore ? (
                    <div className='score-section' >
                        <div class="loader"></div>
                        Thanks for participating
                        <div class="loader"></div>

                    </div>

                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question { currentQuestion + 1 }</span>/{ questions.length }
                            </div>
                            <div className='question-text'>{ questions[ currentQuestion ].questionText }</div>
                        </div>
                        <div className='answer-section'>
                            { questions[ currentQuestion ].answerOptions.map( ( answerOption ) => (
                                <m.button className='b' onClick={ () => handleAnswerOptionClick( answerOption.answerText ) }><span>{ answerOption.answerText }</span></m.button>
                            ) ) }
                        </div>
                    </>
                ) }
            </div>
        </m.div>
    );
}

export default Quiz;