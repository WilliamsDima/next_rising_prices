const { render, screen } = require("@testing-library/react")
import '@testing-library/jest-dom'
import Empty from './index'

test('Render Empty', () => {
    render(<Empty />)
    const p = screen.getByRole('title')
    expect(p).toBeInTheDocument()
})