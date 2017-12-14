import {
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess,
    GENERATE_AURAL_UPDATE,
    generateAuralUpdate
} from './actions';

describe('restartGame', () => {
    it('should return the action', () => {
        const correctAnswer = 10;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer)
    });
});

describe('makeGuess', () => {
    it('should return the action', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('generateAuralUpdate', () => {
    it('should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

