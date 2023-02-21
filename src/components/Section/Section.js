import PropTypes from 'prop-types'

export const Section = ({children , title}) => { 
    return <section>
        <h2>{title}</h2>
        {children}
    </section>
}

Section.prototype = { 
    children: PropTypes.element,
    title: PropTypes.string,
}