const winningPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
]

export const calculateWinner = (state: any) => {
    const squares = state.squares
    const isAllFull = squares.every((square:string) => square !== '')

    winningPatterns.forEach(pattern => pattern.forEach(num => {
        if (squares[pattern[0]] === '' ||
            squares[pattern[1]] === '' ||
            squares[pattern[2]] === '' 
        ) return
        else if (squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]) {
                    state.winner = squares[pattern[0]]
                }
        else if (squares[pattern[0]] !== squares[pattern[1]] &&
            squares[pattern[1]] !== squares[pattern[2]] &&
            isAllFull) {
                state.winner = 'draw'
            }
    }))
}